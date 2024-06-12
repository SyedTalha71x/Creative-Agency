"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TextTypingAnimation = ({ text }) => {
    const words = text.split(" ");

    return (
        <div>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: index / 10,
                    }}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </div>
    );
};

export default TextTypingAnimation;
