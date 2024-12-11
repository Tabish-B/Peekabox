"use client";
import { useState } from "react";
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="flex justify-between items-center h-16 md:h-24 px-4 md:px-8 bg-secondary text-white relative z-50 border-b-[1px] border-primary">
            {/* Logo */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider ">
                <Link href="/" className="hover:text-primary">Peekabox</Link>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
                <Link href="/business" className="relative text-sm sm:text-base md:text-lg group hover:text-primary">
                    Business Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/story" className="relative text-sm sm:text-base md:text-lg group hover:text-primary">
                    Our Story
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/food-waste" className="relative text-sm sm:text-base md:text-lg group hover:text-primary">
                    Food Waste Insights
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>

            {/* Burger Menu Icon */}
            <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <span className="block text-2xl font-bold">&times;</span>
                ) : (
                    <>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </>
                )}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-secondary flex flex-col items-center justify-center space-y-6 p-4">
                    <Link href="/business" onClick={toggleMenu} className="text-xl font-semibold relative group hover:text-primary">
                        Business Services
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/our-story" onClick={toggleMenu} className="text-xl font-semibold relative group hover:text-primary">
                        Our Story
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/food-waste" onClick={toggleMenu} className="text-xl font-semibold relative group hover:text-primary">
                        Food Waste Insights
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;