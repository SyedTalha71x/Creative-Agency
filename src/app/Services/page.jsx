"use client";
import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import Image from 'next/image';
import AnimateOnScroll from '../AnimateOnScroll/page';
import AnimatedText from '../DifferentAnimations/TextTypingAnimation/page';

const Page = () => {
    const slideUpDownVariants = {
        hidden: { x: 95, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.6 } }
    };

    return (
        <div className='w-auto max-w-[1400px] mx-auto mt-20 pb-28 cursor-pointer'>
            <div className='text-white'>
                <AnimateOnScroll
                    variants={slideUpDownVariants}
                    initial="hidden"
                >
                    <div className='grid grid-cols-2 servicecom'>
                        <div>
                            <h1 className='text-gray-400 text-lg font-bold capitalize'>
                                <AnimatedText text="What can we Do" />
                            </h1>
                            <h2 className='text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl font-bold mt-4'>
                                <AnimatedText text="Services we can" />
                            </h2>
                            <h2 className='text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl font-bold mt-2'>
                                <AnimatedText text="Help you with" />
                            </h2>
                            <div className='flex gap-2 mt-6 text-lg hover:text-red-600 servicetext'>
                                <div className='cursor-pointer hover:text-red-600 hover-underline-animation'>
                                    See all Services
                                </div>
                                <IoArrowForward className='text-xl mt-[4px]' />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-6 servicecom2'>
                            <div className='flex justify-center gap-8 servicecom2'>
                                <div className='relative'>
                                    <Image height={500} width={500} alt='UI/UX Design' className='imagehover h-55 w-52 adjustimage rounded-xl object-cover object-center block' src={"https://arino-nextjs.vercel.app/images/service_1.jpeg"} />
                                    <div className='absolute inset-0 seto1 bg-black opacity-50 rounded-xl'></div>
                                    <div className='absolute rounded-xl setoverlay inset-0 imagehover flex items-center justify-center text-white'>
                                        <div className='lg:text-2xl md:text-xl text-xl text-center font-bold'>
                                            UI/UX Design
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <Image height={500} width={500} alt='React.js Development' className='imagehover h-55 w-52 adjustimage rounded-xl object-cover object-center block' src={"https://arino-nextjs.vercel.app/images/service_2.jpeg"} />
                                    <div className='absolute inset-0 seto1 bg-black opacity-50 rounded-xl'></div>
                                    <div className='absolute rounded-xl setoverlay inset-0 imagehover flex items-center justify-center text-white'>
                                        <div className='lg:text-2xl md:text-xl text-xl text-center font-bold'> React.js Development</div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <Image height={616} width={1024} alt='Cloud AWS' className='imagehover h-55 w-52 adjustimage rounded-xl object-cover object-center block' src={"https://arino-nextjs.vercel.app/images/service_1.jpeg"} />
                                    <div className='absolute inset-0 seto1 bg-black opacity-50 rounded-xl'></div>
                                    <div className='absolute rounded-xl setoverlay inset-0 imagehover flex items-center justify-center text-white'>
                                        <div className='lg:text-2xl md:text-xl text-xl text-center font-bold'> Cloud AWS</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center gap-8 servicecom2'>
                                <div className='relative'>
                                    <Image height={500} width={500} alt='Digital Marketing' className='imagehover imgtext3 h-55 w-52 adjustimage rounded-xl object-cover object-center block' src={"https://arino-nextjs.vercel.app/images/service_3.jpeg"} />
                                    <div className='absolute w-52 inset-0 seto1 bg-black opacity-50 rounded-xl'></div>
                                    <div className='absolute rounded-xl setoverlay inset-0 imagehover flex w-52 items-center justify-center text-white'>
                                        <div className='lg:text-xl  md:text-xl text-xl font-bold text-center'>Digital Marketing</div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <Image height={500} width={500} alt='Technology' className='imagehover imgtext4 h-55 w-52 adjustimage rounded-xl object-cover object-center block' src={"https://arino-nextjs.vercel.app/images/service_4.jpeg"} />
                                    <div className='absolute w-52 inset-0 seto1 bg-black opacity-50 rounded-xl'></div>
                                    <div className='absolute rounded-xl setoverlay inset-0 imagehover flex w-52 items-center justify-center text-white'>
                                        <div className='lg:text-2xl md:text-xl text-xl font-bold text-center'> Technology</div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <Image height={818} width={1500} alt='Blockchain' className='imagehover imgtext4 h-55 w-52 adjustimage rounded-xl object-cover object-center block' src={"https://arino-nextjs.vercel.app/images/service_3.jpeg"} />
                                    <div className='absolute w-52 inset-0 seto1 bg-black opacity-50 rounded-xl'></div>
                                    <div className='absolute rounded-xl setoverlay inset-0 imagehover flex w-52 items-center justify-center text-white'>
                                        <div className='lg:text-2xl md:text-xl text-xl font-bold text-center'>Blockchain</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default Page;
