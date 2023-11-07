import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


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


   const handleAccept = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/api/buyer-email/${id}`,{
            method:'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: "in progress"})
        })
        .then(res => res.json())
        .then(data => {
            console.log('data',data);
            if(data.modifiedCount > 0) {
                //update state
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Status Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                const remaining = bidJobs.filter(booking => booking._id != id);
                 const updated =  bidJobs.find( booking => booking._id == id);
                 updated.status = "in progress";

                const newJobs = [updated, ...remaining];
                setBidJobs(newJobs);
            }
        })
   }
   
  

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
                            <th><button onClick={() =>handleAccept(job._id)} className="">Accept</button></th>
                            <th><button>Reject</button></th>
                        </tr>)
                    }

               </tbody>

            </table>
        </div>
         </div>
    );
};

export default BidRequest;