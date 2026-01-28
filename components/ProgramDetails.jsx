import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PROGRAMS } from '../constants.jsx';

const ProgramDetails = () => {
    return (
        <div className="space-y-24">
            {PROGRAMS.map((program, index) => (
                <section
                    id={`details-${program.id}`}
                    key={program.id}
                    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 scroll-mt-24`}
                >
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-3xl overflow-hidden aspect-video shadow-lg"
                        >
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </motion.div>
                    </div>

                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">Focus Area</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{program.title}</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {program.description} We believe in a holistic approach where students don't just learn, they master. Our {program.title.toLowerCase()} curriculum is designed by industry experts.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {program.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={`/program/${program.id}`}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                View Details
                            </Link>
                        </motion.div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ProgramDetails;
