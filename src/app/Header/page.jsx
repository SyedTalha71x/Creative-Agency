"use client";
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { FaBullseye, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import AnimateOnScroll from '../AnimateOnScroll/page';


const montserrat = Montserrat({
    weight: ['800'],
    subsets: ['latin']
})

const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto text-center">
                <p className="mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="flex flex-col items-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <p className="text-white text-xl font-semibold">Loading...</p>
            </div>
        </div>
    );
};



const Page = () => {
    const [portfolioDropdownVisible, setPortfolioDropdownVisible] = useState(false);
    const [homeDropdownVisible, setHomeDropdownVisible] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [open, setopen] = useState(false)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const staggeredFadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.6
            }
        }
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    const closeCart = () => {
        setIsCartOpen(false);
    };

    const handleScroll = () => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    };

    const openModal = () => {
        setopen(!open)
    }

    const dropdownRef = useRef(null);

    useEffect(() => {
        const closeDropdownOnClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setPortfolioDropdownVisible(false);
                setHomeDropdownVisible(false);
                setIsNavOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDropdownOnClickOutside);

        return () => {
            document.removeEventListener('mousedown', closeDropdownOnClickOutside);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const togglePortfolioDropdown = () => {
        setHomeDropdownVisible(false);
        setPortfolioDropdownVisible(!portfolioDropdownVisible);
    };

    const toggleHomeDropdown = () => {
        setPortfolioDropdownVisible(false);
        setHomeDropdownVisible(!homeDropdownVisible);
    };

    const handleClose = () => {
        setopen(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/Sendemail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setModalMessage('Your form has been submitted successfully!');
                setIsModalOpen(true);
            } else {
                setModalMessage('Failed to Submit the Form');
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setModalMessage('Failed to send email.');
            setIsModalOpen(true);
        }
        finally {
            setIsLoading(false);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black bg-opacity-50 transform transition-transform duration-700 flex justify-center items-center z-50">
                    <div className="bg-[#181818] rounded-lg p-8 relative w-full mx-4 max-w-full md:max-w-2xl lg:max-w-3xl transition-opacity duration-300">
                        <button onClick={handleClose} className="absolute top-2 right-2">
                            <RxCross2 className="text-3xl text-purple-500 font-bold" />
                        </button>
                        <div className='flex justify-center items-center gap-5 flex-col'>
                            <div className='text-center '>
                                <h1 className='text-white font-bold text-2xl capitalize'>Get Free Consultation</h1>
                                <p className='w-full mt-2 text-gray-500'>Feel free to connect with us, our 24/7 service will ease you</p>
                            </div>
                            {isLoading ? ( // Show loading spinner while isLoading is true
                                <Loading />
                            ) : (
                                <form className='w-full max-w-md' onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-5'>
                                        <input
                                            onChange={handleChange}
                                            value={formData.name}
                                            name='name'
                                            type="text"
                                            placeholder="Name"
                                            className='bg-gray-200 py-3 px-4 rounded-lg w-full outline-none hover:border-2 hover:border-red-600'
                                        />
                                        <input
                                            onChange={handleChange}
                                            value={formData.email}
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            className='bg-gray-200 py-3 px-4 rounded-lg w-full outline-none hover:border-2 hover:border-red-600'
                                        />
                                        <textarea
                                            onChange={handleChange}
                                            value={formData.message}
                                            name='message'
                                            placeholder="Message"
                                            className='bg-gray-200 py-3 px-4 rounded-lg w-full h-40 outline-none hover:border-2 hover:border-red-600'
                                        />
                                    </div>
                                    <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg w-full mt-5'>
                                        Send Message
                                    </button>
                                </form>
                            )}
                            <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
                        </div>
                    </div>
                </div>
            )}
            <AnimateOnScroll
                variants={staggeredFadeInVariants}
                initial="hidden"
            >

                <header
                    className={`flex ${isScrolled ? 'bg-black' : 'bg-transparent'
                        } cursor-pointer py-14 text-white px-4 sm:px-10 min-h-[70px] w-[90%] mx-auto tracking-wide relative z-50`}
                >
                    <div
                        className='flex flex-wrap items-center justify-around gap-4 w-full'>
                        <div className={montserrat.className}>
                            <Link href="/">
                                <h1 className='text-3xl font-extrabold'><span className='text-red-600'>A</span>rino</h1>
                            </Link>
                        </div>

                        <div id="collapseMenu"
                            className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                    <path
                                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                        data-original="#000000"></path>
                                </svg>
                            </button>



                            <ul ref={dropdownRef}
                                className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed uppercase max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>


                                <li className='mb-6 hidden max-lg:block'>
                                    <Link href="/"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                                    </Link>
                                </li>
                                <li onClick={toggleHomeDropdown} className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 hover:text-red-600 relative'>
                                    <Link href='/' className='text-white hover:text-red-600 font-semibold tracking-wider block text-base'>Home</Link>
                                    <IoIosArrowDown className='text-lg mt-[3px]  ' />
                                    {/* Dropdown content */}
                                    {homeDropdownVisible && (
                                        <ul className='absolute top-[200%] left-0 capitalize transition-transform transform duration-1000 dropdown1 bg-[#181818] text-white w-60 p-6 shadow-lg'>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Main Page</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Entertainment Page</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Services Page </Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Salary Page</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Marketing Page</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Agency Page</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Freelancing Page</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Page</Link></li>

                                            {/* Add more portfolio items as needed */}
                                        </ul>
                                    )}
                                </li>
                                <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='/'
                                    className='hover:text-red-600 text-white font-semibold block text-base'>About</Link>
                                </li>
                                <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='/'
                                    className='hover:text-red-600 text-white font-semibold block text-base'>Services</Link>
                                </li>
                                <li onClick={togglePortfolioDropdown} className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 hover:text-red-600 relative'>
                                    <Link href='/' className='text-white hover:text-red-600 font-semibold tracking-wider block text-base'>Portfolio</Link>
                                    <IoIosArrowDown className='text-lg mt-[3px]  ' />
                                    {/* Dropdown content */}
                                    {portfolioDropdownVisible && (
                                        <ul className='absolute top-[200%] left-0 capitalize transition-all duration-1000 dropdown1 bg-[#181818] text-white w-60 p-6 shadow-lg'>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 1</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 2</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 3</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 4</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 5</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 6</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 7</Link></li>
                                            <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 8</Link></li>

                                            {/* Add more portfolio items as needed */}
                                        </ul>
                                    )}
                                </li>

                                <li className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 hover:text-red-600'><Link href='/'
                                    className='hover:text-red-600 text-white font-semibold block text-base'>Blog</Link>
                                    {/* <IoIosArrowDown className='text-lg mt-[3px]  ' /> */}
                                </li>
                                <li className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 hover:text-red-600'><div onClick={openModal}
                                    className='hover:text-red-600 text-white font-semibold block text-base'>Contact</div>
                                </li>
                            </ul>
                        </div>

                        <div className='flex items-center max-lg:ml-auto space-x-5'>
                            <div>
                                <RxHamburgerMenu onClick={toggleCart} className='lg:inline-block md:inline-block text-[45px] hidden border-[3px] font-extrabold border-white rounded-full p-2' />
                                <Cart isOpen={isCartOpen} onClose={closeCart} />
                                {isCartOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={closeCart}></div>}

                            </div>

                            <button className='lg:hidden !ml-7 ' >
                                < RxHamburgerMenu onClick={toggleNav} className='text-3xl' />

                                <div>
                                    {isNavOpen &&
                                        <ul ref={dropdownRef}
                                            className={`lg:flex gap-x-5 max-lg:space-y-3 transition-transform duration-300 transform max-lg:fixed uppercase max-lg:bg-[#181818] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                                            <button onClick={() => { setIsNavOpen(true) }} className="absolute top-9 right-2">
                                                <RxCross2 className="text-3xl text-purple-500 font-bold" />
                                            </button>

                                            <li className='mb-6 hidden max-lg:block'>
                                                <Link href="/">
                                                    <h1 className='text-2xl font-extrabold text-left'><span className='text-red-600'>A</span>rino</h1>
                                                </Link>
                                            </li>
                                            <li onClick={toggleHomeDropdown} className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 items-center hover:text-red-600 relative'>
                                                <Link href='/' className='text-white hover:text-red-600 font-semibold tracking-wider block text-base'>Home</Link>
                                                <IoIosArrowDown className='text-lg mt-[3px]' />
                                                {/* Dropdown content */}
                                                {homeDropdownVisible && (
                                                    <ul className='absolute top-[200%] z-40 left-0 capitalize transition-transform transform duration-1000 dropdown1 bg-[#181818] text-white w-60 p-6 shadow-lg'>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Main Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Entertainment Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Services Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Salary Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Marketing Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Agency Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Freelancing Page</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Page</Link></li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='/' className='text-white hover:text-red-600 font-semibold text-base block'>About</Link></li>
                                            <li className='max-lg:border-b max-lg:py-3 px-3'><Link href='/' className='text-white hover:text-red-600 font-semibold text-base block'>Services</Link></li>
                                            <li onClick={togglePortfolioDropdown} className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 items-center hover:text-red-600 relative'>
                                                <Link href='/' className='text-white hover:text-red-600 font-semibold tracking-wider block text-base'>Portfolio</Link>
                                                <IoIosArrowDown className='text-lg mt-[3px]' />
                                                {/* Dropdown content */}
                                                {portfolioDropdownVisible && (
                                                    <ul className='absolute top-[200%] left-0 capitalize transition-all duration-1000 dropdown1 bg-[#181818] text-white w-60 p-6 shadow-lg'>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 1</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 2</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 3</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 4</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 5</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 6</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 7</Link></li>
                                                        <li className='hover:text-red-600 w-full text-[16px] mb-6 mt-4'><Link href='/'>Portfolio Item 8</Link></li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 items-center hover:text-red-600'><Link href='/' className='text-white hover:text-red-600 font-semibold block text-base'>Blog</Link>
                                                <IoIosArrowDown className='text-lg mt-[3px]' />
                                            </li>
                                            <li className='max-lg:border-b max-lg:py-3 px-3 flex gap-1 items-center hover:text-red-600'><div onClick={openModal} className='text-white hover:text-red-600 font-semibold block text-base'>Contact</div></li>
                                        </ul>}
                                </div>
                            </button>

                        </div>
                    </div>
                </header>
            </AnimateOnScroll>
        </>
    )
}

const Cart = ({ isOpen, onClose }) => {

    return (
        <section>
            <div className={`fixed top-0 right-0 h-full sm:w-full w-full cursor-pointer lg:w-96 md:w-96 bg-[#181818] shadow-md z-50 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Cart content */}
                <div className="p-10">
                    {/* Your cart items and checkout details */}
                    <h1 className='text-2xl font-extrabold'><span className='text-red-600'>A</span>rino</h1>
                    <hr className="mt-2 h-[2px] bg-gray-800" />
                    <h3 className='mt-4 font-extrabold text-xl'>Do you have a project in your
                        mind? Keep connect us.</h3>
                    <div>
                        <h1 className='mt-10 font-semibold'>Contact Us</h1>
                        <div className='mt-8'>
                            <div className='flex gap-3'>
                                <div><FaPhone className='text-red-600 text-2xl' /></div>
                                <div className='text-white font-semibold hover:text-red-600'> +91 12133 434534</div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-3'>
                                <div><MdEmail className='text-red-600 text-2xl' /></div>
                                <div className='text-white font-semibold hover:text-red-600'> +91 12133 434534</div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-3'>
                                <div><FaLocationPin className='text-red-600 text-2xl' /></div>
                                <div className='text-white font-semibold hover:text-red-600'>50 Wall Street Suite, 44150
                                    Ohio, United States</div>
                            </div>
                        </div>
                        <div className='mt-10'>

                            <form>
                                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50   outline-none" placeholder="Email" required />
                                    <button type="submit" className=" absolute end-2.5 bottom-2.5 bg-red-600  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-gray-700 text-white">Email</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
                {/* Close button */}
                <RxCross2 className="text-2xl mt-2 absolute top-2 right-3" onClick={onClose} />
            </div>
        </section>
    );
};
export default Page