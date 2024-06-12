"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const StaggerAnimation = ({ items, initiallyOpen }) => {
    const [open, setOpen] = useState(initiallyOpen);
    const controls = useAnimation();
    const listRef = useRef(null);

    const staggerList = 0.1; // Stagger delay

    useEffect(() => {
        const listElement = listRef.current;

        if (open) {
            controls.start(i => ({
                width: 150,
                height: 200,
                opacity: 1,
                transition: { delay: staggerList * i, type: "spring", bounce: 0, duration: 0.4 }
            }));
            items.forEach((_, index) => {
                controls.start(i => ({
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    transition: { duration: 0.2, delay: staggerList * index }
                }), { custom: index });
            });
        } else {
            controls.start(i => ({
                width: 0,
                height: 0,
                opacity: 0,
                transition: { type: "spring", bounce: 0, duration: 0.4 }
            }));
            items.forEach((_, index) => {
                controls.start(i => ({
                    opacity: 0,
                    scale: 0.3,
                    x: -50,
                    transition: { duration: 0.2 }
                }), { custom: index });
            });
        }
    }, [open, controls, items]);

    return (
        <div className="StaggeredList">
            <motion.ul ref={listRef} initial={false} animate={controls} custom={items.length} style={{ overflow: "hidden" }}>
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        custom={index}
                        initial={{ opacity: 0, scale: 0.3, x: -50 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
            <button onClick={() => setOpen(prev => !prev)}>Toggle List</button>
        </div>
    );
};

export default StaggerAnimation;
