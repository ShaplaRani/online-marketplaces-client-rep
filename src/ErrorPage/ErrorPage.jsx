import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='h-screen flex flex-col gap-3 justify-center items-center'>

                {
                    error.status === 404 && <div>
                        <h3 className="text-lg mb-4">Page Not Found</h3>
                        <Link to="/" className="bg-blue-600 text-white py-3 px-6 rounded-lg">
                            Go Back</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;