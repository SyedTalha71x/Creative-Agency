// components/Preloader.js
"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });

        // Animation to fill the loading bar
        tl.to('.loading-bar', { width: '100%', duration: 2 });

        // Animation to fade out the preloader
        tl.to('.preloader', { opacity: 0, duration: 1, delay: 1, pointerEvents: 'none' });

        // Set body background color to black while preloader is displayed
        document.body.style.backgroundColor = 'black';

        return () => {
            // Reset body background color when preloader is removed
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <div className="preloader">
            {/* Loading bar */}
            <div className="loading-bar"></div>

            <style jsx>{`
            *{
                background-color: black;
            }

                .preloader {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 200px; /* Adjust width as needed */
                    height: 30px; /* Height of the loading bar */
                    background-color: black; /* Background color while loading */
                    z-index: 9999;
                }
  
                .loading-bar {
                    width: 0%;
                    height: 100%;
                    background-color: blue; /* Color of the loading bar */
                }
            `}</style>
        </div>
    );
};

export default Preloader;
