import React from 'react';
import {
    BookOpen, Calculator, Award, Calendar, GraduationCap,
    Users, ShieldCheck, Star, Brain, Globe, FlaskConical,
    MessageSquare, Target, Palette
} from 'lucide-react';

export const ACADEMY_INFO = {
    name: "Aryabhata Abacus & Vedic Maths",
    location: "Bankapur Branch",
    instructor: "Jyoti Hallayanavarmath",
    qualifications: "M.Sc Mathematics",
    role: "Senior Mathematics Lecturer",
    affiliations: ["Greenary Academy (R)", "ISO Certified Company"],
    phone: "919876543210", // Placeholder
    whatsapp: "919876543210" // Placeholder
};

export const PROGRAMS = [
    {
        id: "abacus",
        title: "Abacus Classes",
        headline: "Transform Your Child into a \"Human Calculator\" with Aryabhata Abacus",
        description: "Boost your child's mental math speed, concentration, and cognitive skills through our certified Aryabhata Vedic Maths curriculum.",
        detailDescription: "Aryabhata Abacus & Vedic Maths (a unit of Greenary Academy) is North Karnataka's premier ISO 9001:2015 Certified institute. With over 15 years of excellence, we don't just teach math; we activate your child's brain. Our program is designed to move children away from calculator dependency and toward mental mastery, as recognized in the 6th District Level Abacus Awards in Haveri.",
        icon: <Calculator className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&h=600&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop",
        features: [
            "Whole Brain Development: Simultaneous activation of both Left (Logical) and Right (Creative) brain hemispheres.",
            "Photographic Memory: Enhances the ability to visualize numbers and solve complex arithmetic instantly.",
            "Competitive Edge: Specialized training for State and District level competitions and Navodaya exams.",
            "10x Concentration: Proven techniques to improve focus, listening skills, and academic self-reliance."
        ],
        whyChoose: [
            { title: "Scientifically Structured", desc: "Based on the ancient abacus tool combined with modern mental visualization techniques." },
            { title: "Recognized Excellence", desc: "Organized the State Level Abacus Competition and winners of multiple District Awards." },
            { title: "Flexible Learning", desc: "Weekend batches specifically designed for school-going children in Bankapur and Haveri." },
            { title: "Life-Long Skills", desc: "Improves not just math, but also self-confidence, speed, and accuracy in all life challenges." }
        ],
        brainScience: {
            left: ["Logical Thinking & Reasoning", "Number Skills & Calculation", "Analysis & Precision"],
            right: ["Photographic Memory & Visualization", "Imagination & Intuition", "Creativity & Holistic Thought"]
        },
        offerings: [
            "Abacus & Vedic Maths: Primary focus on speed and brain gymnastics.",
            "Calligraphy & Handwriting: Improving fine motor skills.",
            "Competitive Coaching: Special batches for Navodaya and scholarship exams.",
            "Holistic Skills: Spoken English, Yoga, and Karate classes are also available at the center."
        ],
        cta: {
            text: "Give your child the Aryabhata advantage today. Visit our Bankapur branch or call for a Free Demo.",
            location: "Opp. J.H. Patel Circle, Behind Geleyara Balaga Primary School, Haveri."
        }
    },
    {
        id: "fashion-designing",
        title: "Fashion Designing",
        headline: "Empower Your Creativity at the Aryabhata Institute of Fashion Designing",
        description: "Unlock your potential in the world of fashion with Haveri’s premier ISO 9001:2015 Certified design institute.",
        detailDescription: "Unlock your potential in the world of fashion with Haveri’s premier ISO 9001:2015 Certified design institute. A unit of Greenary Academy, we offer attractive vocational courses with a reliable fee structure designed for aspiring designers, entrepreneurs, and hobbyists. From traditional Aari work to modern fashion illustration, we provide the skills you need to start your own boutique or career.",
        icon: <Palette className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
        features: [
            "Aari Work & Hand Embroidery: Master the intricate art of traditional bridal and boutique work.",
            "Professional Makeup & Mehandi: Complete bridal transformation and artistic henna design modules.",
            "Fashion Drawing & Illustration Masterclass: Learn to put your creative visions on paper.",
            "Boutique Management: Gain the business knowledge to start and run your own fashion studio."
        ],
        whyChoose: [
            { title: "ISO Certified Standards", desc: "Quality education recognized by international standards." },
            { title: "Affordable Excellence", desc: "High-quality training with a \"Reliable Fee Structure\" (Basics starting from ₹1500)." },
            { title: "Practical Training", desc: "Hands-on experience with real fabric, Aari frames, and makeup kits." },
            { title: "Haveri's Trusted Center", desc: "Centrally located at Rajendra Nagar with 15+ years of teaching legacy." }
        ],
        durations: [
            { title: "Certificate in Basics", duration: "3 Months", desc: "Foundation course" },
            { title: "Diploma in Fashion Design", duration: "6 Months", desc: "Advanced techniques" },
            { title: "Professional Master Course", duration: "1 Year", desc: "Complete industry readiness" }
        ],
        promo: {
            title: "🔥 NEW YEAR 2026 SPECIAL OFFER",
            discount: "20% OFF on all 3-month courses!",
            validity: "Offer valid until January 05.",
            bonus: "Bonus: Present our digital pamphlet and get an additional 5% discount on spot admissions."
        },
        cta: {
            text: "Start your fashion journey today. Limited seats available for the new batch!",
            location: "Rajendra Nagar, Haveri"
        }
    },
    {
        id: "tuitions",
        title: "Regular School Tuitions",
        headline: "Expert Tuitions for Academic Excellence: Class 1 to Class 10",
        description: "Personalized attention for students from primary to high school, focusing on fundamental concepts and exam excellence.",
        detailDescription: "Is your child struggling with complex school subjects or losing confidence in exams? At Greenary Academy, we provide a nurturing and disciplined environment where learning becomes a joy. Led by Jayalakshmi Ma’am (MSc Mathematics), our systematic teaching approach ensures every student masters their school curriculum and achieves top marks in their board and school exams.",
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
        features: [
            "Subject Mastery (Focus on Maths & Science): In-depth explanation of concepts to build a strong foundation, especially in Mathematics and Science.",
            "Small Batch Sizes: Personalized attention for every student, ensuring no child is left behind in a crowded classroom.",
            "Homework & Assignment Support: Daily guidance to help students complete school work while truly understanding the logic behind it.",
            "Regular Progress Monitoring: Periodic tests and parent-teacher meetings to track and improve performance consistently."
        ],
        whyChoose: [
            { title: "Highly Qualified Faculty", desc: "Benefit from the expertise of an MSc Mathematics Lecturer with years of teaching experience." },
            { title: "ISO 9001:2015 Certified System", desc: "We follow an international standard of educational management for predictable, high-quality results." },
            { title: "Safe & Disciplined Environment", desc: "A professional academy setting located conveniently at the Bankapur branch." },
            { title: "Exam-Oriented Preparation", desc: "Special focus on 7th, 8th, 9th, and 10th-grade board exam preparation and time management." }
        ],
        durations: [
            { title: "Primary Section", duration: "Class 1-4", desc: "All subjects - focus on basics." },
            { title: "Middle School", duration: "Class 5-7", desc: "State & CBSE Syllabus covered." },
            { title: "High School", duration: "Class 8-10", desc: "Specialized batches for Maths, Science, English." }
        ],
        keyDetails: [
            { label: "Batch Timings", value: "Evening batches (Post-school hours)." },
            { label: "Focus Area", value: "Concept clearing, Note-making, and Weekly Tests." },
            { label: "Location", value: "Opp. J.H. Patel Circle, Behind Geleyara Balaga Primary School, Haveri." }
        ],
        cta: {
            text: "Give your child the academic edge they deserve. Enroll now for the new term!",
            location: "Bankapur Branch"
        }
    },
    {
        id: "navodaya",
        title: "Navodaya Coaching",
        headline: "Secure Your Child’s Future: Expert Navodaya Entrance Coaching",
        description: "Intensive training for JNV entrance exams. We provide structured materials and rigorous practice to ensure selection.",
        detailDescription: "Admission into Jawahar Navodaya Vidyalayas (JNV) is a dream for every student. At Greenary Academy, we provide specialized coaching for the JNV Selection Test (JNVST). Under the expert guidance of Jayalakshmi Ma'am (MSc Mathematics), we transform 5th-grade students into high-achievers through a rigorous, disciplined, and result-oriented curriculum at our Bankapur branch.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
        features: [
            "Mental Ability Mastery: Intensive training in 10 different types of figure-based reasoning and logical patterns (50% of the exam).",
            "Arithmetic Excellence: Simplifying complex math problems with Vedic Math techniques to ensure 100% accuracy and speed.",
            "Language Proficiency: Building strong reading comprehension and grammar skills in Kannada/English.",
            "The Mock Test Series: Weekly OMR-based practice exams to eliminate exam fear and master time management."
        ],
        whyChoose: [
            { title: "Expert Faculty", desc: "Classes led by a Mathematics Lecturer (MSc) who understands the nuances of competitive exams." },
            { title: "ISO 9001:2015 Standards", desc: "A systematic approach to coaching that ensures no topic is left behind." },
            { title: "Daily Practice Materials", desc: "Specialized workbooks and previous years' question paper analysis." },
            { title: "Proven Track Record", desc: "Part of an academy recognized by the District Education Department for academic excellence." }
        ],
        offerings: [
            "Comprehensive study materials.",
            "OMR sheet handling practice.",
            "Doubt-clearing sessions on weekends.",
            "Performance tracking and parent-teacher updates.",
            "Motivation sessions to build student confidence."
        ],
        keyDetails: [
            { label: "Target Grade", value: "Students currently in 4th and 5th Standard." },
            { label: "Batch Timings", value: "Weekend and Evening batches available." },
            { label: "Location", value: "Opp. J.H. Patel Circle, Behind Geleyara Balaga Primary School, Haveri." }
        ],
        cta: {
            text: "Limited seats available for the upcoming Navodaya Entrance batch. Don't wait until it's too late!",
            location: "Bankapur Branch"
        }
    },
    {
        id: "weekend",
        title: "Weekend Classes",
        description: "Flexible learning modules for working parents' children, focusing on foundational maths and personality development.",
        icon: <Calendar className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
        features: ["Concept Clarity", "Extra-Curricular Focus", "Small Batches", "Flexible Timings"]
    },
    {
        id: "vedic-maths-advanced",
        title: "Vedic Maths Advanced",
        description: "Master complex calculations with ancient techniques. Ideal for high school students looking to gain a competitive edge.",
        icon: <Brain className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
        features: ["Lightning Fast Speed", "Mental Agility", "Algebra Shortcuts", "Ancient Math Wisdom"]
    },
    {
        id: "olympiad",
        title: "Olympiad Prep",
        description: "Specialized coaching for Science, Maths, and Cyber Olympiads. We focus on advanced problem-solving techniques.",
        icon: <Target className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop",
        features: ["Advanced Concepts", "Analytical Skills", "Mock Olympiad Tests", "International Standard"]
    },
    {
        id: "ntse",
        title: "NTSE Coaching",
        description: "Preparation for National Talent Search Examination. We cover MAT and SAT sections with expert guidance.",
        icon: <Award className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
        features: ["MAT Specialist", "Mental Ability Training", "Previous Year Papers", "Competitive Prep"]
    },
    {
        id: "science-robotics",
        title: "Science & Robotics",
        description: "Hands-on experience with basic robotics and science experiments to foster innovation and technical skills.",
        icon: <FlaskConical className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        features: ["Practical Learning", "STEM Education", "Critical Thinking", "Project Based"]
    },
    {
        id: "spoken-english",
        title: "Spoken English & Communication",
        headline: "Master the Art of Conversation: Spoken English for All Ages",
        description: "Build confidence and fluency in communication. Our program focuses on soft skills, public speaking, and real-world interactions.",
        detailDescription: "Language is the key to opportunity. Whether you are a student looking to excel in interviews, a professional aiming for career growth, or an elder wanting to connect with the modern world, our Spoken English program is designed for you. At Greenary Academy, we move beyond textbook grammar to focus on real-world fluency, helping you speak English with confidence and clarity.",
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        features: [
            "Phonetics & Pronunciation: Mastering basic sounds, vowels, and consonants to reduce mother-tongue influence.",
            "Grammar Foundation: Simplified lessons on tenses, sentence structure, and parts of speech.",
            "Daily Conversations: Practical training for simple dialogues, shopping, traveling, and social interactions.",
            "The Art of Self-Introduction: Crafting a powerful personal introduction for social and professional settings.",
            "Word Mastery: Building a rich vocabulary for clear and effective expression."
        ],
        specialFeature: {
            title: "Spoken English for Elders",
            subtitle: "It's Never Too Late to Learn!",
            desc: "We offer specialized, stress-free batches for senior citizens and elders. Our patient and supportive teaching environment helps elders learn English for travel, technology use, and speaking with grandchildren, ensuring they never feel left behind in a digital world."
        },
        whyChoose: [
            { title: "ISO 9001:2015 Certified Quality", desc: "A systematic and professional approach to language training." },
            { title: "Interactive Learning", desc: "Focus on 'Speaking' rather than just 'Writing.' We use role-plays and group discussions." },
            { title: "Expert Faculty Guidance", desc: "Under the academic supervision of Jayalakshmi Ma'am (MSc Mathematics)." },
            { title: "Flexible Batches", desc: "Morning and evening slots available to suit students, housewives, and working professionals." }
        ],
        keyDetails: [
            { label: "Course Levels", value: "Basic to Intermediate." },
            { label: "Batch Type", value: "Personal attention with limited students." },
            { label: "Location", value: "Opp. J.H. Patel Circle, Behind Geleyara Balaga Primary School, Haveri." }
        ],
        cta: {
            text: "Stop hesitating and start speaking. Join our next batch and transform your personality!",
            location: "Bankapur Branch"
        }
    }
];

export const WHY_CHOOSE_US = [
    {
        title: "Expert Instruction",
        desc: "Led by Jayalakshmi, a Senior Mathematics Lecturer with M.Sc Mathematics.",
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

export const GALLERY_IMAGES = [
    { src: "https://picsum.photos/seed/class1/600/400", category: "Classroom" },
    { src: "https://picsum.photos/seed/class2/600/400", category: "Events" },
    { src: "https://picsum.photos/seed/class3/600/400", category: "Classroom" },
    { src: "https://picsum.photos/seed/class4/600/400", category: "Competitions" },
    { src: "https://picsum.photos/seed/class5/600/400", category: "Students" },
    { src: "https://picsum.photos/seed/class6/600/400", category: "Events" },
    { src: "https://picsum.photos/seed/class7/600/400", category: "Competitions" },
    { src: "https://picsum.photos/seed/class8/600/400", category: "Classroom" },
    { src: "https://picsum.photos/seed/class9/600/400", category: "Students" },
];

export const GALLERY_CATEGORIES = ["All", "Classroom", "Events", "Competitions", "Students"];
