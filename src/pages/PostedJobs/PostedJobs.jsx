import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import PostedJobsCard from "./PostedJobsCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const PostedJobs = () => {
    const {user} = useAuth();
    const [products, setProduct] = useState([]);

    const url = `http://localhost:5000/api/email-product?email=${user?.email}`
    
    useEffect(() => {
        axios.get(url,{withCredentials:true})
        .then(data => setProduct(data.data))
    },[url])
    console.log(products);

    const handleDelete =(id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axios.delete(`http://localhost:5000/api/email-product/${id}`)
            .then(data => {
                console.log(data.data);
                if(data.data.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success"
              });
              const remaining = products.filter(product => product._id !== id);
                    setProduct(remaining);    
                }
            })
            }
          });
    }
    return (
        <div className="container mx-auto my-20">
            <Helmet>
                <title>Bid Jobs | Posted Jobs</title>
            </Helmet>
            <h2>PostedJobs</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                {
                    products.map(product => <PostedJobsCard
                         key={product._id}
                          product={product}
                          handleDelete ={ handleDelete}
                          >

                         </PostedJobsCard>)
                }
            </div>

        </div>
    );
};

export default PostedJobs;