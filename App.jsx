import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProgramPage from './pages/ProgramPage';
import ScrollToTop from './components/ScrollToTop';
import GalleryPage from './pages/GalleryPage';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/program/:slug" element={<ProgramPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
};

export default App;
