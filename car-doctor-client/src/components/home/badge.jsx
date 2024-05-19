import { FaBusinessTime, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Badge = () => {
    return (
        <div className="my-8">
            <footer className="footer p-10 bg-gray-900 justify-evenly">
                <div className='flex items-center'>
                    <div>
                        <h2 className="text-orange-600 text-4xl"><FaBusinessTime /></h2>
                    </div>
                    <div>
                        <h2 className="text-sm text-white">We are open monday-friday</h2>
                        <h2 className="text-xl text-white font-bold">7:00 am - 9:00 pm</h2>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div>
                        <h2 className="text-orange-600 text-4xl"><FaPhoneAlt /></h2>
                    </div>
                    <div>
                        <h2 className="text-sm text-white">Have a question?</h2>
                        <h2 className="text-xl text-white font-bold">+2546 251 2658</h2>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div>
                        <h2 className="text-orange-600 text-4xl"><FaLocationDot /></h2>
                    </div>
                    <div>
                        <h2 className="text-sm text-white">Need a repair? our address</h2>
                        <h2 className="text-xl text-white font-bold">Liza Street, New York</h2>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Badge;