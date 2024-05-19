

const Carousel = () => {
    return (
        <div className="carousel w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full h-96">
                {/* <img src="./public/images/homeCarousel/1.jpg" className="w-full rounded-md" /> */}
                <div className="hero w-full" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(https://i.postimg.cc/Jn0ZDrtw/1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70">
                        <div className="max-w-md mt-12 ml-10">
                            <h1 className="mb-5 text-5xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="mb-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-warning text-white font-bold mr-2">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-1">
                    <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-96">
                {/* <img src="./public/images/homeCarousel/2.jpg" className="w-full rounded-md" /> */}
                <div className="hero w-full" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(https://i.postimg.cc/WzrnzNfN/2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70">
                        <div className="max-w-md mt-12 ml-10">
                            <h1 className="mb-5 text-5xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="mb-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-warning text-white font-bold mr-2">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2  right-5 bottom-1">
                    <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-96">
                {/* <img src="./public/images/homeCarousel/3.jpg" className="w-full rounded-md" /> */}
                <div className="hero w-full" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(https://i.postimg.cc/RCnGXdCk/3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70">
                        <div className="max-w-md mt-12 ml-10">
                            <h1 className="mb-5 text-5xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="mb-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-warning text-white font-bold mr-2">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-1">
                    <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-96">
                {/* <img src="./public/images/homeCarousel/4.jpg" className="w-full rounded-md" /> */}
                <div className="hero w-full" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(https://i.postimg.cc/Dyk6DG88/4.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70">
                        <div className="max-w-md mt-12 ml-10">
                            <h1 className="mb-5 text-5xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="mb-5 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-warning text-white font-bold mr-2">Discover More</button>
                            <button className="btn btn-outline btn-accent">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-1">
                    <a href="#slide3" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;