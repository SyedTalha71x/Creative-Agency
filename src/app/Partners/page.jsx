"use client";
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from "framer-motion"
import Image from 'next/image'
import AnimateOnScroll from '../AnimateOnScroll/page';


const Partners = () => {

    const zoomRotateVariants = {
        hidden: { scale: 0.5, rotate: 90, opacity: 0 },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: "easeInOut" }
        }
    };;

    return (
        <div className=' bg-[#181818]'>
            <AnimateOnScroll
                variants={zoomRotateVariants}
                initial="hidden"

            >


                <div
                    className=' w-auto max-w-[1500px] mx-auto pb-10 '>
                    <div className='flex justify-center items-center gap-28 icons'>

                        <AnimateOnScroll
                            variants={zoomRotateVariants}
                            initial="hidden"
                        >
                            <div className=''>
                                <div><Image src={'https://arino-nextjs.vercel.app/images/partner_1.svg'} height={400} width={600} alt='' className='h-full w-full randimg block object-cover object-center ' /></div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll
                            variants={zoomRotateVariants}
                            initial="hidden"
                        >


                            <div className=''>

                                <div><Image src={'https://arino-nextjs.vercel.app/images/partner_2.svg'} height={400} width={600} alt='' className='h-full w-full randimg block object-cover object-center ' /></div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll
                            variants={zoomRotateVariants}
                            initial="hidden"

                        >


                            <div className=''>

                                <div><Image src={'https://arino-nextjs.vercel.app/images/partner_3.svg'} height={400} width={600} alt='' className='h-full w-full randimg block object-cover object-center ' /></div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll
                            variants={zoomRotateVariants}
                            initial="hidden"
                        >
                            <div className=''>

                                <div><Image src={'https://arino-nextjs.vercel.app/images/partner_4.svg'} height={400} width={600} alt='' className='h-full w-full randimg block object-cover object-center ' /></div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll
                            variants={zoomRotateVariants}
                            initial="hidden"
                        >


                            <div className=''>

                                <div><Image src={'https://arino-nextjs.vercel.app/images/partner_5.svg'} height={400} width={600} alt='' className='h-full w-full randimg block object-cover object-center ' /></div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    )
}

export default Partners