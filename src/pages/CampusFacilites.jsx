import React from 'react'
import NavBar from '../components/NavBar'

import Carousel from 'react-bootstrap/Carousel';



import slider4 from "./../images/slid-img4.jpg"
import slider5 from "./../images/slid_img5.jpg"
import slider7 from "./../images/slid-img7.jpg"

import library from "./../images/library.jpg"
import sport from "./../images/sport.jpg"
import hostel from "./../images/hostel.jpeg"
import canteen from "./../images/canteen.jpg"
import techlab from "./../images/techcentre.png"
import auditorium from "./../images/auditorium.jpg"
import building from "./../images/buildings.jpeg"
import research from "./../images/research_lab.jpg"
import laboratory from "./../images/laboratory.jpeg"
const facilitiesData = [
  { id: 1, image: library, title: 'Library', description: 'A well-equipped library with digital and print resources.' },
  { id: 2, image: sport, title: 'Sports Complex', description: 'State-of-the-art sports facilities.' },
  { id: 3, image: hostel, title: 'Hostel', description: 'Comfortable and secure accommodation.' },
  { id: 4, image: canteen, title: 'Cafeteria', description: 'Variety of food options available.' },
  { id: 5, image: techlab, title: 'Technology Center', description: 'Empowering innovation and learning with cutting-edge technology and resources' },
  { id: 6, image: auditorium, title: 'Grand Auditorium', description: 'Our Grand Auditorium is a hub for captivating performances and impactful events' },
  { id: 7, image: building, title: 'Academic Buildings', description: 'State-of-the-art classrooms, lecture halls, and laboratories equipped with modern technology to enhance the learning experience.' },
  { id: 8, image: research, title: 'Research Facilities', description: 'Advanced research labs and centers that support cutting-edge research and innovation across various disciplines.' },
  { id: 9, image: laboratory, title: 'Laboratories', description: 'State-of-the-art laboratories equipped with advanced technology for hands-on learning and research.' },

];

const CampusFacilites = () => {
  return (
    <div className='page-background'>
      <NavBar />

      <Carousel>
        <Carousel.Item>
          <img src={slider4} className='image1' />
          <Carousel.Caption>
            <h1 className='heading'>Our Beautiful Campus</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider5} className='image1' />
          <Carousel.Caption>
            <h3></h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider7} className='image1' />
          <Carousel.Caption>
            <h3></h3>
            <p>

            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



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
