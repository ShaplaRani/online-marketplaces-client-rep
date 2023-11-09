import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { BiDiamond } from "react-icons/bi";

const Mybids = () => {
    const {user} = useAuth();
     const [bidJobs, setBidJobs] = useState([]);
     //const [isTrue, setIsTrue] = useState(null)
     const [loader, setLoader] = useState(true)


     //http://localhost:5000
    const url = `http://localhost:5000/api/user-email?email=${user?.email}`
    
    useEffect(() => {
        axios.get(url,{withCredentials:true})
        .then(data => {
            setBidJobs(data.data)
            setLoader(false)
        })
    },[url])
     
    const handleComplete = (id) => {
       // console.log(id);
        fetch(`http://localhost:5000/api/delete-complete/${id}`,{
            method:'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({complete: true,status: "complete"})
        })
        .then(res => res.json())
        .then(data => {
           // console.log('data',data);
            if(data.modifiedCount > 0) {
               
                const remaining = bidJobs.filter(job => job._id != id);
                 const updated =  bidJobs.find( job => job._id == id);
                 updated.complete = true;
                 updated.status = "complete";
                const newJobs = [ ...remaining, updated];
            
                setBidJobs(newJobs);
                console.log('delete');
                //setIsTrue(true);
            }
        })
   }

//sorting
    const  handleSort =() => {
        axios.get(`http://localhost:5000/api/user-email?email=${user?.email}&sortField=status&sortOrder=asc`,
        {withCredentials:true})
        .then(data => {
            console.log('sort');
            setBidJobs(data.data)
            setLoader(false)
        })

    }
    
    return (
        <div className="bg-blue-100 container mx-auto py-20 min-h-[80vh] my-20 rounded-lg">
            <Helmet>
                <title>Bid Jobs | My Bids</title>
            </Helmet>
            <BiDiamond className="mx-auto text-4xl mb-2 text-blue-700"></BiDiamond>
        <h2 className="text-4xl text-center mb-10 text-blue-700 font-bold"> All Bids </h2>
           <div className="flex justify-end mr-10 mb-7">
              <button onClick={ handleSort} className="btn bg-blue-700 text-white">Sorting</button>
           </div>
        <div className=" w-11/12 mx-auto bg-white rounded-lg">
            <table className=" text-center table w-full">
                {/* head */}
                <thead className="bg-emerald-400 text-lg font-medium text-white">
                    <tr>
                        
                        
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th >Complete</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                         loader?<span className="loading loading-spinner flex justify-center text-primary"></span> :   bidJobs?.map(job => <tr key={job._id}>
                            <td>{job.title}</td>
                            <td>{job.userEmail}</td>
                            <td>{job.date}</td>
                            <td>{job.status}</td>
                            <th className=" border text-lg">
                                {
                                  job.status == 'in progress' || job.status == 'complete'?
                                   <button disabled={false}
                                    onClick={() => handleComplete(job._id)}
                                    
                                     >{job.complete?'':'Complete'}</button> :
                                   <button disabled ={true} className="py-1 px-2 rounded-lg">
                                     Complete
                                   </button> 
                                }
                            </th>
                            
                        </tr>)
                    }

               </tbody>

            </table>
        </div>
         </div>
    );
};

export default Mybids;

// className={isTrue?'hidden':''}