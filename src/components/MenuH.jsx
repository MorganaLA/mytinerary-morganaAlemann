import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'

const MenuH = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const ImgMenu = () => (
        <svg
            className="h-5 w-5 content-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );

    return (
        <div className="md:hidden relative ml-3 my-2 flex justify-center">
            <Button
                img={<ImgMenu />}
                onClick={toggleMenu}
                className="md:hidden"
            />

            {isOpen && (
                <div className="absolute z-10 right-0 mt-2 w-32 bg-white/70 rounded ring-8 ring-white/70 shadow-fxs transform translate-y-11 translate-x-1.5 transition-transform origin-top">
                    <ul>
                        {links.map((link) => (
                            <li key={link.title}>
                                <Link
                                    to={link.to}
                                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-600/20"
                                    onClick={toggleMenu}
                                >{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuH;

