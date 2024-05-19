
// const jwt = require('jsonwebtoken');
// jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
// instal JsonWebToken
// node
// require('crypto').randomBytes(64).toString('hex')

/*
How to store token in client side
1. memory --> ok type
2. local storage --> ok type(xss)
3. cookies: http only
*/


/*
1. set cookies wuth hrrponly. for development secure: false, true [for https]

2. cors setting :
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}
));

3. clinet side axios setting
*/