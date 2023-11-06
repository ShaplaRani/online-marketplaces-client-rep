import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const JobDetails = () => {
    const {user} = useAuth();
    const job = useLoaderData()
    const {title,email, date,maxPrice} = job;
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
            status:'pending'
            
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
                }
            })
    }
    return (
        <div className="bg-orange-50">
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
                    
                     
                    <div className="w-full text-white mt-6 py-2 text-center rounded-lg text-xl font-semibold bg-emerald-400">
                         <button className={user.email === email? "disable":"enable"}>
                            Bid On The Project</button>
                    </div>
                </form> 
                </div >
                <div className="bg-white col-span-5">
                      <h2>Description</h2>
                 </div>
           </div>
        </div>
    );
};

export default JobDetails;