"use client"
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AnimateOnScroll from '../AnimateOnScroll/page';


const images = [
    'https://arino-nextjs.vercel.app/images/member_1.jpeg',
    'https://arino-nextjs.vercel.app/images/member_2.jpeg',
    'https://arino-nextjs.vercel.app/images/member_3.jpeg',
    'https://arino-nextjs.vercel.app/images/member_4.jpeg',
];

const memberNames = [
    'John Doe',
    'Jane Smith',
    'Alex Johnson',
    'Emily Brown'
];

const designations = [
    'WP Developer',
    'Cloud Engineer',
    'UI/UX Developer',
    'Backend Lead'
];

const CustomSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(-1);


    const prevSlide = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex < 0 ? images.length - 1 : newIndex;
        });
    };

    const nextSlide = () => {
        setStartIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= images.length ? 0 : newIndex;
        });
    };

    const slideUpDownVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    const expandCollapseVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "auto",
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    const zoomInOutVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" }
        }
    };
    return (
        <div className="relative bg-[#181818]">
            <div className='mx-auto container lg:py-20 md:py-10 sm:py-10 py-6 xl:px-20 lg:px-12 sm:px-6 px-4'>
                <div className=''>
                    <AnimateOnScroll
                        variants={zoomInOutVariants}
                        initial="hidden"
                    >


                        <div

                            className='flex justify-between items-center teaminfo'>
                            <div className='teamprim'>
                                <span className='text-gray-400 font-bold text-lg'>Our Team</span>
                                <h1 className='text-white font-bold lg:text-6xl md:text-5xl sm:text-3xl text-3xl mt-6'>Awesome Team</h1>
                                <h1 className='text-white font-bold lg:text-6xl md:text-5xl sm:text-3xl text-3xl mt-2'>Members</h1>
                            </div>
                            <div>
                                <button
                                    onClick={prevSlide}
                                    className="px-6 py-2 mr-2 bg-transparent hover:border-none hover:text-white hover:bg-red-600 border-2 border-white rounded-sm"
                                >
                                    <FaArrowLeft className='text-white ' />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="px-6 py-2 bg-transparent  hover:border-none hover:text-white hover:bg-red-600 border-2 border-white rounded-sm"
                                >
                                    <FaArrowRight className='text-white ' />
                                </button>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
                <AnimateOnScroll
                    variants={zoomInOutVariants}
                    initial="hidden"
                >


                    <div
                        className="flex justify-center teammanual lg:pb-20 md:pb-10 sm:pb-10 pb-9 items-center gap-4 overflow-hidden space-x-4 mt-20">
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(-1)}
                            >
                                <img
                                    src={images[(startIndex + index) % images.length]}
                                    alt={`Slide ${startIndex + index + 1}`}
                                    className="rounded-2xl imgcover h-full hover:bg-opacity-50 w-full object-cover object-center overflow-hidden cursor-pointer transition-transform duration-700 transform hover:scale-110"
                                />
                                {hoverIndex === index && (
                                    <div className="absolute left-0 overflow-hidden top-0 flex flex-col gap-2 items-center p-4 mt-6">
                                        <FaFacebook className="text-white hover:text-red-600 cursor-pointer text-xl " />
                                        <FaTwitter className="text-white hover:text-red-600 cursor-pointer text-xl " />
                                        <FaInstagram className="text-white hover:text-red-600 cursor-pointer text-xl " />
                                        <FaLinkedin className="text-white hover:text-red-600 cursor-pointer text-xl " />
                                    </div>
                                )}
                                <div className="absolute bottom-8 left-0 right-0  bg-opacity-50 text-white text-left ml-5 p-2">
                                    <div className="font-bold text-[25px] hover:text-red-600 hover:transition-transform duration-700">{memberNames[(startIndex + index) % memberNames.length]}</div>
                                    <div className="text-gray-400">{designations[(startIndex + index) % designations.length]}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default CustomSlider;
