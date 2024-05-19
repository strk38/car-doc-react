const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin: [
        // 'http://localhost:5173',
        'https://car-doctor-react-e5189.web.app',
        'https://car-doctor-react-e5189.firebaseapp.com'],
    credentials: true
}
));
app.use(express.json());
app.use(cookieParser());


// console.log(process.env.DB_PASS) // remove this after you've confirmed it is working

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g9b7gzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//middlewares
const logger = async (req, res, next) => {
    console.log('called', req.host, req.originalUrl)
    next();
}

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.token;
    console.log('value of token in middleware', token);
    if (!token) {
        return res.status(401).send({ message: 'not authorized' })
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).send({ message: ' unauthorized' })
        }
        console.log('value in token', decoded)
        req.user = decoded;
        next()
    })

}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const database = client.db("CarDoc");
        const serviceCollection = database.collection("services");
        const orderCollection = database.collection("orders");

        //auth relatd api
        app.post('/jwt', logger, async (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none'
                })
                .send({ success: true });
        })

        app.post('/logout', async (req, res) => {
            const user = req.body;
            console.log('logging out', user);
            res.clearCookie('token', { maxAge: 0 }).send({ success: true })
        })

        //services related api
        //fetch Data from MongodB to http://localhost:5000/services
        app.get('/services', logger, async (req, res) => {
            const cursor = serviceCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }

            const options = {
                // Include only the `title`, `price` and service_id fields in the returned document
                projection: { title: 1, price: 1, service_id: 1, img: 1 },
            };

            const result = await serviceCollection.findOne(query, options);
            res.send(result);


        })

        // bookings in client side fetches data from Orders in server <<<---------
        //fetch Data from MongodB to http://localhost:5000/services
        app.get('/orders', logger, verifyToken, async (req, res) => {
            // console.log(req.query.email);
            // console.log('rok rok', req.cookies.token);
            console.log('user in valid token', req.user);

            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }

            const cursor = orderCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })
        //inserting/ Post "orders" data into MongodB
        app.post('/orders', logger, async (req, res) => {
            const order = req.body; //req data from clients
            // console.log(order);
            const result = await orderCollection.insertOne(order);
            res.send(result);   //sending response to db ???
        })

        //to update/edit data: 
        // Put :- updates data if exists otherwise create new data based on info.
        // Patch :- data needs to be present for patching otherwise might give error 
        app.patch('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const upDatedOrder = req.body;
            console.log(upDatedOrder);
            const updateDoc = {
                $set: {
                    status: upDatedOrder.status
                },
            };

            const result = await orderCollection.updateOne(query, updateDoc);
            res.send(result);
        })

        //delete data by id from db
        app.delete('/orders/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await orderCollection.deleteOne(query);
            res.send(result);
        })

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


//to check if server is running
app.get('/', (req, res) => {
    res.send('Car Doctor server is running')
})

app.listen(port, () => {
    console.log(`Car Doctor server is running on port: ${port}`)
})