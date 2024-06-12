"use client";
import { Montserrat } from 'next/font/google';
import { IoArrowForward } from "react-icons/io5";
import React from 'react';
import FunFact from '../FunFact/page';
import AnimatedText from '../DifferentAnimations/StaggeredTextAnimation/page';
import ReactPlayer from 'react-player';

const montserrat = Montserrat({
    weight: ['800'],
    subsets: ['latin']
});

const Hero = () => {
    const videoSrc = '/style1.mp4';
    return (
        <>
            <div className='homepage text-white cursor-pointer'>
                <div className='w-[80%] mx-auto'>
                    <div className='lg:mt-[6%] md:mt-[5%] sm:mt-[4%] mt-[3%]'>
                        <div className='grid grid-cols-2 gap-12 herosection '>
                            <div>
                                <section className={montserrat.className}>
                                    <div className='lg:text-[100px] md:text-6xl sm:text-4xl text-[28px] w-[70%] primtext capitalize'>
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
                            <div>
                                <div className='rounded-3xl overflow-hidden shadow-lg'>
                                    <ReactPlayer
                                        width="100%"
                                        height="100%"
                                        url={videoSrc}
                                        light={false}
                                        pip={true}
                                        playing={true}
                                        loop={true}
                                        muted={true}
                                    />
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
