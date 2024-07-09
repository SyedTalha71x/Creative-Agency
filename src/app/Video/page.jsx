"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { AiFillPlayCircle } from 'react-icons/ai';
import styles from '../styles.module.css';
import AnimatedText from '../DifferentAnimations/StaggeredTextAnimation/page';
import AnimateOnScroll from '../AnimateOnScroll/page';

export default function Video() {
    const ref = useRef(null);

    const slideUpDownVariants = {
        hidden: { x: 75, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <section ref={ref} className='bg-[#181818]'>
            <AnimateOnScroll
                variants={slideUpDownVariants}
                initial="hidden"
            >
                <div className='w-auto max-w-[1500px] text-white h-full lg:p-16 md:p-16 sm:p-10 p-5 lg:h-full mx-auto'>
                    <div className='mt-12'>
                        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl headsam capitalize text-center font-sans lg:leading-[70px] md:leading-[70px] sm:leading-[30px] leading-[30px] font-bold w-[100%] mx-auto'>
                            <AnimatedText text='Our agile process is ability to adapt and respond to change. Agile organizations view change as an opportunity, not a threat.' />
                        </h1>
                    </div>
                    <div className={`lg:mt-20 md:mt-10 sm:mt-10 mt-12 relative cursor-pointer ${styles['glow-animation']}`}>
                        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                            <AiFillPlayCircle className='text-6xl text-white' />
                        </div>
                        <Image
                            height={1320}
                            width={719}
                            alt=''
                            className='h-full w-full block rounded-3xl object-cover object-center'
                            src={'https://arino-nextjs.vercel.app/images/video_bg.jpeg'}
                        />
                        <div className='absolute rounded-3xl top-0 left-0 w-full h-full bg-black opacity-50'></div>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

