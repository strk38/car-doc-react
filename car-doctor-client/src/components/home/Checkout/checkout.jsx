// import { useLoaderData } from "react-router-dom";

import CheckoutBanner from "./checkoutBanner";



const Checkout = () => {
    // const service = useLoaderData();
    // const { _id, service_id, title, price } = service;

    return (
        <div>

            <CheckoutBanner data={'Checkout Details'}></CheckoutBanner>
            {/* <div>{service_id}</div> */}

        </div>
    );
};

export default Checkout;