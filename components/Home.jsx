import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProgramsGrid from './ProgramsGrid';
import ProgramDetails from './ProgramDetails';
import AboutAcademy from './AboutAcademy';
import InstructorProfile from './InstructorProfile';
import WhyChooseUs from './WhyChooseUs';
import Gallery from './Gallery';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import ScrollToTop from './ScrollToTop';

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
            <Header />
            <ScrollToTop />
            <main>
                <section id="home">
                    <Hero />
                </section>

                <section id="programs" className="py-24 bg-emerald-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Learning Programs</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comprehensive educational pathways designed to nurture talent and build academic excellence.
                            </p>
                        </div>
                        <ProgramsGrid />
                    </div>
                </section>

                <section className="py-24">
                    <ProgramDetails />
                </section>

                <section id="about" className="py-24">
                    <AboutAcademy />
                </section>

                <section id="instructor" className="py-24 bg-emerald-900 text-white">
                    <InstructorProfile />
                </section>

                <section className="py-24">
                    <WhyChooseUs />
                </section>

                <section id="gallery" className="py-24 bg-gray-50">
                    <Gallery />
                </section>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
};

export default Home;
