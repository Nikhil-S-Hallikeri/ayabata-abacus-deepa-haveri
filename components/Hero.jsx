import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../constants.jsx';
// import abacus from '../assets/abacus3.png';
import abacus from '../assets/House.jpeg';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-start md:items-center pt-24 pb-12 md:pt-32 md:pb-0 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full opacity-10">
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex gap-1 flex-wrap justify-center md:justify-start">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-sm font-semibold mb-3 sm:mb-6 border border-emerald-100 hover:bg-emerald-100">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                <span>Greenary Academy (R)</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-sm font-semibold mb-3 sm:mb-6 border border-emerald-100 hover:bg-emerald-100">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                <span className="">ISO 9001:2015 Certified</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-sm font-semibold mb-3 sm:mb-6 border border-emerald-100 hover:bg-emerald-100">
                                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                <span className="">Gyanasiri Gurukula Navodaya Coaching Center Haveri.</span>
                            </div>
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight italic">
                                ARYABHATA ABACUS & <span className="text-primary underline">VEDIC MATHS HAVERI</span>
                            </h1>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                            Experience world-class education with expert mentorship. Specializing in Mathematics, Abacus, and Competitive exam coaching in Bankapur.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-10 w-full sm:w-auto">
                            <a
                                href={`https://wa.me/${ACADEMY_INFO.whatsapp}`}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200/50"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </a>
                            <a
                                href="tel:919876543210"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-primary hover:text-primary transition-all shadow-sm"
                            >
                                <Phone className="w-5 h-5" />
                                Call - 9742416020
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                <span className="">Aryabhata Vedic Maths</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                <span className="">Expert Math Coaching</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                <span className="">Safe Environment</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="flex-1 relative w-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[rgba(0,0,0,0.1)] h-auto w-full md:h-[420px]">
                        <img
                            src={abacus}
                            alt="Learning at Greenary Academy"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Info Card */}
                    {/* <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-amber-50 rounded-lg">
                                <ChevronRight className="text-amber-500 w-5 h-5" />
                            </div>
                            <span className="font-bold text-gray-900">1000+ Students</span>
                        </div>
                        <p className="text-xs text-gray-500">Nurturing futures through qualitative and personalized education since inception.</p>
                    </div> */}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
