import React from 'react';
import { motion } from 'framer-motion';
import { ACADEMY_INFO } from '../constants.jsx';

const AboutAcademy = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <img src="https://picsum.photos/seed/about1/400/500" alt="Students" className="rounded-2xl w-full shadow-md" />
                            <div className="bg-primary p-6 rounded-2xl text-white">
                                <p className="text-3xl font-bold mb-1">ISO</p>
                                <p className="text-sm opacity-90 text-white font-medium uppercase tracking-tight">Certified Excellence</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="bg-amber-400 p-6 rounded-2xl text-white">
                                <p className="text-3xl font-bold mb-1">10+</p>
                                <p className="text-sm opacity-90 text-white font-medium uppercase tracking-tight">Years Heritage</p>
                            </div>
                            <img src="https://picsum.photos/seed/about2/400/500" alt="Classroom" className="rounded-2xl w-full shadow-md" />
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
                                Located in the heart of Bankapur, {ACADEMY_INFO.name} has been a beacon of academic excellence for years. Our mission is to provide students with the tools they need to succeed in an ever-evolving world.
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
        </div>
    );
};

export default AboutAcademy;
