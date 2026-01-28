import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ACADEMY_INFO } from '../constants.jsx';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import isoBadge from '../assets/certificate-iso.png';
import isoCert from '../assets/iso-cert.jpeg';

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);

    // Determine active section based on current path and hash
    const getActiveSection = () => {
        if (location.pathname !== '/') return null;
        const hash = location.hash || '#home';
        return hash;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isCertModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCertModalOpen]);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Programs', href: '/#programs' },
        { name: 'About Us', href: '/#about' },
        { name: 'Instructor', href: '/#instructor' },
        { name: 'Gallery', href: '/#gallery' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <a href="/">
                                <img src={logo} alt="Logo" className="w-20 lg:w-24 lg:h-16 h-12 object-contain" />
                            </a>
                            <div className="h-8 w-px bg-gray-500 mx-1 hidden sm:block"></div>
                            <button
                                onClick={() => setIsCertModalOpen(true)}
                                className="group relative flex items-center transition-all duration-300 hover:scale-105"
                                aria-label="View ISO Certification"
                            >
                                <img
                                    src={isoBadge}
                                    alt="ISO Badge"
                                    className="h-14 sm:h-18 w-auto object-contain drop-shadow-sm group-hover:drop-shadow-md cursor-pointer"
                                />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Click to view certification
                                </span>
                            </button>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = getActiveSection() === link.href.split('#')[1] ? '#' + link.href.split('#')[1] : false;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors ${isActive
                                                ? 'text-primary font-semibold'
                                                : 'text-gray-600 hover:text-primary'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <a
                                href={`tel:${ACADEMY_INFO.phone}`}
                                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                Call Now
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden "
                        >
                            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                                {navLinks.map((link) => {
                                    const isActive = getActiveSection() === link.href.split('#')[1] ? '#' + link.href.split('#')[1] : false;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`block text-base font-medium text-center w-full ${isActive
                                                    ? 'text-primary font-semibold'
                                                    : 'text-gray-700 hover:text-primary'
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}
                                <a
                                    href={`tel:${ACADEMY_INFO.phone}`}
                                    className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold"
                                >
                                    Connect with us
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* ISO Certificate Modal */}
            <AnimatePresence>
                {isCertModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCertModalOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white">
                                <h3 className="font-bold text-gray-900">ISO Certification</h3>
                                <button
                                    onClick={() => setIsCertModalOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50/50">
                                <img
                                    src={isoCert}
                                    alt="ISO Certification Certificate"
                                    className="w-full h-auto rounded-lg shadow-md mx-auto"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
