import React from 'react'
import "../../src/Styles/HomePage.css"

const Department = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Explore Our College Departments</h1>
        <p>Find the perfect course for your future!</p>
      </section>
      
      <div className="container mt-5">
        <h2 className="text-center">Our Departments</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Computer Science"/>
              <h5>Computer Science</h5>
              <p>Learn programming, AI, and software development with expert faculty.</p>
              <a href="#" className="btn btn-light">Learn More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Commerce"/>
              <h5>Commerce</h5>
              <p>Develop business acumen and financial expertise for a successful career.</p>
              <a href="#" className="btn btn-light">Learn More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Arts & Humanities"/>
              <h5>Arts & Humanities</h5>
              <p>Discover creativity and cultural studies with our expert faculty.</p>
              <a href="#" className="btn btn-light">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container special-courses mt-5">
        <h2 className="text-center">Special Courses</h2>
        <div className="row mt-4 text-center">
          <div className="col-md-4">
            <div className="special-course-card">
              <h5>AI & Machine Learning</h5>
              <p>Advance your career with cutting-edge AI and ML technologies.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="special-course-card">
              <h5>Cyber Security</h5>
              <p>Learn how to protect digital assets and fight cyber threats.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="special-course-card">
              <h5>Data Science</h5>
              <p>Master data analysis and visualization for informed decision-making.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container mt-5">
        <h2 className="text-center">Our Faculty</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="https://via.placeholder.com/150" alt="Faculty 1"/>
              <h5>Dr. John Doe</h5>
              <p>Head of Computer Science</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="https://via.placeholder.com/150" alt="Faculty 2"/>
              <h5>Dr. Jane Smith</h5>
              <p>Head of Commerce</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="https://via.placeholder.com/150" alt="Faculty 3"/>
              <h5>Dr. Emily Johnson</h5>
              <p>Head of Arts & Humanities</p>
            </div>
          </div>
        </div>
      </div>
    
      <div className="text-center mt-5 mb-4">
        <h3>Ready to Join Us?</h3>
        <a href="#" className="btn btn-success btn-lg">Apply Now</a>
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  )
}

export default Department