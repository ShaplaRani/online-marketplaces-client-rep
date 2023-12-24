
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="my-20 container mx-auto p-2">
             <div className="md:max-w-sm mx-auto text-center my-10">
           
            <h3 className="text-4xl text-blue-600 font-bold mx-2   py-4 ">Testimonials</h3>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper shadow">

        {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:mx-24 my-16 gap-4 flex flex-col items-center justify-center text-center">
                            
                            <p className=" w-3/5 text-base font-normal">{review.testimonial}</p>
                            <div className="flex items-center gap-5 mt-7">
                                <img src={review.avatar} alt="" />
                                <div>
                                  <h3 className="text-2xl font-semibold text-blue-600">{review.name}</h3>
                                  <h3 className="text-xl font-medium ">{review.role}</h3>
                                </div>
                               
                                 
                            </div>
                           
                        </div>
                    </SwiperSlide>)
                }

        </Swiper>
            
        </div>
    );
};

export default Testimonial;

