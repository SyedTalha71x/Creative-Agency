"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function ParallexAffect() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div className="bg-[#181818] pb-20">



            <div
                ref={ref}
                className="w-auto    max-w-[1500px] mx-auto h-[90vh] overflow-hidden  relative grid place-items-center"
            >
                <div >


                    <motion.h1
                        style={{ y: textY }}
                        className="font-bold text-blue-900 text-6xl md:text-8xl relative mb-20 z-10"
                    >
                        CREATIVE <span className="text-yellow-600 font-bold">AGENCY</span>
                    </motion.h1>
                </div>

                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(/images/random1.jpg)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
                <div
                    className="absolute inset-0 z-20"
                    style={{
                        backgroundImage: `url(/image-bottom.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />
            </div>

        </div>
    );
}
