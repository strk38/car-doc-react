
import CheckoutForm from "./checkoutForm";
import CheckoutBanner from "./checkoutBanner";
import { useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
    const service = useLoaderData();
    // console.log('chkPg', service);
    // const { _id, service_id, title, price } = service;

    return (
        <div>

            <CheckoutBanner data={'Check Out'}></CheckoutBanner>
            <CheckoutForm service={service}></CheckoutForm>

        </div>
    );
};

export default CheckoutPage;