"use client";
import React, { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        const handlePointerMove = (e) => {
            const cursor = document.querySelector('.cursor');
            const cursor2 = document.querySelector('.cursor2');
            if (cursor && cursor2) {
                const x = e.clientX !== undefined ? e.clientX : e.touches ? e.touches[0].clientX : 0;
                const y = e.clientY !== undefined ? e.clientY : e.touches ? e.touches[0].clientY : 0;
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
                cursor2.style.left = x + 'px';
                cursor2.style.top = y + 'px';
            }
        };

        window.addEventListener('mousemove', handlePointerMove);
        window.addEventListener('touchmove', handlePointerMove);

        return () => {
            window.removeEventListener('mousemove', handlePointerMove);
            window.removeEventListener('touchmove', handlePointerMove);
        };
    }, []);

    return (
        <>
            <div className='cursor'></div>
            <div className='cursor2'></div>
        </>
    );
};

export default Page;
