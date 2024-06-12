
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from "framer-motion"
import { IoArrowForward } from "react-icons/io5";
import AnimateOnScroll from '../AnimateOnScroll/page';

const Page = () => {
    const zoomInOutVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" }
        }
    };
    return (
        <div className='bg-[#181818] pb-10 lg:pt-20 md:pt-10 sm:pt-10 pt-3 lg:p-10 md:p-8 sm:p-6 p-4'>
            <AnimateOnScroll
                variants={zoomInOutVariants}
                initial="hidden"
            >


                <div

                    className='w-auto max-w-[1400px] flex justify-center items-center flex-col rounded-2xl text-white h-full p-[70px] lg:h-full mx-auto bg-[#120101] md:shadow-box_shadow'
                    style={{
                        backgroundImage: `url('https://arino-nextjs.vercel.app/images/funfact_shape_bg.svg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='text-center'>
                        <div className='mt-2 lg:text-6xl md:text-5xl sm:text-3xl text-3xl lg:w-[60%] md:w-[70%] sm:w-full w-full mx-auto font-bold'>
                            lets discuss make
                            something <i>cool</i> together
                        </div>
                        <div>
                            <div className='flex gap-2 justify-center items-center text-center text-lg mt-14 hover:text-red-600'>
                                <div className='cursor-pointer hover:text-red-600 hover-underline-animation font-semibold'>Apply for Meeting</div>
                                <IoArrowForward className='text-xl mt-[4px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
};

export default Page;
