import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import logo from '../../assets/logo2.png'
const Footer = () => {
    return (
        <div className=" bg-orange-100 py-24 ">
            <div className="w-10/12  mx-auto flex justify-between mb-7" >
                {/* <p className="uppercase font-semibold md:font-bold md:text-2xl text-orange-500"
                    data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">The site of our campaigns</p> */}
                    <div className="flex items-center">
                       <img className="w-24 h-24" src={logo} alt="" />
                       <h2 className="text-2xl font-semibold">Bit Jobs</h2>
                    </div>
                <div className="flex gap-2 md:gap-4" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className="w-7 h-7 items-center rounded-full flex justify-center bg-white">
                        <a className="" href=""><BiLogoFacebook className="text-blue-500"></BiLogoFacebook></a>
                    </div>
                    <div className="w-7 h-7 items-center rounded-full flex justify-center bg-white">
                        <a href=""><FaGithub className="bg-white"></FaGithub></a>
                    </div>
                    <div className="w-7 h-7 items-center rounded-full flex justify-center bg-white">
                        <a href=""><FcGoogle></FcGoogle></a>
                    </div>
                </div>

            </div>
            <footer className="  grid grid-cols-2 md:grid-cols-4 justify-between text-black w-10/12 
             mx-auto ">
                <nav className="text-base font-medium text-gray-700" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <header className="footer-title text-gray-900 opacity-100">Services</header>

                    <p className="link link-hover">Web Development</p>
                    <p className="link link-hover">Digital Marketing</p>
                    <p className="link link-hover">Graphics</p>
                    
                </nav>
                <nav className="text-base font-medium text-gray-700" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <header className="footer-title  text-gray-900 opacity-100">Site links</header>
                    <p className="link link-hover">Home</p>
                    <p className="link link-hover">Register</p>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact us</p>
                    <p className="link link-hover">Login</p>
                    <p className="link link-hover">Sign Out</p>


                </nav>
                <nav className="text-base font-medium text-gray-700" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <header className="footer-title mt-7 md:mt-0  text-gray-900 opacity-100">Legal</header>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </nav>
                <div className="space-y-2 mt-7 md:mt-0" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <h3 className="uppercase font-bold text-xl md:text-lg lg:text-xl text-orange-500">subscribe now</h3>
                    <div className="form-control">

                        <input type="email" placeholder="email" name="email" className="input input-bordered"
                            required />
                        <input type="submit" value="SEND" className="input text-white input-bordered mt-2 bg-slate-800" />
                    </div>


                </div>
            </footer>
        </div>
    );
};

export default Footer;