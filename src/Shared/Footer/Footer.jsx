import { PiTwitterLogoLight } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import logo from '../../assets/logo2.png'
const Footer = () => {
    return (
        <div className=" bg-blue-100 pt-24 pb-8">
            <div className="w-10/12  mx-auto flex justify-between items-center mb-7 " >
               
                    <div className="flex items-center">
                       <img className="w-24 h-24" src={logo} alt="" />
                       <h2 className="text-2xl font-semibold">Bit Jobs</h2>
                    </div>
                <div className="flex gap-2 md:gap-4" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className="w-10 h-10 items-center rounded-full flex justify-center bg-white">
                        <a className="" href="https://facebook.com/yourwebsite"><BiLogoFacebook className="text-blue-500 text-xl"></BiLogoFacebook></a>
                    </div>
                    <div className="w-10 h-10 items-center rounded-full flex justify-center bg-white">
                        <a href="https://www.instagram.com/yourwebsite"><AiOutlineInstagram className=
                        "text-blue-500 text-xl"></AiOutlineInstagram></a>
                    </div>
                    <div className="w-10 h-10 items-center rounded-full flex justify-center bg-white">
                        <a href=" https://twitter.com/yourwebsite"><PiTwitterLogoLight className="text-xl text-blue-500"></PiTwitterLogoLight></a>
                    </div>
                </div>

            </div>
            <footer className="pb-20  grid grid-cols-2 md:grid-cols-4 justify-between text-black w-10/12 
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
                    <p className="link link-hover">My Bids</p>
                    <p className="link link-hover">Add Job</p>
                    <p className="link link-hover">My Posted Jobs</p>
                    <p className="link link-hover">Bid Request</p>
                    


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
                  
                   <p className="text-center">Contact: <a href="mailto:contact@bidJobs.com">contact@bidJobs.com</a></p>
                <p className="text-center">Address: 123 Main Street, City, Country</p>

                </div>
            </footer>
            <hr />
            <div className="mt-2">
                <p className="text-center">&copy; 2023 Bid Jobs. All rights reserved.</p>
                
            </div>
        </div>
    );
};

export default Footer;