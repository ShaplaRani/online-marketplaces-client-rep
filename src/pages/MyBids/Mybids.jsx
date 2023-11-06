import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Mybids = () => {
    const {user} = useAuth();
     const [bidJobs, setBidJobs] = useState();
    const url = `http://localhost:5000/api/user-email?email=${user?.email}`
    
    useEffect(() => {
        axios.get(url)
        .then(data => {
            setBidJobs(data.data)
        })
    },[url])

    console.log(bidJobs);
    return (
        <div className="bg-orange-50 py-20">
        <h2 className="text-5xl">My Bits: {}</h2>
        <div className=" w-10/12 mx-auto bg-white rounded-lg">
            <table className=" text-center table w-full">
                {/* head */}
                <thead className="bg-emerald-400 text-lg font-medium text-white">
                    <tr>
                        
                        
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bidJobs.map(job => <tr key={job._id}>
                            <td>{job.title}</td>
                            <td>{job.userEmail}</td>
                            <td>{job.date}</td>
                            <td>{job.status}</td>
                            <td>complete</td>
                        </tr>)
                    }

                {/* <tr> */}
           
            
            {/* <td>
            Job Title
            </td>
            <td>Email</td>
            <td>Deadline</td>
            <th>

                statue */}
                {/* {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> 
                    :
                        <button onClick={() => handleBookingConfirm(_id)} 
                        className="btn btn-ghost btn-xs">Please Confirm</button>} */}
            {/* </th>
            <th>
                Complete
            </th> */}
        {/* </tr> */}

                    {/* {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm ={handleBookingConfirm}
                        ></BookingRow>)
                    } */}
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default Mybids;