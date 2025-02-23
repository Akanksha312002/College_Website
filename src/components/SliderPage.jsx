
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../image/slide1.jpeg';
import slide2 from '../image/slide2.jpeg';
import slide3 from '../image/slide3.jpeg';
import card1 from '../image/card1.png';
import card2 from '../image/card2.png';
import card3 from '../image/card3.png';
import card4 from '../image/card4.png';



const IndividualIntervalsExample = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ height: '70vh' }}
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ height: '70vh' }}
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '70vh' }}
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <IndividualIntervalsExample />
      <hr className="section-divider" />

      {/* Move the Who We Are section here */}
      <section className="who-we-are">
        <div className="text">
          <h1>Who We Are?</h1>
          <p>
            The college was established in June 1954 with only 54 students in a single Arts Faculty.
            Over the years, it has flourished to become a multi-faculty institution with 30 departments,
            numerous support services, and interdisciplinary activities. The campus spans about 6.8 hectares.
            The total student strength of Senior and Junior College is more than 12,500, with above 400 teaching
            and non-teaching staff. It is one of the biggest and most well-known multi-faculty colleges in the jurisdiction
            of Shivaji University, Kolhapur.
          </p>
          <p>Ours is the first college in India opened at the Tehsil place. 
            Our students hail from 350 distant villages. 
            More than 95% students come from rural area. 
            The objective of the founder of our Sanstha, Padmabhushan Dr. Karmaveer Bhaurao Patil was to impart education to the poorest of the poor through self-help; 
            irrespective of caste, creed and religion. 
            </p>
        </div>
        <img src={slide1} alt="College" />
      </section>

      {/* The cards slider card section */}
      <section className="features-section">
        <div className="title-div">
          <h3>The Spirit Of SGM</h3>
          <p>Achieve Your Dreams</p>
        </div>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              <div className="col-md-3 card-box-slider">
                <Card className="card">
                  <Card.Img variant="top" src={card1} />
                  <Card.Body>
                    <Card.Title>Our Courses</Card.Title>
                    <Card.Text>
                      Every course related to your interest can be found here.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-box-slider">
                <Card className="card">
                  <Card.Img variant="top" src={card2} />
                  <Card.Body>
                    <Card.Title>Price Affordability</Card.Title>
                    <Card.Text>
                      We provide quality over quantity.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-box-slider">
                <Card className="card">
                  <Card.Img variant="top" src={card3} />
                  <Card.Body>
                    <Card.Title>Campus Drive</Card.Title>
                    <Card.Text>
                      Our students frequently attend interviews through campus drives.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 card-box-slider">
                <Card className="card">
                  <Card.Img variant="top" src={card4} />
                  <Card.Body>
                    <Card.Title>Online Courses</Card.Title>
                    <Card.Text>
                      Access a variety of online courses now.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderPage;
