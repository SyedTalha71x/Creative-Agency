// Page.jsx
"use client";
import React from 'react';
import { FaPlus } from "react-icons/fa";
import Services from '../Services/page';
import AnimateOnScroll from '../AnimateOnScroll/page';
import CounterAnimation from '../DifferentAnimations/CountAnimation/page';

const Page = () => {


    const slideUpDownVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    return (
        <>
            <section className='bg-[#181818]'>
                <div className='w-auto rand max-w-[1400px] rounded-2xl text-white max-md:flex-col h-full lg:p-16 md:p-16 sm:p-16 p-8 lg:h-full mx-auto flex bg-[#120101]  md:shadow-box_shadow lg:translate-y-[-5rem]'
                    style={{
                        backgroundImage: `url('https://arino-nextjs.vercel.app/images/funfact_shape_bg.svg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    <AnimateOnScroll
                        variants={slideUpDownVariants}
                        initial='hidden'


                    >
                        <div className=''>
                            <div className='grid grid-cols-2 funfacthero'>
                                <div className='funfacthead'>
                                    <h1 className='lg:text-6xl md:text-5xl sm:text-3xl text-3xl font-bold'>Our fun fact</h1>
                                    <p className='lg:text-lg md:text-lg sm:text-sm text-sm text-gray-400 mt-5 w-[80%] sempara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repudiandae ducimus, et laborum accusantium corporis sapient?</p>
                                </div>
                                <div className='counts'>
                                    <div className='grid grid-cols-2 gap-4 counts1'>
                                        <div className='flex'>
                                            <div className='lg:text-5xl md:text-4xl flex sm:text-3xl text-2xl font-bold'>
                                                <CounterAnimation targetCount={45} /> K
                                            </div>
                                            <div className="w-full text-lg text-gray-400 ml-2 flexgame">
                                                <FaPlus className='text-[16px] mt-1.5 text-red-600' />
                                                <div className='subhead'>
                                                    Happy Clients
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex ml-10 adjustmargin'>
                                            <div className='lg:text-5xl md:text-4xl flex sm:text-3xl text-2xl font-bold'>
                                                <CounterAnimation targetCount={50} />K
                                            </div>
                                            <div className="w-full text-lg text-gray-400 ml-2 flexgame">
                                                <FaPlus className='text-[16px] mt-1.5 text-red-600' />
                                                <div className='w-full subhead'>
                                                    Project Completed
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-4 mt-10 counts1'>
                                        <div className='flex'>
                                            <div className='lg:text-5xl md:text-4xl  flex sm:text-3xl text-2xl font-bold'>
                                                <CounterAnimation targetCount={245} />K
                                            </div>
                                            <div className="w-full text-lg text-gray-400 ml-2 flexgame">
                                                <FaPlus className='text-[16px] mt-1.5 text-red-600' />
                                                <div className='subhead'>
                                                    Team Members
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex ml-10 adjustmargin'>
                                            <div className='lg:text-5xl md:text-4xl flex sm:text-3xl text-2xl font-bold'>
                                                <CounterAnimation targetCount={550} />K
                                            </div>
                                            <div className="w-full text-lg text-gray-400 ml-2 flexgame">
                                                <FaPlus className='text-[16px] mt-1.5 text-red-600' />
                                                <div className='subhead'>
                                                    Digital Products
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
                <Services />
            </section>
        </>
    );
}

export default Page;
