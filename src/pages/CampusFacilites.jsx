import React from 'react';
import '../../src/App.css';
import Carousel from 'react-bootstrap/Carousel';



import slider4 from "./../images/CampusFacilities/slid-img4.jpg"
import slider5 from "./../images/CampusFacilities/slid_img5.jpg"
import slider7 from "./../images/CampusFacilities/slid-img7.jpg"

import library from "./../images/CampusFacilities/library.jpg"
import sport from "./../images/CampusFacilities/sport.jpg"
import hostel from "./../images/CampusFacilities/hostel.jpeg"
import canteen from "./../images/CampusFacilities/canteen.jpg"
import techlab from "./../images/CampusFacilities/techcentre.png"
import auditorium from "./../images/CampusFacilities/auditorium.jpg"
import building from "./../images/CampusFacilities/buildingB.jpeg"
import research from "./../images/CampusFacilities/research_lab.jpg"
import laboratory from "./../images/CampusFacilities/laboratory.jpeg"
const facilitiesData = [
  { id: 1, image: library, title: 'Library', description: 'A well-equipped library with digital and print resources.' },
  { id: 2, image: sport, title: 'Sports Complex', description: 'State-of-the-art sports facilities.' },
  { id: 3, image: hostel, title: 'Hostel', description: 'Comfortable and secure accommodation.' },
  { id: 4, image: canteen, title: 'Cafeteria', description: 'Variety of food options available.' },
  { id: 5, image: techlab, title: 'Technology Center', description: 'Empowering innovation and learning with cutting-edge technology and resources' },
  { id: 6, image: auditorium, title: 'Grand Auditorium', description: 'Our Grand Auditorium is a hub for captivating performances and impactful events' },
  { id: 8, image: research, title: 'Research Facilities', description: 'Advanced research labs and centers that support cutting-edge research and innovation across various disciplines.' },
  { id: 9, image: laboratory, title: 'Laboratories', description: 'State-of-the-art laboratories equipped with advanced technology for hands-on learning and research.' },

];

const CampusFacilites = () => {
  return (
    <div className='page-background'>

      <div className="facilities-container">
        <h1>Campus Facilities</h1>
        <p>Explore the top-class facilities available on our campus.</p>
        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="facility-card">
              <img src={facility.image} alt={facility.title} />
              <div className="facility-info">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  )
}

export default CampusFacilites
