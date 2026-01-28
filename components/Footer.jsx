import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, MessageCircle, Heart } from 'lucide-react';
import { ACADEMY_INFO } from '../constants.jsx';
import logo from '../assets/logo2.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                            <div className="p-2">
                                <a href="/">
                                    <img src={logo} alt="Abacus" className="w-32 h-12 sm:w-40 sm:h-14 md:w-46 md:h-16 object-contain" />
                                </a>
                            </div>
                            <span className="font-bold text-xl sm:text-2xl text-white wrap-break-word text-center sm:text-left">
                                {ACADEMY_INFO.name}
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                            {ACADEMY_INFO.name} is leading educational excellence in Bankapur since years. We nurture talent through certified programs and expert mentorship.
                        </p>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4">
                            {ACADEMY_INFO.affiliations.map((aff, i) => (
                                <span key={i} className="text-[10px] sm:text-xs bg-gray-800 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-700 whitespace-nowrap">
                                    {aff}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#programs" className="hover:text-primary transition-colors">Programs</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Academy</a></li>
                            <li><a href="#instructor" className="hover:text-primary transition-colors">Instructor Profile</a></li>
                            <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Programs</h3>
                        <ul className="space-y-4">
                            <li><a href="#details-abacus" className="hover:text-primary transition-colors">Abacus & Vedic Maths</a></li>
                            <li><a href="#details-tuitions" className="hover:text-primary transition-colors">Regular Tuitions</a></li>
                            <li><a href="#details-navodaya" className="hover:text-primary transition-colors">Navodaya Coaching</a></li>
                            <li><a href="#details-weekend" className="hover:text-primary transition-colors">Weekend Modules</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                                <span>{ACADEMY_INFO.location}, Karnataka, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                                <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-primary">{ACADEMY_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="text-primary w-5 h-5 flex-shrink-0" />
                                <a href={`https://wa.me/${ACADEMY_INFO.whatsapp}`} className="hover:text-primary">WhatsApp Us</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                                <a href="mailto:info@greenaryacademy.com" className="hover:text-primary text-sm break-all leading-tight">
                                    info@greenaryacademy.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} {ACADEMY_INFO.name}. All rights reserved.
                    </p>
                    {/* <div className="flex items-center gap-1 text-sm text-gray-500">
                        Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for a brighter future.
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
