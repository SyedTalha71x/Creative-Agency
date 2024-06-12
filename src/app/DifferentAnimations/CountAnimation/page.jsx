// CounterAnimation.js
"use client"
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const CounterAnimation = ({ targetCount }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, targetCount, {
            duration: 2
        });

        return () => animation.stop(); // Stop the animation when the component unmounts
    }, [targetCount]); // Re-run the animation when the targetCount prop changes

    return <motion.h1>{rounded}</motion.h1>;
};

export default CounterAnimation;
