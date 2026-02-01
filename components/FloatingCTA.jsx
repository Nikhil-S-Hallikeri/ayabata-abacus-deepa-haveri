import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../constants.jsx';

const FloatingCTA = () => {
    return (
        <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-60 flex flex-col gap-3 md:gap-4">
            <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 md:w-14 md:h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all transform hover:scale-110 active:scale-95 group"
                aria-label="WhatsApp Us"
            >
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-slow-ping"></span>
                <MessageCircle className="w-5 h-5 md:w-7 md:h-7 relative z-10" />
                <span className="absolute left-full ml-3 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with us
                </span>
            </a>

            <a
                href={`tel:${ACADEMY_INFO.phone}`}
                className="w-10 h-10 md:w-14 md:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-emerald-700 transition-all transform hover:scale-110 active:scale-95 group relative"
                aria-label="Call Us"
            >
                <Phone className="w-4 h-4 md:w-6 md:h-6" />
                <span className="absolute left-full ml-3 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Call Admissions
                </span>
            </a>
        </div>
    );
};

export default FloatingCTA;
