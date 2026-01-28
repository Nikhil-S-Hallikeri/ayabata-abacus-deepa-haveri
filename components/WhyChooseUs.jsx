import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants.jsx';

const WhyChooseUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Parents Choose Us</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We combine tradition with modern educational standards to provide the best for your child.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {WHY_CHOOSE_US.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-primary flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
