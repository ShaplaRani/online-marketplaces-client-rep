import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import './job.css'
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const navigate = useNavigate();
    const [data, setDate] = useState(true)
    const {user} = useAuth();
    const job = useLoaderData()
    const {title,email, date,maxPrice,minPrice,description,category} = job;

     useEffect(() => {
        if(user.email == email){
            setDate(true)
        }else{
            setDate(false)
        }
   
     },[user])
     const handleBit = e => {
        e.preventDefault();
        
        const form = e.target;
        //const userEmail = form.userEmail.value;
        const buyerEmail = form.buyerEmail.value;
        const date = form.date.value;
        const price = form.price.value;
        
        const userEmail = user?.email;
        const addJob = {
            userEmail,
            buyerEmail,
            date,
            price,
            title,
            status:'pending',
            complete:false,
            request:false
            
        }
        console.log(addJob);
       
        fetch('http://localhost:5000/api/user/create-bitJob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                      Swal.fire({
                        
                        title: 'Success!',
                        text: 'Bid Job added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/bids')
                }
            })
    }
    return (
        <div className="bg-blue-100 container mx-auto my-20 rounded-lg">
            <Helmet>
                <title>Bid Jobs | Job Details {job._id}</title>
            </Helmet>
           <div className="lg:w-10/12 mx-auto py-32 px-4 md:px-8 lg:px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="bg-white col-span-7 py-14 rounded-lg">
                <form onSubmit={handleBit} className=" w-4/5 md:w-3/4 lg:w-3/4 mx-auto">
                    
                   
                    {/* user email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800  mb-1">
                             User Email:</span>
                        </label>
                        <input type="email" placeholder="email" name="userEmail" defaultValue={user?.email}
                         className="input input-bordered"
                         required readOnly />
                    </div>
                    {/* buyer email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800  mb-1">
                               Buyer Email:</span>
                        </label>
                        <input type="email" defaultValue={email} placeholder="email" name="buyerEmail" className="input input-bordered"
                         required readOnly/>
                    </div>
                     {/* deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800  mb-1">
                              Deadline:</span>
                        </label>
                       
                        <input type="date" defaultValue={date} placeholder="Date" name="date" className="input input-bordered"
                         required />
                    </div>
                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-gray-800  mb-1">
                            Price:</span>
                        </label>
                       
                        <input type="text"defaultValue={maxPrice } placeholder="price" name="price" className="input input-bordered"
                         required />
                    </div>
                    
                     
                    <div className=" ">
                         <button disabled={data} className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                            Bid On The Project</button>
                    </div>
                </form> 
                </div >
                <div className="bg-white col-span-5 rounded-lg pt-10">
                  
                    <div className='card-body  '>
                    <h2 className="text-xl font-bold ">Title: {title}</h2>
                    <h2 className="text-xl font-semibold ">Category: {category}</h2>
                    <p className='font-medium text-lg '>Deadline: {date}</p>
                    <p className='font-medium text-lg '> Price: ${minPrice} - {maxPrice}$ per hour</p>
                    {/* <p className='font-medium text-lg '>Maximum Price: {maxPrice} $</p>
                    <p className='font-medium text-lg '>Minimum Price: {minPrice} $</p> */}
                    
                </div>
                <div className='card-body'>
                      
                         <p>{description}</p>
                        
                       </div>
                 </div>
           </div>
        </div>
    );
};

export default JobDetails;

// className={user.email == email?'disabled:':''}