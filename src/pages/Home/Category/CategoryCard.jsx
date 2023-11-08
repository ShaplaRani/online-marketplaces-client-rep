import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CategoryCard = ({category}) => {
    console.log(category);
    const {_id,title, date,maxPrice,minPrice,description} = category;
    // const truncatedDescription = (description.length).slice(0, 20);
    return (
        <div>
            <div className=" shadow-2xl h-[400px] relative  bg-blue-600 rounded-xl">
                <div className=" pb-0  ">
                <div className='card-body text-white '>
                  <h2 className="text-xl font-semibold text-white">Title: {title}</h2>
                    <p className='font-medium text-lg '>Deadline: {date}</p>
                    <p className='font-medium text-lg '> Price: ${minPrice} - {maxPrice}$ per hour</p>
                    
                    
                       <div className=''>
                      {
                        description.length > 90 ? <p className="mt-3 block  text-lg font-normal  text-white antialiased">
                         {description.slice(0, 90)}.....
                        </p> :
                         <p>{description}</p>
                        }
                    </div>
                </div>
                    
                    <div className="card-actions justify-center rounded-b-xl bg-emerald-400  bottom-0 absolute w-full bottom-o ">
                        <Link to={`/jobs/${_id}`}>
                        <button  className="bottom-0 py-3 px-6 w-fll rounded-lg text-white">Bid Now</button>
                         
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