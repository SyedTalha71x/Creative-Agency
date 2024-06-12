"use client";
import React, { useEffect, useRef } from 'react'
import AnimateOnScroll from '../AnimateOnScroll/page';


const Awards = () => {

    const slideUpDownVariants = {
        hidden: { x: 75, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    const bounceVariants = {
        hidden: { y: 0 },
        visible: {
            y: [0, -20, 0],
            transition: {
                duration: 0.2,
                ease: "easeInOut",
                times: [0, 0.5, 1]
            }
        }
    };



    return (
        <section className='bg-[#181818]'>
            <div className='w-auto max-w-[1500px] lg:pb-[6rem] md:pb-[3rem] sm:pb-[2rem] pb-[1rem] text-white max-md:flex-col h-full p-16 lg:h-full mx-auto flex justify-center items-center '>
                <div className='mt-14'>
                    {/* <div className='cs-shape_wrap_2'>
                        <div className='cs-shape_2'>
                            <div className='div'></div>
                        </div>
                    </div> */}
                    <AnimateOnScroll
                        variants={slideUpDownVariants}
                        initial="hidden"
                    >


                        <div

                            className='grid grid-cols-2 awardsman '>
                            <div>
                                <h1 className='text-xl text-gray-500 font-bold'>On Awards</h1>
                                <h2 className='mt-4 lg:text-5xl md:lg:text-4xl md:text-3xl sm:text-2xl text-2xl sm:text-3xl text-3xl font-bold'>We Get Multiple Awards </h2>                        </div>

                            <div className='z-50 awardsman2'>

                                <div className=''>
                                    <AnimateOnScroll
                                        variants={bounceVariants}
                                        initial="hidden"
                                    >


                                        <div
                                            className='grid grid-cols-2 gap-16 i1'>
                                            <div className='flex flex-col '>
                                                <div className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-red-600 font-bold'>
                                                    2019
                                                </div>
                                                <div className='mt-1 lg:text-2xl md:text-xl sm:text-xl text-[18px] font-semibold'>Google Awards</div>
                                                <div className="w-full mt-1 lg:text-lg md:text-lg sm:text-lg text-sm text-white">
                                                    <div className='text-gray-400'>
                                                        Lorem ipsum dolor sit amet.
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='flex flex-col '>
                                                <div className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-red-600 font-bold'>
                                                    2020
                                                </div>
                                                <div className='mt-1 lg:text-2xl md:text-xl sm:text-xl text-[18px] font-semibold'>Technology Innovation</div>
                                                <div className="w-full mt-1 lg:text-lg md:text-lg sm:text-lg text-sm text-white">
                                                    <div className='text-gray-400'>
                                                        Lorem ipsum dolor sit amet.
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll
                                        variants={bounceVariants}
                                        initial="hidden"
                                    >
                                        <div
                                            className='grid grid-cols-2 gap-16  mt-10 i2'>
                                            <div className='flex flex-col '>
                                                <div className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-red-600 font-bold'>
                                                    2021
                                                </div>
                                                <div className='mt-1 lg:text-2xl md:text-xl sm:text-xl text-[18px] font-semibold'>Css Awards Design</div>
                                                <div className="w-full mt-1 lg:text-lg md:text-lg sm:text-lg text-sm text-white">
                                                    <div className='text-gray-400'>
                                                        Lorem ipsum dolor sit amet.
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='flex flex-col '>
                                                <div className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-red-600 font-bold'>
                                                    2022
                                                </div>
                                                <div className='mt-1 lg:text-2xl md:text-xl sm:text-xl text-[18px] font-semibold'>UI/UX Design of the Month</div>
                                                <div className="w-full mt-1 lg:text-lg md:text-lg sm:text-lg text-sm text-white">
                                                    <div className='text-gray-400'>
                                                        Lorem ipsum dolor sit amet.
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </AnimateOnScroll>

                                </div>



                            </div>

                        </div>
                    </AnimateOnScroll>

                </div>
            </div>

        </section>
    )
}

export default Awards