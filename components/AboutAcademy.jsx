import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACADEMY_INFO } from '../constants.jsx';
import about2 from '../assets/about-2.jpg';
import Video from '../assets/aryabata-video-2.mp4';
import PopupVideo from '../assets/aryabata-video-1.mp4';

const AboutAcademy = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <video
                                src={Video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl w-full shadow-md object-cover"
                            />
                            <div className="bg-primary p-6 rounded-2xl text-white">
                                <p className="text-3xl font-bold mb-1">ISO</p>
                                <p className="text-sm opacity-90 text-white font-medium uppercase tracking-tight">Certified Excellence</p>
                            </div>

                            {/* Popup Video Trigger */}
                            <div
                                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <video
                                    src={PopupVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-4 pt-0 md:pt-8">
                            <div className="bg-amber-400 p-6 rounded-2xl text-white">
                                <p className="text-3xl font-bold mb-1">20+</p>
                                <p className="text-sm opacity-90 text-white font-medium uppercase tracking-tight">Years Heritage</p>
                            </div>
                            <img src={about2} alt="Classroom" className="rounded-2xl w-full shadow-md" />
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About {ACADEMY_INFO.name}</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Located in the heart of Haveri, {ACADEMY_INFO.name} has been a beacon of academic excellence for years. Our mission is to provide students with the tools they need to succeed in an ever-evolving world.
                            </p>
                            <p>
                                Affiliated with <strong>Aryabhata Vedic Maths</strong>, we bring ancient wisdom combined with modern teaching methodologies. We don't just teach subjects; we foster curiosity, discipline, and a love for learning.
                            </p>
                            <p>
                                Our institution is <strong>ISO Certified</strong>, ensuring that your child receives education that meets international quality standards. From foundational school tuitions to competitive Navodaya coaching, we cover it all.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <video
                                src={PopupVideo}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutAcademy;
