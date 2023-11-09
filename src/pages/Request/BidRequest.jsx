import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import { BiDiamond } from "react-icons/bi";

const BidRequest = () => {
    const {user} = useAuth();
    const [bidJobs, setBidJobs] = useState([]);
   
    const [loader, setLoader] = useState(true);
    //const [data, setData] = useState(true)
   const url = `https://online-marketplaces-server.vercel.app/api/buyer-email?email=${user?.email}`

   useEffect(() => {
    axios.get(url,{withCredentials:true})
    .then(data => {
        setBidJobs(data.data);
        setLoader(false)
    })
},[url])


   const handleAccept = (id) => {
        console.log(id);
        fetch(`https://online-marketplaces-server.vercel.app/api/update-status/${id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: "in progress",request:true})
        })
        .then(res => res.json())
        .then(data => {
           // console.log('data',data);
            if(data.modifiedCount > 0) {
                //update state
                
                const remaining = bidJobs.filter(job => job._id != id);
                 const updated =  bidJobs.find( job => job._id == id);
                 updated.status = "in progress";
                 updated.request =true;
                const newJobs = [ ...remaining,updated];
            
                setBidJobs(newJobs);
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Status Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
               // setData(!data)
                //setLoader(false)
                //setIsTrue(true);
            }
        })
   }

   const handleReject = (id) => {
    console.log(id);
    fetch(`https://online-marketplaces-server.vercel.app/api/update-status/${id}`,{
        method:'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: "canceled",request:true})
    })
    .then(res => res.json())
    .then(data => {
        //console.log('data',data);
        if(data.modifiedCount > 0) {
            //update state
            
            const remaining = bidJobs.filter(job => job._id !== id);
             const updated =  bidJobs.find( job => job._id === id);
             updated.status = "canceled";
                updated.request =true;
            const newJobs = [ ...remaining,updated];
            console.log('new', updated);
            setBidJobs(newJobs);
            Swal.fire({
                title: 'Success!',
                text: 'Job Status Update Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            //setData(!data)
           
        }
    })
}

   console.log(bidJobs);
    return (
        <div className="bg-blue-100 py-20 min-h-[80vh] container mx-auto rounded-lg my-20">
            <Helmet>
                <title>Bid Jobs | Bid Request</title>
            </Helmet>
            <BiDiamond className="mx-auto text-4xl mb-2 text-blue-700"></BiDiamond>
         <h2 className="text-4xl text-blue-700 font-bold mb-10 text-center">  All Bids Requests</h2>
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
                    loader?<span className="loading loading-spinner flex justify-center text-primary"></span> :    bidJobs?.map(job => <tr key={job._id}>
                            <td>{job.title}</td>
                            <td>{job.buyerEmail}</td>
                            <td>{job.date}</td>
                            <td>{job.status}</td>
                            <th><button onClick={() =>handleAccept(job._id)}
                           >{job.request? '':'Accept' }</button></th>

                            <th><button onClick={() =>handleReject(job._id)}
                             >{job.request?'':'Reject'}</button></th>
                            
                        </tr>)
                    }

               </tbody>

            </table>
        </div>
         </div>
    );
};

export default BidRequest;