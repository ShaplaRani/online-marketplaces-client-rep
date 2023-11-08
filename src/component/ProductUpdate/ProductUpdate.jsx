 import { useLoaderData } from "react-router-dom";

import axios from "axios";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ProductUpdate = () => {
    
     const loaderProduct = useLoaderData();
    console.log(loaderProduct);

    const {_id,title,email,category, date,maxPrice,minPrice,description} = loaderProduct;

     const handleUpdateJob = e  => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const date = form.date.value;
        const category = form.category.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const description= form.message.value;
       
        const updateJob = {
            title,
           
            date,
            category,
            maxPrice,
            minPrice,
            description
            
        }
        console.log(updateJob);
        axios.put(`http://localhost:5000/api/update-product/${_id}`,updateJob)
            .then(data => {
                console.log(data.data);
                if (data?.data?.modifiedCount > 0) {
                      Swal.fire({
                        title: 'Success!',
                        text: 'Job Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

     }
    return (
        <div>
            <Helmet>
                <title>Bid Jobs | Update Job {_id}</title>
            </Helmet>
            <h3 className="text-center text-3xl font-bold text-blue-700 mt-14 ">Update Job</h3>
            <div className="hero p-14 bg-blue-100 mb-20 mt-10 container mx-auto rounded-lg" >

                <form onSubmit={handleUpdateJob} className="card-body w-full space-y-4">
                    {/* email and job tile */}
                    <div className="md:flex md:gap-4">
                       {/* Email */}
                       <div className="form-control flex-1">
                            <input type="email" placeholder="Your Email" defaultValue={email} 
                            name="email" className="input input-bordered" required readOnly />
                        </div>
                        {/* title */}
                        <div className="form-control flex-1 mt-5 md:mt-0">
                            <input type="text" placeholder="Job Title" defaultValue={title} name="title" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* category and date */}
                    <div className="md:flex md:gap-4">
                        {/* category */}
                        
                        <div className="form-control flex-1">
                        <select value={category} name="category" id="" className="input input-bordered">
                             <option value="Web Development">Web Development</option>
                             <option value="Digital Marketing">Digital Marketing</option>
                             <option value="Graphics Design">Graphics Design</option>
                        </select>
                        </div>
                       
                        {/* date */}
                        <div className="form-control flex-1 mt-5 md:mt-0">
                            <input type="date" placeholder="Deadline"defaultValue={date} name="date" className="input input-bordered" required />
                        </div>
                    </div>
                      {/* maximum and minimum price */}
                    <div className="md:flex md:gap-4">
                      
                        {/* minimum */}
                        <div className="form-control flex-1">
                            <input type="text" defaultValue={minPrice} placeholder="Minimum Price" name="minPrice" className="input input-bordered" required />
                        </div>
                         {/* maximum */}
                       <div className="form-control flex-1 mt-5 md:mt-0">
                            <input type="text" defaultValue={maxPrice} placeholder="Maximum Price" name="maxPrice" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <textarea name="message" defaultValue={description} id="" cols="30" rows="10" placeholder="Your Message"
                        className="input-bordered p-4 input h-40"></textarea>
                       
                    </div> 

                    <div className="form-control mt-6">

                        <input type="submit" value="Update Job" className="btn bg-emerald-400 text-xl font-bold 
                         text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;