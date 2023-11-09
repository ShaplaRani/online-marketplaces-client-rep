
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { AiOutlineSafety,AiOutlineDollar } from "react-icons/ai";
const Talent = () => {
  
    return (
        <div className="container mx-auto  lg:flex items-center my-20 p-4">
             {/* 1 */}
            <div className="flex-1 space-y-6 "> 
                 <h2 className="text-2xl md:text-4xl font-bold mb-10">A whole world of freelance <br /> talent at your fingertips</h2>
                 <div className="flex items-center gap-4">
                    <p><PiIdentificationBadgeLight className="text-2xl text-blue-700"></PiIdentificationBadgeLight></p>
                     <div className="">
                         <h3 className=" text-xl font-medium mb-2">Proof of quality</h3>
                         <p className=" text-lg font-normal"> Check any pro’s work samples, client reviews, and identity verification.</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <p><AiOutlineDollar  className="text-2xl text-blue-700"></AiOutlineDollar ></p>
                     <div className="">
                         <h3 className=" text-xl font-medium mb-2">No cost until you hire</h3>
                         <p className=" text-lg font-normal "> Check any pro’s work samples, client reviews, and identity verification.</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <p><AiOutlineSafety className="text-2xl text-blue-700"></AiOutlineSafety></p>
                     <div className="">
                         <h3 className=" text-xl font-medium mb-2">Safe and secure</h3>
                         <p className=" text-lg font-normal"> Check any pro’s work samples, client reviews, and identity verification.</p>
                     </div>
                 </div>
            </div>
            {/* 2 */}
            <div className="flex-1  mt-20 lg:mt-0">
                 <img className="rounded-lg" src="https://i.ibb.co/GQcqK59/pik.jpg" alt="" />
             </div>
            
        </div>
    );
};

export default Talent;