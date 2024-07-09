"use client"
import React, { useEffect, useState } from 'react'
import AnimateOnScroll from '../AnimateOnScroll/page';



const images = [
    'https://arino-nextjs.vercel.app/images/post_1.jpeg',
    'https://arino-nextjs.vercel.app/images/post_2.jpeg',
    'https://arino-nextjs.vercel.app/images/post_3.jpeg',
];

const memberNames = [
    'How to Keep Fear from ruining your business',
    'AI will take over all Job for human within Next year',
    'Artistic Mind will be great for creation anything',
];

const designations = [
    '23/05/2023',
    '29/04/2023',
    '13/05/2023',
];

const Slider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const zoomInOutVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: "easeInOut" }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative bg-[#181818]">
            <div className='mx-auto container lg:py-20 md:py-16 sm:py-10 py-12 xl:px-20 lg:px-12 sm:px-6 px-4'>
                <div className=''>
                    <div className='flex justify-center flex-col items-center'>
                        <AnimateOnScroll
                            variants={zoomInOutVariants}
                            initial="hidden"
                        >


                            <div


                                className="flex flex-col justify-center items-center blogpage">
                                <span className='text-gray-400 font-bold text-xl text-center'>Our Blog</span>
                                <h1 className='text-white font-bold lg:text-6xl md:text-5xl sm:text-3xl text-3xl mt-3'>Explore Recent Publications </h1>
                            </div>
                        </AnimateOnScroll>
                        <div>
                            <AnimateOnScroll
                                variants={zoomInOutVariants}
                                initial="hidden"
                            >


                                <div


                                    className="flex justify-center blogpage2 items-center gap-4 overflow-hidden space-x-4 lg:mt-20 md:mt-16 sm:mt-12 mt-12">
                                    {[0, 1, 2, 3].map((index) => (
                                        <div
                                            key={index}
                                            className="relative"
                                            style={{ opacity: index === 0 ? 1 : 0.7 }} // Apply opacity

                                        >
                                            <img
                                                src={images[(startIndex + index) % images.length]}
                                                alt={`Slide ${startIndex + index + 1}`}
                                                className="rounded-lg h-full w-full object-cover object-center overflow-hidden cursor-pointer transition-transform duration-700 transform hover:scale-110"
                                            />

                                            <div className="absolute bottom-8 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                                                <div className="font-bold text-lg hover:text-red-600 hover:transition-transform duration-700">{memberNames[(startIndex + index) % memberNames.length]}</div>
                                                <div className="text-gray-400 text-sm">{designations[(startIndex + index) % designations.length]}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
