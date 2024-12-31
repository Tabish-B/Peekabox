// Header.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BurgerMenu, MobileMenu } from "./BurgerMenu"; // Import the BurgerMenu component

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Detect when the page is scrolled
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Pixels scrolled from the top
            const scrollHeight = document.documentElement.scrollHeight; // Total scrollable height
            const clientHeight = document.documentElement.clientHeight; // Viewport height
            const totalScrollable = scrollHeight - clientHeight;

            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // scroll progress percentage
            if (totalScrollable > 0) {
                const progress = (scrollTop / totalScrollable) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header
            className={`sticky top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 text-white z-50 transition-all duration-300 border-b-[2px]
                ${scrolled ? "h-12 md:h-16 bg-gradient-to-r from-secondary/100 to-secondary/100 border-primary"
                    : "h-16 md:h-24 bg-gradient-to-r from-secondary/95 via-secondary/95 to-secondary/95 border-primary"}
                `}
        >
            {/* Logo */}
            <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider">
                <Link
                    href="/"
                    className="hover:text-primary hover:border-primary px-4 py-2 border-2 border-white text-white transition-all duration-300"
                >
                    Peekabox
                </Link>
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
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/* Mobile Menu */}
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            {/* Scroll Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </header>
    );
}

export default Header;