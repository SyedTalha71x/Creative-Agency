"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const staggeredTextAnimation = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const AnimatedText = ({
    text,
    animation = staggeredTextAnimation,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
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
    }, []);

    const someVariable = text?.split(' ') || [];

    return (
        <motion.span
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {},
            }}
        >
            {someVariable.map((word, wordIndex) => (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${char}-${charIndex}`}
                            className=""
                            variants={animation}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <span className="">&nbsp;</span>
                </span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
