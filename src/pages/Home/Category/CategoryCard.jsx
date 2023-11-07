import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CategoryCard = ({category}) => {
    console.log(category);
    const {_id,title, date,maxPrice,minPrice,description} = category;
    // const truncatedDescription = (description.length).slice(0, 20);
    return (
        <div>
            <div className="card bg-orange-200 shadow-2xl  ">
                <div className="card-body">
                <h2 className="text-xl font-semibold text-black">Title: {title}</h2>
                    <p className='font-medium text-lg text-black'>Deadline: {date}</p>
                    <p className='font-medium text-lg text-black'>Maximum Price: {maxPrice} $</p>
                    <p className='font-medium text-lg text-black'>Minimum Price: {minPrice} $</p>
                    {/* {
                        description.length.slice(0,20)<p className='font-normal text-base text-black leading-relaxed'>{description}</p>
                    } */}
                     {/* <p className='font-normal text-base text-black leading-relaxed'>
                            {description}
                       </p> */}
                       <div className=''>
                      {
                        description.length > 90 ? <p className="mt-3 block  text-lg font-normal  text-gray-700 antialiased">
                         {description.slice(0, 90)}.....
                        </p> :
                         <p>{description}</p>
                        }
                    </div>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${_id}`}>
                        <button  className="bg-emerald-400 py-3 px-6 rounded-lg text-white">Bid Now</button>
                         
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}
export default CategoryCard;