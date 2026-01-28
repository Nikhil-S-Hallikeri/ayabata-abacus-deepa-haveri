import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        // If there is a hash, let the browser/native behavior handle the scroll (or smooth scroll to it)
        // If no hash, scroll to top
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // Optional: Force scroll to element if needed, but often not required if native behavior works.
            // Adding a small timeout can help ensure the element exists after navigation render.
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash]);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-5 z-40 p-3 bg-white text-primary rounded-full shadow-lg border border-gray-100 hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
