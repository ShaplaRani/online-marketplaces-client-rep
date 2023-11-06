
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PostedJobsCard = ({product, handleDelete}) => {
    const {_id,title, date,maxPrice,minPrice,description} = product;
   
    return (
        <div>
        <div className="card bg-orange-100 ">
            <div className="card-body">
            <h2 className="text-xl font-semibold text-black">Title: {title}</h2>
                <p className='font-medium text-lg text-black'>Deadline: {date}</p>
                <p className='font-medium text-lg text-black'>Maximum Price: {maxPrice} $</p>
                <p className='font-medium text-lg text-black'>Minimum Price: {minPrice} $</p>
                {/* {
                    description.length.slice(0,20)<p className='font-normal text-base text-black leading-relaxed'>{description}</p>
                } */}
                 <p className='font-normal text-base text-black h-28  leading-relaxed'>
                        {description}
                   </p>
                
                <div className="card-actions flex">
                    <Link to={`/product/${_id}`} className='flex-1 bg-emerald-400  py-3 px-6 rounded-lg text-xl font-medium  w-full text-center'><button className="text-white">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="bg-emerald-400 py-3 flex-1 text-xl font-medium px-6 rounded-lg text-white">Delete</button>
                </div>
            </div>
        </div>
    </div>
    );
};
PostedJobsCard.propTypes = {
    product: PropTypes.object,
    handleDelete: PropTypes.function

}


export default PostedJobsCard;