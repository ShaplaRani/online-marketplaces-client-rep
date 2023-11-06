import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const BidRequest = () => {
    const {user} = useAuth();
    const [bidJobs, setBidJobs] = useState([]);
   const url = `http://localhost:5000/api/buyer-email?email=${user?.email}`
   
   useEffect(() => {
       axios.get(url)
       .then(data => {
           setBidJobs(data.data)
       })
   },[url])

   console.log(bidJobs);
    return (
        <div className="bg-orange-50 py-20 min-h-[80vh]">
        <h2 className="text-5xl"> Bits Requests: {}</h2>
        <div className=" w-10/12 mx-auto bg-white rounded-lg">
            <table className=" text-center table w-full">
                {/* head */}
                <thead className="bg-emerald-400 text-lg font-medium text-white">
                    <tr>
                        
                        
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Accept</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bidJobs?.map(job => <tr key={job._id}>
                            <td>{job.title}</td>
                            <td>{job.buyerEmail}</td>
                            <td>{job.date}</td>
                            <td>{job.status}</td>
                            <td>Accept</td>
                            <td>Reject</td>
                        </tr>)
                    }

               </tbody>

            </table>
        </div>
         </div>
    );
};

export default BidRequest;