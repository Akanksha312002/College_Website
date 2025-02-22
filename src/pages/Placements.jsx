import React, { useState, useEffect } from "react";

import google from "./../images/Placements/google.jpg";
import microsoft from "./../images/Placements/pngwing.com.png";
import infosys from "./../images/Placements/pngwing.com (3).png";
import tcs from "./../images/Placements/tcs.png";

import { Briefcase, CheckCircle } from "lucide-react";

const Placements = () => {
    const [count, setCount] = useState(0); // Start from 0

    useEffect(() => {
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
                        <h1>Your Career Starts Here: Explore Our Placement Records</h1>
                        <p>
                            Our college has a strong placement record, with students placed in top companies worldwide.
                            Explore our recruitment partners and success stories!
                        </p>
                    </div>
                </div>
            </div>

            <div className="placement-container">
                <h2 className="placement-title">
                    <i className="fas fa-briefcase"></i> Our Placement Success
                </h2>
                <p className="placement-description">
                Students from this institution have been successfully placed in renowned companies across the globe                </p>
                <div className="placement-stats">{count}+</div>
                <p className="placement-description">Students Successfully Placed</p>
                <i className="fas fa-check-circle placement-check"></i>
            </div>

            <div className="companies-section">
                <h2>Our Recruiters</h2>
                <div className="company-logos">
                    {companies.map((company, index) => (
                        <div key={index} className="company">
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
