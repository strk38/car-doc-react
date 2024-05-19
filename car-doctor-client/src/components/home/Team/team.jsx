import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-12 mb-8">
                <div className="text-center space-y-2 mb-6">
                    <h1 className="text-lg font-bold text-orange-600">Team</h1>
                    <h1 className="text-4xl font-bold text-black">Meet Our Team</h1>
                    <p className="text-sm font-semibold text-gray-500">
                        The majority have suffered alteration in some form, by injected humour, or randomised words <br />which do not look even slightly believable.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-3 mx-auto mb-4">

                    <div className="card w-80 border border-gray-200">
                        <figure className="px-3 pt-3">
                            <img src="https://i.postimg.cc/cJZcHGQZ/1.jpg" className="rounded-lg" alt="" />
                        </figure>
                        <div className="mx-2 my-3 text-center space-y-1">
                            <h2 className="text-lg font-bold text-black">Car Engine Plug</h2>
                            <h2 className="text-sm  font-semibold text-gray-500">
                                Expert Team
                            </h2>
                            <div className="flex justify-center gap-4">
                                <FaFacebook className="text-xl" />
                                <FaTwitter className="text-xl" />
                                <FaInstagram className="text-xl" />
                                <FaLinkedin className="text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 border border-gray-200">
                        <figure className="px-3 pt-3">
                            <img src="https://i.postimg.cc/mrwy1pw9/2.jpg" className="rounded-lg" alt="" />
                        </figure>
                        <div className="mx-2 my-3 text-center space-y-1">
                            <h2 className="text-lg font-bold text-black">Car Engine Plug</h2>
                            <h2 className="text-sm  font-semibold text-gray-500">
                                Expert Team
                            </h2>
                            <div className="flex justify-center gap-4">
                                <FaFacebook className="text-xl" />
                                <FaTwitter className="text-xl" />
                                <FaInstagram className="text-xl" />
                                <FaLinkedin className="text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="card w-80 border border-gray-200">
                        <figure className="px-3 pt-3">
                            <img src="https://i.postimg.cc/C1xHGCPQ/3.jpg" className="rounded-lg" alt="" />
                        </figure>
                        <div className="mx-2 my-3 text-center space-y-1">
                            <h2 className="text-lg font-bold text-black">Car Engine Plug</h2>
                            <h2 className="text-sm  font-semibold text-gray-500">
                                Expert Team
                            </h2>
                            <div className="flex justify-center gap-4">
                                <FaFacebook className="text-xl" />
                                <FaTwitter className="text-xl" />
                                <FaInstagram className="text-xl" />
                                <FaLinkedin className="text-xl" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Team;