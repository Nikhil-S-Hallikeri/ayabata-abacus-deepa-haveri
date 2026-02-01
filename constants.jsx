import React from 'react';
import abacus1 from './assets/abacus-2.png';
import abacus2 from './assets/abacus1.jpg';
import tutorial1 from './assets/tutorial-1.jpg';
import tutorial2 from './assets/tutorial-2.jpg';
import jnv1 from './assets/jnv-1.jpg';
import jnv2 from './assets/jnv-3.jpg';
import hand from './assets/hadwrting-classes-1.jpg';

import {
    BookOpen, Calculator, Award, Calendar, GraduationCap,
    Users, ShieldCheck, Star, Brain, Globe, FlaskConical,
    MessageSquare, Target, Palette
} from 'lucide-react';

export const ACADEMY_INFO = {
    name: "Aryabhata Abacus & Vedic Maths Haveri",
    location: "Haveri 2nd Branch",
    instructor: "Deepa S Ballari",
    qualifications: "M.A., M.Ed.",
    role: "Senior Mathematics Lecturer",
    affiliations: ["Aryabhata Abacus & Vedic Maths", "ISO Certified Company", "Gyanasiri Gurukula Navodaya Coaching Center Haveri."],
    phone: "9742416020",
    whatsapp: "9742416020"
};

export const PROGRAMS = [
    {
        id: "abacus-vedic",
        title: "Abacus & Vedic Maths",
        headline: "Transform Your Child into a \"Human Calculator\"",
        description: "Boost your child's mental math speed, concentration, and cognitive skills through our certified curriculum.",
        detailDescription: "Aryabhata Abacus & Vedic Maths is a premier institute for brain development. We don't just teach math; we activate your child's brain. Our program is designed to move children away from calculator dependency and toward mental mastery.",
        icon: <Calculator className="w-8 h-8 text-primary" />,
        image: abacus1,
        secondImage: abacus2,
        features: [
            "Whole Brain Development: Activation of Left & Right brain hemispheres.",
            "Photographic Memory: Visualize numbers and solve instantly.",
            "Competitive Edge: Training for State/District competitions.",
            "10x Concentration: Proven techniques to improve focus."
        ],
        whyChoose: [
            { title: "Scientifically Structured", desc: "Ancient tools combined with modern techniques." },
            { title: "Recognized Excellence", desc: "Winners of multiple awards." },
            { title: "Life-Long Skills", desc: "Improves confidence, speed, and accuracy." },
            { title: "Flexible Learning", desc: "Weekend batches available." }
        ],
        brainScience: {
            left: ["Logical Thinking", "Number Skills", "Analysis"],
            right: ["Photographic Memory", "Creativity", "Visualization"]
        },
        offerings: [
            "Abacus Levels: Systematic progression.",
            "Vedic Maths: Speed techniques for higher grades.",
            "Certification: Recognized course completion certificates.",
            "Competitions: Platform to showcase talent."
        ],
        cta: {
            text: "Give your child the Aryabhata advantage today. Call for a Free Demo.",
            location: "Haveri Branch"
        }
    },
    {
        id: "daily-tuitions",
        title: "Daily Tutions",
        headline: "Expert Tuitions for Academic Excellence: Class 1 to Class 10",
        description: "Personalized attention for students from primary to high school, focusing on fundamental concepts and exam excellence.",
        detailDescription: "Is your child struggling with complex school subjects or losing confidence in exams? At our academy, we provide a nurturing and disciplined environment where learning becomes a joy. Led by Deepa S Ballari, our systematic teaching approach ensures every student masters their school curriculum and achieves top marks in their board and school exams.",
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        image: tutorial1,
        secondImage: tutorial2,
        features: [
            "Subject Mastery (Focus on Maths & Science)",
            "Small Batch Sizes for Personalized Attention",
            "Homework & Assignment Support",
            "Regular Progress Monitoring & Tests"
        ],
        whyChoose: [
            { title: "Highly Qualified Faculty", desc: "Benefit from the expertise of Deepa S Ballari (M.A., M.Ed.)." },
            { title: "Disciplined Environment", desc: "A professional academy setting designed for focused learning." },
            { title: "Exam-Oriented Preparation", desc: "Special focus on board exam preparation and time management." },
            { title: "Concept Clarity", desc: "In-depth explanation of concepts to build a strong foundation." }
        ],
        durations: [
            { title: "Primary Section", duration: "Class 1-4", desc: "All subjects - focus on basics." },
            { title: "Middle School", duration: "Class 5-7", desc: "State & CBSE Syllabus covered." },
            { title: "High School", duration: "Class 8-10", desc: "Specialized batches for Maths, Science, English." }
        ],
        keyDetails: [
            { label: "Batch Timings", value: "Evening batches (Post-school hours)." },
            { label: "Focus Area", value: "Concept clearing, Note-making, and Weekly Tests." },
            { label: "Location", value: "Gyanasiri Gurukula Navodaya Coaching Center Haveri." }
        ],
        cta: {
            text: "Give your child the academic edge they deserve. Enroll now!",
            location: "Haveri Branch"
        }
    },
    {
        id: "navodaya-coaching",
        title: "Navodaya Coaching Centre",
        headline: "Secure Your Child’s Future: Expert Navodaya Entrance Coaching",
        description: "Intensive training for JNV entrance exams. We provide structured materials and rigorous practice to ensure selection.",
        detailDescription: "Admission into Jawahar Navodaya Vidyalayas (JNV) is a dream for every student. We provide specialized coaching for the JNV Selection Test (JNVST). Under expert guidance, we transform students into high-achievers through a rigorous, disciplined, and result-oriented curriculum.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        image: jnv1,
        secondImage: jnv2,
        features: [
            "Mental Ability Mastery: Intensive training in logical patterns.",
            "Arithmetic Excellence: Simplifying complex math problems.",
            "Language Proficiency: Building strong reading comprehension.",
            "Mock Test Series: Weekly OMR-based practice exams."
        ],
        whyChoose: [
            { title: "Expert Faculty", desc: "Classes led by experienced educators." },
            { title: "Systematic Approach", desc: "Ensuring no topic is left behind." },
            { title: "Daily Practice Materials", desc: "Specialized workbooks and question analysis." },
            { title: "Proven Track Record", desc: "Recognized for academic excellence." }
        ],
        offerings: [
            "Comprehensive study materials.",
            "OMR sheet handling practice.",
            "Doubt-clearing sessions.",
            "Performance tracking.",
            "Motivation sessions."
        ],
        keyDetails: [
            { label: "Target Grade", value: "Students currently in 4th and 5th Standard." },
            { label: "Batch Timings", value: "Weekend and Evening batches available." },
            { label: "Location", value: "Gyanasiri Gurukula Navodaya Coaching Center Haveri." }
        ],
        cta: {
            text: "Limited seats available for the Navodaya Entrance batch. Join us today!",
            location: "Haveri Branch"
        }
    },
    {
        id: "handwriting",
        title: "Hand Writing classes",
        headline: "The Art of Beautiful Writing",
        description: "Improve penmanship, speed, and legibility with our specialized handwriting courses.",
        detailDescription: "Good handwriting is a reflection of a disciplined mind. Our handwriting classes are designed to help students improve their writing style, speed, and legibility. Whether it is cursive, print, or calligraphy, we provide the right guidance to make your writing stand out.",
        icon: <Palette className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
        secondImage: hand,
        features: [
            "Legibility Improvement: Make every word clear and readable.",
            "Speed Writing: Maintain quality while writing faster.",
            "Grip & Posture: Correct techniques for fatigue-free writing.",
            "Style Variations: Cursive and Print calligraphy."
        ],
        whyChoose: [
            { title: "Structured Practice", desc: "Scientific approach to letter formation." },
            { title: "Individual Correction", desc: "Personalized feedback for every student." },
            { title: "Confidence Booster", desc: "Good handwriting leads to better academic presentation." },
            { title: "All Ages", desc: "Classes suitable for children and adults." }
        ],
        durations: [
            { title: "Basic Course", duration: "1 Month", desc: "Letter formation & Grip" },
            { title: "Advanced Course", duration: "2 Months", desc: "Speed & Style" },
            { title: "Calligraphy", duration: "Variable", desc: "Artistic writing styles" }
        ],
        keyDetails: [
            { label: "Materials", value: "Practice books provided." },
            { label: "Focus", value: "Neatness, Speed, Alignment." },
            { label: "Location", value: "Haveri Branch" }
        ],
        cta: {
            text: "Transform your handwriting today. Enroll now!",
            location: "Haveri Branch"
        }
    }
];

