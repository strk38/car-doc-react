import { useEffect, useState } from "react";
import ServiceCard from "./service";
import { url_default } from "../../../routes/url_main";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // fetch('services.json')
        fetch(`${url_default}/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
            <div className="text-center space-y-4 mb-6">
                <h1 className="text-lg font-bold text-orange-600">Service</h1>
                <h1 className="text-4xl font-bold text-black">Our Service Area</h1>
                <p className="text-sm font-semibold text-gray-500">
                    The majority have suffered alteration in some form, by injected humour, or randomised words <br />which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
            <div className="btn btn-outline border-orange-600 text-orange-600">More Services</div>
        </div>
    );
};

export default Services;