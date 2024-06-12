"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

const AnimateOnScroll = ({ children, variants, initial }) => {
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
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
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial={initial}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default AnimateOnScroll;
