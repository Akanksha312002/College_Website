import React from "react";
import "../Styles/KeyBuildings.css";
import img1 from "../images/CampusFacilities/buildingA.jpeg"
import img2 from "../images/CampusFacilities/buildingB.jpeg"
import img3 from "../images/CampusFacilities/buildingC.jpg"
import img4 from "../images/CampusFacilities/buildingD.jpg"
import img5 from "../images/CampusFacilities/buildingE.jpeg"
import img6 from "../images/CampusFacilities/stadium.jpeg"
import img7 from "../images/CampusFacilities/auditorium.webp"
import img8 from "../images/CampusFacilities/boyshostel.jpeg"
import img9 from "../images/CampusFacilities/girlshostel.png"



const buildings = [
  { name: "'A' BUILDING", image: img1 },
  { name: "'B' BUILDING", image: img2 },
  { name: "'C' BUILDING", image: img3 },
  { name: "'D' BUILDING", image: img4 },
  { name: "'E' BUILDING", image:img5 },
  { name: "INDOOR STADIUM", image: img6 },
  { name: "AUDITORIUM", image: img7 },
  { name: "BOYS HOSTEL", image: img8 },
  { name: "GIRLS HOSTEL", image: img9 },


];

const KeyBuildings = () => {
  return (
    <div className="key-buildings-container">
      <h2 className="key-buildings-title">Academic Buildings And Environment</h2>
      <div className="buildings-grid">
        {buildings.map((building, index) => (
          <div key={index} className="building-card">
            <img src={building.image} alt={building.name} />
            <div className="building-name">{building.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBuildings;
