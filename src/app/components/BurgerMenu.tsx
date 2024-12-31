import React, { useEffect } from "react";
import Link from "next/link";

interface BurgerMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

interface MobileMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
    useEffect(() => {
        if (isMenuOpen) {
            // Disable body scroll when the menu is open
            document.body.style.overflow = "hidden";
        } else {
            // Re-enable body scroll when the menu is closed
            document.body.style.overflow = "auto";
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
                <span className="block text-3xl font-bold">&times;</span>
            ) : (
                <>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </>
            )}
        </div>
    );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
    return (
        isMenuOpen && (
            <div className="fixed inset-0 bg-gradient-to-r from-secondary to-secondary flex flex-col items-center justify-center space-y-6 p-4">
                <div className="absolute top-4 left-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wider">
                        <Link
                            href="/"
                            className="hover:text-primary hover:border-primary px-4 py-2 border-2 border-white text-white transition-all duration-300"
                        >
                            Peekabox
                        </Link>
                    </h1>
                </div>

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

                {/* Add Sign In and Sign Up Buttons */}
                <div className="flex flex-col space-y-4 mt-8">
                    <Link
                        href="/signin"
                        onClick={toggleMenu}
                        className="text-xl font-semibold text-white border-2 border-white hover:bg-primary py-2 px-4 rounded transition-all duration-300"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        onClick={toggleMenu}
                        className="text-xl font-semibold text-white bg-primary hover:bg-secondary py-2 px-4 rounded transition-all duration-300"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        )
    );
};

export { BurgerMenu, MobileMenu };