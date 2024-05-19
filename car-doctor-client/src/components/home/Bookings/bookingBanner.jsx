

const BookingBanner = ({ data }) => {
    return (
        <div>
            <div className="hero w-full h-48 rounded-lg my-4" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(https://i.postimg.cc/d3z2cbqb/checkout.png)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-50">
                    <div className="text-center my-12 relative">
                        <h1 className="ml-10 mb-5 md:text-3xl font-bold text-white text-start">{data}</h1>

                        <button className="bg-orange-600 text-white border-none rounded px-4 w-fit absolute transform -translate-x-1/2  -bottom-24">Home/{data}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingBanner;