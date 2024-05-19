
const About = () => {


    return (
        <div>
            <div className="hero min-h-fit my-16">
                <div className="hero-content flex-col md:flex-row mx-1">
                    <div className='md:w-1/2 relative'>
                        <img src='https://i.postimg.cc/c4ghkmxq/person.jpg' className="w-3/4 rounded-lg shadow-2xl" />
                        <img src='https://i.postimg.cc/fWg5vFhj/parts.jpg' className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                    <div className='md:w-1/2 space-y-2'>
                        <h1 className="text-lg font-bold text-orange-600">About Us</h1>
                        <h1 className="text-4xl font-bold text-black">We are qualified <br />& of experience <br />in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /> <br />
                            The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn bg-orange-600 text-white font-semibold">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;