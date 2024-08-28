
import { useState } from 'react';
import multi from '../images/multi.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="container mx-auto  pt-4 md:p-10 lg:p-20 bg-gradient-to-r from-[#f7abab] via-[#facbf1] to-[#ffd2d2] text-gray-100 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left space-y-6 text-black">
                    <h1 className="text-3xl font-extrabold mb-6 leading-tight tracking-wide text-shadow-md">
                        Empowering Education Through Video Translation
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 font-bold text-shadow-sm">
                        Our platform specializes in translating educational videos from English or any Indian language to other Indian languages, ensuring that students across India have access to quality education in their native language.
                    </p>
                    <p className="text-lg leading-relaxed mb-4 font-bold text-shadow-sm">
                        By breaking language barriers, we make learning more inclusive and accessible for students from diverse linguistic backgrounds.
                    </p>
                    <p className="text-lg leading-relaxed mb-4 font-bold text-shadow-sm">
                        Start translating educational videos today and contribute to a brighter, more inclusive future for students in India.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Link to="/Translate"><button
                            className={`bg-purple-800 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 transform ${hovered ? 'scale-105' : ''}`}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            Translate Now
                        </button></Link>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <img 
                        src={multi} 
                        alt="Illustration of educational video translation" 
                        className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
