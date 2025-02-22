import React, { useState, useEffect } from "react";

import google from "./../images/Placements/google.jpg";
import microsoft from "./../images/Placements/pngwing.com.png"
import infosys from "./../images/Placements/pngwing.com (3).png"
import tcs from "./../images/Placements/tcs.png"




const Placements = () => {
    const [placedCount, setPlacedCount] = useState(0);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < 2500) {
                count += 50; // Increment in steps
                setPlacedCount(count);
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const companies = [
        { name: "Google", logo: google},
        { name: "Microsoft", logo: microsoft},
        { name: "Amazon", logo: microsoft },
        { name: "Infosys", logo:infosys },
        { name: "TCS", logo:tcs }
    ];

    return (
        <div className="placements-page">

            
            <div className="placements-container">
                {/* Full-Screen Background Image with Overlay */}
                <div className="hero-banner">
                    <div className="overlay">
                        <h1>Welcome to Our Placements Page</h1>
                        <p>
                            Our college has a strong placement record, with students placed in top companies worldwide.
                            Explore our recruitment partners and success stories!
                        </p>
                    </div>
                </div>
            </div>
            


            <div className="hero-section">
                <div className="hero-text">
                    <h1>Placements at Our College</h1>
                    <p>Our college has an excellent track record of placements, with students being recruited by top companies worldwide.</p>
                    <div className="counter">
                        <h2>{placedCount}+</h2>
                        <p>Students Successfully Placed</p>
                    </div>
                </div>
                <img src="https://source.unsplash.com/500x300/?corporate,office" alt="Placements" className="hero-image" />
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
