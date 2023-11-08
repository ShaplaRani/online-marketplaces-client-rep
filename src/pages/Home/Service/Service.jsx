import { LuLaptop } from "react-icons/lu";
import {GrUserManager } from "react-icons/gr";
import {SiFreelancer } from "react-icons/si";
import {FcMoneyTransfer } from "react-icons/fc";
const Service = () => {
    return (
        <div className="container mx-auto mb-20">
             <div className="text-center mb-10">
             <h3 className="font-bold text-2xl mb-2">Need something done?</h3>
            <p className="font-medium text-lg">Most viewed and all-time top-selling services</p>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {/* 1 */}
                 <div className="text-center p-4 space-y-3">
                     <div className="flex justify-center">< LuLaptop className="text-5xl text-gray-600">
                        </LuLaptop></div>
                    <h2 className="text-lg font-medium">Post a job</h2>
                    <p className="text-base font-medium">It is free and easy to post a job. Simply fill
                    in a title, description.</p>
                 </div>
                 {/* 2 */}
                 <div className="text-center p-4 space-y-3">
                     <div className="flex justify-center">< SiFreelancer className="text-5xl text-gray-600">
                        </SiFreelancer></div>
                    <h2 className="text-lg font-medium">Choose freelancers </h2>
                    <p className="text-base font-medium">It is free and easy to post a job. Simply fill
                    in a title, description.</p>
                 </div>
                 {/* 3 */}
                 <div className="text-center p-4 space-y-3">
                     <div className="flex justify-center">< FcMoneyTransfer className="text-5xl text-gray-600">
                        </FcMoneyTransfer></div>
                    <h2 className="text-lg font-medium">Pay safely </h2>
                    <p className="text-base font-medium">It is free and easy to post a job. Simply fill
                    in a title, description.</p>
                 </div>
                 {/* 4 */}
                 <div className="text-center p-4 space-y-3">
                     <div className="flex justify-center">< GrUserManager className="text-5xl text-gray-600">
                        </GrUserManager></div>
                    <h2 className="text-lg font-medium">We’re here to help</h2>
                    <p className="text-base font-medium">It is free and easy to post a job. Simply fill
                    in a title, description.</p>
                 </div>
                
            </div>
        </div>
    );
};

export default Service;