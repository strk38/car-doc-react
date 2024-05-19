

const Features = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-12 mb-8">
            <div className="text-center space-y-2 mb-6">
                <h1 className="text-lg font-bold text-orange-600">Core Features</h1>
                <h1 className="text-4xl font-bold text-black">Why Choose Us</h1>
                <p className="text-sm font-semibold text-gray-500">
                    The majority have suffered alteration in some form, by injected humour, or randomised words <br />which do not look even slightly believable.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mx-auto mb-4">

                <div className="card w-36 border border-gray-200">
                    <figure className="px-3 pt-3">
                        <img src="/icons/group.svg" className="" alt="" />
                    </figure>
                    <div className="mx-2 my-3">
                        <h2 className="text-sm  text-center font-semibold text-gray-500">
                            Expert Team
                        </h2>
                    </div>
                </div>
                <div className="card w-32 border border-gray-200">
                    <figure className="px-3 pt-3">
                        <img src="/icons/deliveryt.svg" className="" alt="" />
                    </figure>
                    <div className="mx-2 my-3">
                        <h2 className="text-sm text-center font-semibold text-gray-500">
                            Timely Delivery
                        </h2>
                    </div>
                </div>
                <div className="card w-32 border border-gray-200">
                    <figure className="px-3 pt-3">
                        <img src="/icons/person.svg" className="" alt="" />
                    </figure>
                    <div className="mx-2 my-3">
                        <h2 className="text-sm  text-center font-semibold text-gray-500">
                            24/7 Support
                        </h2>
                    </div>
                </div>
                <div className="card w-32 border border-gray-200">
                    <figure className="px-3 pt-3">
                        <img src="/icons/Wrench.svg" className="" alt="" />
                    </figure>
                    <div className="mx-2 my-3">
                        <h2 className="text-sm  text-center font-semibold text-gray-500">
                            Best Equipment
                        </h2>
                    </div>
                </div>
                <div className="card w-32 border border-gray-200">
                    <figure className="px-3 pt-3">
                        <img src="/icons/check.svg" className="" alt="" />
                    </figure>
                    <div className="mx-2 my-3">
                        <h2 className="text-sm  text-center font-semibold text-gray-500">
                            100% Guranty
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;