import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaSearch, FaTimes } from 'react-icons/fa';
import who from '../assets/who.jpg';
import what from '../assets/what.jpg';
import sustainability from '../assets/sustainability.jpg';
import news from '../assets/news.jpg';
import media from '../assets/media.jpg';
import home from '../assets/home.jpg';

const Navbar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const menuItems = [
        {
            name: 'Who We Are',
            options: ['Mission & Values', 'Company History', 'Environmental, Health, Safety & Security', 'Diversity, Equity & Inclusion', 'Community Involvement', 'Leadership', 'Financials', 'Suppliers'],
            image: who,
            text: 'Learn more about our values and history.'
        },
        {
            name: 'What We Do',
            options: ['Industries', 'Solutions', 'Licensing', 'Product Finder'],
            image: what,
            text: 'Discover our solutions and product offerings.'
        },
        {
            name: 'Sustainability',
            options: ['Our Story', 'Climate Change', 'Product Sustainability & Circularity', 'Social Responsibility', 'UN SDGs', 'Impact & Reporting', 'Collaborations and Engagements', 'Sustainably Smart'],
            image: sustainability,
            text: 'See how we are committed to sustainability.'
        },
        {
            name: 'Media & Events',
            options: ['News', 'Videos', 'Events', 'Social'],
            image: media,
            text: 'Stay updated with our latest media and events.'
        },
        {
            name: 'Resources',
            options: ['Safety Data Sheet(SDS)', 'Technical Data Sheets(TDS)', 'Product Summaries', 'Product Regulatory Overviews(PRO)', 'Credit Inquiry', 'Industry Glossary', 'Railcar Outage Tables', 'Terms and Conditions', 'CLM Event Sighting Codes'],
            image: news,
            text: 'Access important resources and documents.'
        },
        {
            name: 'Careers',
            options: ['Find a Job', 'Working with us', 'Job Openings', 'Europe Job Opportunities', 'Job Opportuniteiten Europa'],
            image: home,
            text: 'Explore career opportunities with us.'
        }
    ];

    return (
        <div className='h-[20vh] w-[100vw] relative'>
            {/* Logo section */}
            <div className='flex'>
                <div className=''>
                    <img src={logo} alt="logo" className='h-32 w-[17rem] relative left-20 top-3' />
                </div>
            </div>
            <div className='flex justify-end m-auto w-[84vw] cursor-pointer'>
                <div className='absolute top-5 right-[10rem]'>
                    <ul className='flex gap-[2rem] text-sm'>
                        <li>CONTACT US</li>
                        <li>LOCATIONS</li>
                        <li>LOGIN</li>
                        {!isSearchVisible && (
                            <li onClick={toggleSearchBar}>
                                <FaSearch className='text-xl' />
                            </li>
                        )}
                    </ul>
                </div>
                <div className='absolute top-[5rem] font-semibold'>
                    <ul className='flex gap-[4rem]'>
                        {menuItems.map(item => (
                            <li key={item.name} className='relative group'>
                                {item.name}
                                <div className='absolute right-0 top-[4rem] mt-2 w-[50rem] bg-white text-blue-800 font-semibold shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden'>
                                    <div className='flex'>
                                        {/* Image and text section */}
                                        <div className='w-1/3 p-2'>
                                            <img src={item.image} alt={item.name} className='w-full h-[12rem] object-cover rounded' />
                                            <p className='text-gray-600 mt-2'>{item.text}</p>
                                        </div>
                                        {/* Options section */}
                                        <div className='w-2/3 p-2 max-h-[55vh] overflow-y-auto'>
                                            <ul className='space-y-1'>
                                                {item.options.map((option, index) => (
                                                    <React.Fragment key={option}>
                                                        <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>
                                                            {option}
                                                        </li>
                                                        {/* Add <hr> after each option except the last one */}
                                                        {index < item.options.length - 1 && (
                                                            <hr className='border-t border-gray-300' />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isSearchVisible && (
                <div className='absolute top-5 right-[8rem] z-10 flex items-center'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border p-2 rounded w-[50rem]"
                    />
                    <FaTimes
                        className='text-xl ml-2 cursor-pointer'
                        onClick={toggleSearchBar}
                    />
                </div>
            )}
        </div>
    );
};

export default Navbar;