import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROGRAMS } from '../constants.jsx';

const ProgramsGrid = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    // Update items to show based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(4);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, PROGRAMS.length - itemsToShow);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    return (
        <div className="relative px-4 sm:px-12">
            {/* Navigation Arrows */}
            {currentIndex > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-primary transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous programs"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {currentIndex < maxIndex && (
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg border border-gray-100 text-gray-600 hover:text-primary transition-all hover:scale-110 active:scale-95"
                    aria-label="Next programs"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            {/* Slider Container */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-6 py-4"
                    animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {PROGRAMS.map((program, index) => (
                        <motion.a
                            key={program.id}
                            href={`#details-${program.id}`}
                            style={{ flex: `0 0 calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 1.5}rem / ${itemsToShow})` }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all border border-gray-100 flex flex-col items-start min-h-[380px]"
                        >
                            <div className="p-4 bg-emerald-50 rounded-2xl mb-6 group-hover:text-white transition-all duration-300">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{program.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 grow line-clamp-4">
                                {program.description}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-primary w-8' : 'bg-gray-200 hover:bg-gray-300'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgramsGrid;
