import { useContext } from "react";
import { AuthContext } from "../../Providers/authProvides";
import { url_default } from "../../../routes/url_main";

import moment from 'moment';

const CheckoutForm = ({ service }) => {
    // console.log(service);
    const { _id, title, price, img } = service;
    // console.log(img);
    const { user } = useContext(AuthContext);
    const currentDate = moment().format('DD/MM/YYYY');

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;

        const fName = form.f_name.value;
        const LName = form.l_name.value;

        const phone = form.phone.value;
        const email = form.email.value;

        const message = form.message.value;

        const order = {
            customerName: fName + ' ' + LName,
            phone,
            email,
            img: img ? img : '',
            message,
            service_id: _id,
            service: title,
            price: price,
            currentDate
        }
        console.log(order);

        //sending data to server (method POST means creating)
        fetch(`${url_default}/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Orders added successfully!!');
                }
            })
    }

    return (
        <div className="bg-gray-100 rouunded mb-4">
            <form onSubmit={handleOrder} className="py-8 px-10">
                <div className="flex mb-4">
                    <input type='text' defaultValue={user?.displayName} name='f_name' placeholder='First Name' className="input input-bordered w-1/2 mr-1" required></input>
                    <input type='text' name='l_name' placeholder='Last Name' className="input input-bordered w-1/2 ml-1" required></input>
                </div>
                <div className="flex mb-4">
                    <input type='text' name='phone' placeholder='Phone' className="input input-bordered w-1/2 mr-1" required></input>
                    <input type='email' defaultValue={user?.email} name='email' placeholder='Email' className="input input-bordered w-1/2 ml-1" required></input>
                </div>
                <div className="flex mb-4">
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="textarea textarea-bordered w-full h-32"
                        required
                    ></textarea>

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-orange-600 text-white rounded-lg">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;