import PropTypes from 'prop-types';


const CategoryCard = ({category}) => {
    const {jobTitle, deadline,priceRange,description} = category;
    // const truncatedDescription = (description.length).slice(0, 20);
    return (
        <div>
            <div className="card bg-orange-100 ">
                <div className="card-body">
                <h2 className="text-xl font-semibold text-black">Title: {jobTitle}</h2>
                    <p className='font-medium text-lg text-black'>Deadline: {deadline}</p>
                    <p className='font-medium text-lg text-black'>Price: {priceRange}</p>
                    {/* {
                        description.length.slice(0,20)<p className='font-normal text-base text-black leading-relaxed'>{description}</p>
                    } */}
                     <p className='font-normal text-base text-black leading-relaxed'>
                            {description}
                       </p>
                    
                    <div className="card-actions justify-end">
                        <button className="bg-emerald-400 py-3 px-6 rounded-lg text-white">Bid Now</button>
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