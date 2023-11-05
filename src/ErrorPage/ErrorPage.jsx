import { Link, useRouteError } from "react-router-dom";
import errorPic from '../assets/errorPic.jpg'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='h-screen flex flex-col gap-3 justify-center items-center'>

                {
                    error.status === 404 && <div>
                        <img className="w-1/3 mx-auto" src={errorPic} alt="" />
                        {/* <h3 className="text-lg mb-4">Page Not Found</h3> */}
                      <div className="  flex mt-6 justify-center">
                      <button className="bg-emerald-400 text-white py-3 text-xl font-normal px-6 rounded-lg">  <Link to="/" >
                        Back to home </Link></button>
                      </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;