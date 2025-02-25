import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import google from "./../images/Placements/google.jpg";
import microsoft from "./../images/Placements/pngwing.com.png";
import infosys from "./../images/Placements/pngwing.com (3).png";
import tcs from "./../images/Placements/tcs.png";

const Placements = () => {
    const [count, setCount] = useState(0); // Start from 0

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS animations

        let target = 2500; // Final number
        let speed = 5; // Speed of counting (lower is faster)

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= target) {
                    clearInterval(interval); // Stop counting
                    return target;
                }
                return prev + 10; // Increment by 10
            });
        }, speed);

        return () => clearInterval(interval); // Cleanup
    }, []);

    const companies = [
        { name: "Google", logo: google },
        { name: "Microsoft", logo: microsoft },
        { name: "Amazon", logo: microsoft },
        { name: "Infosys", logo: infosys },
        { name: "TCS", logo: tcs }
    ];

    return (
        <div className="placements-page">
            <div className="placements-container">
                {/* Full-Screen Background Image with Overlay */}
                <div className="hero-banner">
                    <div className="overlay">
                        <h1 data-aos="fade-up">Your Career Starts Here: Explore Our Placement Records</h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            Our college has a strong placement record, with students placed in top companies worldwide.
                            Explore our recruitment partners and success stories!
                        </p>
                    </div>
                </div>
            </div>

            <div className="placement-container">
                <h2 className="placement-title" data-aos="fade-right">
                    Our Placement Success
                </h2>
                <p className="placement-description" data-aos="fade-right" data-aos-delay="200">
                    Students from this institution have been successfully placed in renowned companies across the globe
                </p>
                <div className="placement-stats" data-aos="zoom-in">
                    {count}+
                </div>
                <p className="placement-description" data-aos="fade-left" data-aos-delay="200">
                    Students Successfully Placed
                </p>
            </div>

            <div className="companies-section">
                <h2 data-aos="fade-up">Our Recruiters</h2>
                <div className="company-logos">
                    {companies.map((company, index) => (
                        <div key={index} className="company" data-aos="flip-up" data-aos-delay={index * 100}>
                            <img src={company.logo} alt={company.name} />
                            <p>{company.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Placements;
