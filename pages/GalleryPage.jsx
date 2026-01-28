import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingCTA from '../components/FloatingCTA.jsx';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '../constants.jsx';

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredImages, setFilteredImages] = useState(GALLERY_IMAGES);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredImages(GALLERY_IMAGES);
        } else {
            setFilteredImages(GALLERY_IMAGES.filter(img => img.category === selectedCategory));
        }
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
            <Header />
            <main className="grow pt-28 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-emerald-700 hover:underline hover:scale-105 duration-300 mb-8 transition-all hover:translate-y-1 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Gallery</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                            Explore the vibrant life at our academy, from classroom sessions to exciting events and achievements.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {GALLERY_CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg shadow-emerald-200'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence>
                            {filteredImages.map((img, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    key={`${img.src}-${index}`}
                                    onClick={() => setSelectedImage(img)}
                                    className="group relative rounded-2xl overflow-hidden aspect-4/3 shadow-md cursor-pointer"
                                >
                                    <img
                                        src={img.src}
                                        alt={`${img.category} view`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute top-4 left-4">
                                            <span className="text-white font-bold text-sm tracking-wider border border-white/30 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md">
                                                {img.category}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No images found in this category.</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.category}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
            <FloatingCTA />
        </div>
    );
};

export default GalleryPage;
