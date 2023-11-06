import PropTypes from 'prop-types';


const CategoryCard = ({category}) => {
    console.log(category);
    const {title, date,maxPrice,minPrice

        ,description} = category;
    // const truncatedDescription = (description.length).slice(0, 20);
    return (
        <div>
            <div className="card bg-orange-100 ">
                <div className="card-body">
                <h2 className="text-xl font-semibold text-black">Title: {title}</h2>
                    <p className='font-medium text-lg text-black'>Deadline: {date
}</p>
                    <p className='font-medium text-lg text-black'>Maximum Price: {maxPrice} $</p>
                    <p className='font-medium text-lg text-black'>Minimum Price: {minPrice} $</p>
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