export const WHY_CHOOSE_US = [
    {
        title: "Expert Instruction",
        desc: "Led by Deepa S Ballari, a Senior Mathematics Lecturer with M.A., M.Ed.",
        icon: <Users className="w-6 h-6" />
    },
    {
        title: "ISO Certified Quality",
        desc: "We maintain international standards in educational delivery and management.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        title: "Vedic Maths Affiliation",
        desc: "Official partner of Aryabhata Vedic Maths for superior mental math training.",
        icon: <Award className="w-6 h-6" />
    },
    {
        title: "Proven Results",
        desc: "Highly successful track record in Navodaya entrance and school exams.",
        icon: <Star className="w-6 h-6" />
    }
];

// Automatically import all images from assets/gallery
const galleryModules = import.meta.glob('./assets/gallery/*.{jpeg,jpg,png,webp}', { eager: true, import: 'default' });

const imageCategories = ["Classroom", "Events", "Competitions", "Students"];

// Sort keys naturally (image1, image2, ... image10)
const galleryKeys = Object.keys(galleryModules).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
);

export const GALLERY_IMAGES = galleryKeys.map((key, index) => ({
    src: galleryModules[key],
    category: imageCategories[index % imageCategories.length]
}));

export const GALLERY_CATEGORIES = ["All", "Classroom", "Events", "Competitions", "Students"];
