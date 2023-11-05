import banner from "../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className=" lg:flex items-center container mx-auto p-4 mt-10 lg:mt-0">
            <div className="flex-1 space-y-7 text-center lg:text-left">
                  <h3 className="font-bold text-5xl leading-tight">Freelance Services For <br />
                    Your Business</h3>
                    <p className="text-lg font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">Work with talented people at the most affordable price to get the most
                    out of your time and cost</p>
                    <button className="bg-emerald-400 text-xl font-normal text-white py-3 px-6 rounded-3xl ">Get Started</button>
            </div>
             <div className=" flex-1 bg-orange-100">
                <img className="" src={banner} alt="" />
             </div>
        </div>
    );
};

export default Banner;