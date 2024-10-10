"use client";
import { IoArrowForward } from "react-icons/io5";
import React from 'react';
import FunFact from '../FunFact/page';
import AnimatedText from '../DifferentAnimations/StaggeredTextAnimation/page';

const Hero = () => {
    return (
        <>
            <div className='homepage text-white cursor-pointer'>
                <div className='w-[80%] mx-auto'>
                    <div className='lg:mt-[11%] md:mt-[5%] sm:mt-[4%] mt-[3%]'>
                        <div className=' herosection '>
                            <div>
                                <section>
                                    <div className='lg:text-[115px] md:text-6xl sm:text-4xl text-[30px] w-[80%] font-extrabold primtext capitalize'>
                                        <AnimatedText text='Creativity In Our BloodLine' />
                                    </div>
                                </section>
                                <div className='mt-10 flex justify-between items-center nowpara'>
                                    <div className='flex gap-2 ml-2 text-lg hover:text-red-600 hover-underline-animation sectext'>
                                        <AnimatedText text='Get a Quote'></AnimatedText>
                                        <IoArrowForward className='text-xl mb-1 inline-block' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FunFact />
        </>
    );
};

export default Hero;
