"use client";
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from 'swiper/modules';
import { motion, useAnimation } from "framer-motion"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay]);

const Projects = () => {
    const ref = useRef(null);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    mainControls.start('visible');
                    slideControls.start('visible');
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [mainControls, slideControls]);

    return (
        <section ref={ref} className='bg-[#181818] lg:pb-10 md:pb-10 sm:pb-8 pb-1'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                initial="hidden"
                animate={mainControls}
            >
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-gray-500 text-lg font-bold lg:mt-20 md:mt-16 sm:mt-12 mt-7'>Latest Projects</h1>
                    <h2 className='text-center text-white font-bold lg:text-[60px] md:text-4xl sm:text-3xl text-3xl'>Portfolio to Explore</h2>
                </div>
                <div className='w-[80%] m-auto mt-16'>
                    <Swiper
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 3000 }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper h-full w-full" // Adjusted size here
                        effect={"coverflow"}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 50,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 150,
                            },
                        }}
                    >
                        <SwiperSlide className="swiper-slide">
                            <div

                            >
                                <div className="testimonials-profile-circle">
                                    <Image
                                        height={872}
                                        width={500}
                                        src={'https://arino-nextjs.vercel.app/images/portfolio_1.jpeg'}
                                        alt="testimonial-avatar"
                                        className="testimonial-avatar h-full w-full object-top block"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div

                            >
                                <div className="testimonials-profile-circle">
                                    <Image
                                        height={872}
                                        width={500}
                                        src={'https://arino-nextjs.vercel.app/images/portfolio_2.jpeg'}
                                        alt="testimonial-avatar"
                                        className="testimonial-avatar h-full w-full object-top block"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div

                            >
                                <div className="testimonials-profile-circle">
                                    <Image
                                        height={872}
                                        width={500}
                                        src={'https://arino-nextjs.vercel.app/images/portfolio_0.jpg'}
                                        alt="testimonial-avatar"
                                        className="testimonial-avatar h-full w-full object-top block"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className=" ">
                            <div

                            >
                                <div className="testimonials-profile-circle">
                                    <Image
                                        height={872}
                                        width={500}
                                        src={'https://arino-nextjs.vercel.app/images/portfolio_3.jpeg'}
                                        alt="testimonial-avatar"
                                        className="testimonial-avatar h-full w-full object-top block"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </motion.div>
        </section>
    )



}
export default Projects