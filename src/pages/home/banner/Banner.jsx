import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar"
import { Scrollbar } from "swiper";
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='bg-img1 flex flex-col items-center justify-center text-center space-y-5 text-gray-300'>
                        <h1 className='text-5xl font-bold '>Unlock Your Musical Potential <br /> Discover the <span className='text-red-600'>Tune Craft</span> of Instrumental Mastery!</h1>
                        <p>Embark on a Musical Journey: Learn, Create, and Connect at Our Music School! <br /> Transform Your Musical Dreams into Reality Enroll Today in Our Music Learning Community <br /> Where Music Comes Alive: Dive into a Dynamic Learning Experience at Our Music School!</p>
                        <button className='btn btn-outline btn-error'>Explore More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-img2 flex flex-col items-center justify-center text-center space-y-5 text-gray-300'>
                        <h1 className='text-5xl font-bold '>Unlock Your Musical Potential <br /> Discover the <span className='text-red-600'>Tune Craft</span> of Instrumental Mastery!</h1>
                        <p>Embark on a Musical Journey: Learn, Create, and Connect at Our Music School! <br /> Transform Your Musical Dreams into Reality Enroll Today in Our Music Learning Community <br /> Where Music Comes Alive: Dive into a Dynamic Learning Experience at Our Music School!</p>
                        <button className='btn btn-outline btn-error'>Explore More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-img3 flex flex-col items-center justify-center text-center space-y-5 text-gray-300'>
                        <h1 className='text-5xl font-bold '>Unlock Your Musical Potential <br /> Discover the <span className='text-red-600'>Tune Craft</span> of Instrumental Mastery!</h1>
                        <p>Embark on a Musical Journey: Learn, Create, and Connect at Our Music School! <br /> Transform Your Musical Dreams into Reality Enroll Today in Our Music Learning Community <br /> Where Music Comes Alive: Dive into a Dynamic Learning Experience at Our Music School!</p>
                        <button className='btn btn-outline btn-error'>Explore More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='bg-img4 flex flex-col items-center justify-center text-center space-y-5 text-gray-300'>
                        <h1 className='text-5xl font-bold '>Unlock Your Musical Potential <br /> Discover the <span className='text-red-600'>Tune Craft</span> of Instrumental Mastery!</h1>
                        <p>Embark on a Musical Journey: Learn, Create, and Connect at Our Music School! <br /> Transform Your Musical Dreams into Reality Enroll Today in Our Music Learning Community <br /> Where Music Comes Alive: Dive into a Dynamic Learning Experience at Our Music School!</p>
                        <button className='btn btn-outline btn-error'>Explore More</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;