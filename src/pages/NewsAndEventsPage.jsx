import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import academics1 from "./../images/NewsAndEvents/news_academics_img1.jpg";
import workshop1 from "./../images/NewsAndEvents/news_workshop_img1.jpg";
import workshop2 from "./../images/NewsAndEvents/news_workshop_img2.jpg";
import freshers1 from "./../images/NewsAndEvents/news_workshop_img3.jpg";
import workshop3 from "./../images/NewsAndEvents/news_freshers_img1.jpg";
import freshers2 from "./../images/NewsAndEvents/news_freshers_img2.jpg";
import freshers3 from "./../images/NewsAndEvents/news_freshers_img3.jpg";
import sports from "./../images/NewsAndEvents/news_sports_img1.jpg";
import sports2 from "./../images/NewsAndEvents/news_sports_img2.jpg";
import academics2 from "./../images/NewsAndEvents/news_academics_img2.jpg";
import academics3 from "./../images/NewsAndEvents/news_academics_img3.jpg";
import sports3 from "./../images/NewsAndEvents/news_sports_img3.jpg";

const newsData = [
  { id: 1, title: "Fermented Food Festival", date: "Jan 2 2024", category: "Academics", image: academics1 },
  { id: 2, title: "Workshop Conducted By Bank of Maharashtra", date: "Jan 15 2024", category: "Workshops", image: workshop1 },
  { id: 3, title: "Workshop of Commerce Department", date: "Jan 25 2024", category: "Workshops", image: workshop2 },
  { id: 4, title: "IQAC Workshop", date: "Jan 27 2024", category: "Workshops", image: workshop3 },
  { id: 5, title: "Welcome Function of MSc First Year", date: "June 25 2024", category: "Freshers", image: freshers1 },
  { id: 6, title: "Freshers Party of Bank Management", date: "June 5 2024", category: "Freshers", image: freshers2 },
  { id: 7, title: "Freshers Party of B.Com IT Department", date: "Jan 25 2024", category: "Freshers", image: freshers3 },
  { id: 8, title: "Inter College Sports Competition", date: "Sept 25 2024", category: "Athletics", image: sports },
  { id: 9, title: "NCC Training Programme", date: "Aug 25 2024", category: "Athletics", image: sports2 },
  { id: 10, title: "BBA Induction Programme", date: "July 25 2023", category: "Academics", image: academics2 },
  { id: 11, title: "Conference on Agriculture", date: "April 15 2023", category: "Academics", image: academics3 },
  { id: 12, title: "Wrestling Competition", date: "Nov 14 2023", category: "Athletics", image: sports3 },
];

const categories = ["All", "Academics", "Athletics", "Freshers", "Workshops", "Leadership", "Field Trips", "Legacy Award",
  "Testing", "Track", "Volunteer", "Fundraising", "Science", "Counselor", "Functions", "Felicitations"];

const NewsAndEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredNews = newsData.filter(
    (news) =>
      (selectedCategory === "All" || news.category === selectedCategory) &&
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="news-page">
      {/* Title Section */}
      <h1 className="main-heading" data-aos="fade-down">
        COLLEGE DIARIES : NEWS AND UPDATES
      </h1>
      <p className="para" data-aos="fade-up">
        "More Than Just Academics—Bringing You The Latest Buzz From Campus!!"
      </p>

      {/* 🔹 Flex container for sidebar and news section */}
      <div style={{ display: 'flex', gap: '20px', padding: '0 20px', background: 'linear-gradient(to left,#0A1F50,#4A60A1)' }}>
        {/* Sidebar Section */}
        <div className="sidebar" data-aos="fade-right">
          <h2>News</h2>
          <input
            type="text"
            placeholder="Keyword Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h3>Filter Articles</h3>
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Section */}
        <div className="news-container">
          <div className="news-list">
            {filteredNews.map((news, index) => (
              <div key={news.id} className="news-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={news.image} alt={news.title} />
                <h3>{news.title}</h3>
                <p>{news.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEventsPage;
