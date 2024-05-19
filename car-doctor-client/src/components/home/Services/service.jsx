import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card w-80 border-2 border-gray-200">
                <figure className="px-5 pt-5">
                    <img src={img} className="h-40 rounded-lg" alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>

                    <div className="flex justify-between items-center">
                        <div className="text-orange-600 font-bold">Price: {price}</div>
                        <div className="text-orange-600"><Link to={`/checkout/${_id}`} className="btn bg-transparent border-none text-orange-600 rounded-xl"><FaArrowRight /></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;