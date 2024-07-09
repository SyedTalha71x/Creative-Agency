"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from "framer-motion"
const MovingText = () => {

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
        <div ref={ref} className='cs-moving_text_wrap bg-[#181818] '>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                initial="hidden"
                animate={mainControls}
                className='cs-moving_text_in' >
                <div className='cs-moving_text mt-10  text-center  lg:text-[100px] md:text-[70px] sm:text-[50px] text-[42px] capitalize'>
                    Our reputed world wide partners
                </div>
                <div className='cs-moving_text mt-10 text-center  lg:text-[100px] md:text-[70px] sm:text-[50px] text-[42px] capitalize'>
                    Our reputed world wide partners
                </div>
            </motion.div>
        </div>
    )
}

export default MovingText