import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import { ACADEMY_INFO } from '../constants.jsx';
import instructor from '../assets/deepa.jpeg';

const InstructorProfile = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl"></div>
                        <img
                            src={instructor}
                            alt={ACADEMY_INFO.instructor}
                            className="relative rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 sm:border-8 border-white/10"
                        />
                        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-amber-500 p-3 sm:p-4 rounded-2xl shadow-lg border-2 border-white/20">
                            <Award className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                    </div>
                </motion.div>

                <div className="flex-[1.5] text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-emerald-300 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Meet Our Expert</h3>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">{ACADEMY_INFO.instructor}</h2>

                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-xl backdrop-blur-sm">
                                <GraduationCap className="text-emerald-400 w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="font-medium text-sm sm:text-base">{ACADEMY_INFO.qualifications}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-xl backdrop-blur-sm">
                                <MapPin className="text-emerald-400 w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="font-medium text-sm sm:text-base">{ACADEMY_INFO.location}</span>
                            </div>
                        </div>

                        <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed mb-8 italic">
                            "My mission is to eliminate math-phobia and empower students with logical thinking that lasts a lifetime."
                        </p>

                        <div className="space-y-4 text-emerald-100/80">
                            <p className="text-base sm:text-lg">
                                With extensive experience as a <strong>{ACADEMY_INFO.role}</strong>, {ACADEMY_INFO.instructor.split(' ')[0]} specializes in making complex mathematical concepts accessible and engaging for students of all ages.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                                    <span>Expert in Vedic Mathematics</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                                    <span>Navodaya Selection Specialist</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                                    <span>Personalized Mentorship</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></div>
                                    <span>Regular Progress Monitoring</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;
