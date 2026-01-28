import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageSquare } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingCTA from '../components/FloatingCTA.jsx';
import { PROGRAMS } from '../constants.jsx';

const ProgramPage = () => {
    const { slug } = useParams();
    const program = PROGRAMS.find(p => p.id === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!program) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
                <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
                <Link to="/" className="text-primary hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
            <Header />
            <main className="grow pt-26 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary hover:underline hover:scale-105 duration-300 mb-8 transition-all hover:translate-y-1">
                        <ArrowLeft className="w-4 h-4" /> Back to Programs
                    </Link>

                    {/* Mobile Only Image (Visible on small screens) */}
                    <div className="lg:hidden mb-8">
                        <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl">
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col-reverse lg:flex-row gap-12 items-start"
                    >
                        <div className="w-full lg:w-1/2">
                            {/* Desktop Image (Hidden on mobile) */}
                            <div className="hidden lg:block relative rounded-3xl overflow-hidden aspect-video shadow-xl">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                            </div>

                            {/* Key Features - Now on Left */}
                            <div className="bg-emerald-50 rounded-2xl p-8 mt-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Key Features</h3>
                                <ul className="grid grid-cols-1 gap-4">
                                    {program.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm mt-1">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-gray-700 font-medium leading-normal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{program.headline || program.title}</h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                                {program.detailDescription || program.description}
                            </p>

                            {/* Second Image - Now on Right */}
                            {program.secondImage && (
                                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-lg mb-8">
                                    <img
                                        src={program.secondImage}
                                        alt={`${program.title} Advanced`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Extended Content Sections (Why Choose Us, Brain Science, Offerings, CTA) */}
                    <div className="mt-20 space-y-20">
                        {/* Promo Banner */}
                        {program.promo && (
                            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>

                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                            {program.promo.title}
                                        </h2>
                                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-100 mb-2">
                                            {program.promo.discount}
                                        </p>
                                        <p className="text-white/90 text-sm font-medium uppercase tracking-wider">
                                            {program.promo.validity}
                                        </p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 max-w-sm">
                                        <p className="font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                                            {program.promo.bonus}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Course Durations Grid */}
                        {program.durations && (
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Program Options</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {program.durations.map((course, index) => (
                                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                                            <div className="bg-primary/5 p-6 border-b border-gray-100">
                                                <h3 className="text-lg sm:text-xl font-bold text-primary">{course.title}</h3>
                                            </div>
                                            <div className="p-8 grow flex flex-col items-center justify-center text-center">
                                                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{course.duration}</div>
                                                <div className="h-1 w-12 bg-gray-200 rounded-full my-4"></div>
                                                <p className="text-gray-600 font-medium">{course.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Special Feature (For Spoken English - Elders) */}
                        {program.specialFeature && (
                            <section className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl"></div>
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-4">
                                            {program.specialFeature.subtitle}
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{program.specialFeature.title}</h2>
                                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                            {program.specialFeature.desc}
                                        </p>
                                    </div>
                                    <div className="shrink-0">
                                        <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center">
                                            <MessageSquare className="w-12 h-12 text-orange-600" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Key Details Grid (For Navodaya & Spoken English) */}
                        {program.keyDetails && (
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Essential Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {program.keyDetails.map((detail, index) => (
                                        <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 flex flex-col items-center text-center">
                                            <h3 className="text-lg font-bold text-emerald-800 mb-2">{detail.label}</h3>
                                            <p className="text-gray-700 font-medium">{detail.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                        {/* Why Choose Section */}
                        {program.whyChoose && (
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Aryabhata Abacus?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {program.whyChoose.map((item, index) => (
                                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Brain Science Section */}
                        {program.brainScience && (
                            <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">The Science of Success</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">L</div>
                                            <h3 className="text-2xl font-bold text-blue-900">Left Brain Activation</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {program.brainScience.left.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-xs">
                                                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">R</div>
                                            <h3 className="text-2xl font-bold text-purple-900">Right Brain Activation</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {program.brainScience.right.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-xs">
                                                    <Check className="w-5 h-5 text-purple-500 shrink-0" />
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Offerings Section */}
                        {program.offerings && (
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {program.offerings.map((offer, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 border-l-4 border-primary bg-emerald-50/30">
                                            <div className="shrink-0 mt-1">
                                                <Check className="w-5 h-5 text-primary" />
                                            </div>
                                            <p className="text-gray-800 font-medium">{offer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* CTA Section */}
                        {program.cta && (
                            <section className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

                                <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to Start?</h2>
                                <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-50 relative z-10">
                                    {program.cta.text}
                                </p>
                                <div className="inline-block bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 relative z-10">
                                    <h4 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
                                        Visit Us At:
                                    </h4>
                                    <p className="text-emerald-50">{program.cta.location}</p>
                                </div>
                                <div className="mt-10 relative z-10">
                                    <Link to="/" className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-emerald-50 transition-colors shadow-lg whitespace-nowrap inline-block">
                                        Book a Free Demo Class
                                    </Link>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    );
};

export default ProgramPage;
