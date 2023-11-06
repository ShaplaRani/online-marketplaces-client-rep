import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const AddJob = () => {
    const {user} = useAuth();
    console.log(user.email);
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const date = form.date.value;
        const category = form.category.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const description= form.message.value;
        const email = user?.email;
        const addJob = {
            title,
            email,
            date,
            category,
            maxPrice,
            minPrice,
            description
            
        }
        console.log(addJob);
        fetch('http://localhost:5000/api/user/create-product', {
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
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <h3>Add product</h3>
            <div className="hero p-14 bg-orange-100 my-20" >

                <form onSubmit={handleAddJob} className="card-body w-full space-y-4">
                    {/* email and job tile */}
                    <div className="md:flex gap-4">
                       {/* Email */}
                       <div className="form-control flex-1">
                            <input type="email" placeholder="Your Email" 
                            defaultValue={user?.email} name="email" className="input input-bordered"
                             required readOnly />
                        </div>
                        {/* title */}
                        <div className="form-control flex-1">
                            <input type="text" placeholder="Job Title" name="title" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* category and date */}
                    <div className="md:flex gap-4">
                        {/* category */}
                        
                        <div className="form-control flex-1">
                        <select name="category" id="" className="input input-bordered">
                             <option value="Web Development">Web Development</option>
                             <option value="Digital Marketing">Digital Marketing</option>
                             <option value="Graphics Design">Graphics Design</option>
                        </select>
                        </div>
                       
                        {/* date */}
                        <div className="form-control flex-1">
                            <input type="date" placeholder="Deadline" name="date" className="input input-bordered" required />
                        </div>
                    </div>
                      {/* maximum and minimum price */}
                    <div className="md:flex gap-4">
                      
                        {/* minimum */}
                        <div className="form-control flex-1">
                            <input type="text" placeholder="Minimum Price" name="minPrice" className="input input-bordered" required />
                        </div>
                         {/* maximum */}
                       <div className="form-control flex-1">
                            <input type="text" placeholder="Maximum Price" name="maxPrice" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"
                        className="input-bordered p-4 input h-40"></textarea>
                       
                    </div> 

                    <div className="form-control mt-6">

                        <input type="submit" value="Add JOb" className="btn bg-emerald-400 text-xl font-bold 
                         text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;