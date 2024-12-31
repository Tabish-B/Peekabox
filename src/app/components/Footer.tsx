"use client";
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-Background py-8 px-4">
            {/* Top Border */}
            <div className="border-t border-muted mb-8"></div>

            {/* Content Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-sm text-muted space-y-8 md:space-y-0">
                {/* Section 1: About */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-black">About Us</h3>
                    <p className="mt-2 max-w-xs text-Gray750 hover:text-accent">
                        Learn more about our mission to reduce food waste and promote
                        sustainability across communities.
                    </p>
                </div>

                {/* Section 2: Quick Links */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-black">Quick Links</h3>
                    <ul className="space-y-2 mt-2 text-Gray750">
                        <li>
                            <a href="#our-mission" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                Our Mission
                            </a>
                        </li>
                        <li>
                            <a href="#impact" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                Our Impact
                            </a>
                        </li>
                        <li>
                            <a href="#partnerships" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                Partnerships
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Resources */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-black">Resources</h3>
                    <ul className="space-y-2 mt-2 text-Gray750">
                        <li>
                            <a href="#blog" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#case-studies" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                Case Studies
                            </a>
                        </li>
                        <li>
                            <a href="#documentation" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                Documentation
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 4: Contact */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-black">Contact Us</h3>
                    <ul className="space-y-2 mt-2 text-Gray750">
                        <li>
                            <a href="mailto:info@peekabox.com" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                info@peekabox.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+123456789" className="hover:underline decoration-accent underline-offset-4 hover:text-accent">
                                +971 (234) 567-89
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t border-muted pt-4 px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center text-xs">
                <p className="mb-4 sm:mb-0 text-center sm:text-left">
                    © 2024 Peekabox. All rights reserved.
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-4 sm:mb-0 justify-center sm:ml-auto">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-accent text-accent transition-all duration-300 transform hover:scale-125"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-accent text-accent transition-all duration-300 transform hover:scale-125"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-accent text-accent transition-all duration-300 transform hover:scale-125"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-accent text-accent transition-all duration-300 transform hover:scale-125"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="hover:text-accent text-accent transition-all duration-300 transform hover:scale-125"
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-accent text-accent transition-all duration-300 transform hover:scale-125"
                    >
                        <FaYoutube />
                    </a>
                </div>

                {/* Language Selector */}
                <select
                    className="bg-transparent border-none text-muted ml-8"
                    aria-label="Language Selector"
                >
                    <option>English (US)</option>
                    <option>Arabic</option>
                    <option>French</option>
                </select>
            </div>
        </footer>
    );
};

export default Footer;