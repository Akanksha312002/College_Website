import React, { useState } from "react";
import Modal from "react-modal";
import "../Styles/Gallery.css";

// Campus Images
const campusImages = [
  { src: "/images/campus1.jpeg", alt: "Campus View 1" },
  { src: "/images/campus2.jpeg", alt: "Campus View 2" },
  { src: "/images/lab.jpeg", alt: "Computer Lab" },
  { src: "/images/play.jpg", alt: "Play Ground" },
  { src: "/images/main.jpg", alt: "Main Building" },
];

// Event Images
const eventImages = [
  { src: "/images/event1.jpg", alt: "Cultural Fest" },
  { src: "/images/event2.jpg", alt: "Sports Event" },
  { src: "/images/DBuilding.jpg", alt: "D Building" },
];

// Videos
const videos = [
  { src: "/images/sgm.mp4", title: "Campus Tour" },
  { src: "/images/sgm3.mp4", title: "Event Highlights" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
     
      <h1 className="gallery-title">🎓 Gallery & Photo Tour</h1>

      {/* Campus Tour Section */}
      <h2 className="gallery-section-title">🏛️ Campus Tour</h2>
      <div className="gallery-grid">
        {campusImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-image"
              onClick={() => setSelectedImage(img.src)}
            />
            <p className="image-caption">{img.alt}</p>
          </div>
        ))}
      </div>

      {/* Event Section */}
      <h2 className="gallery-section-title">🎭 Past Events</h2>
      <div className="gallery-grid">
        {eventImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-image"
              onClick={() => setSelectedImage(img.src)}
            />
            <p className="image-caption">{img.alt}</p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <h2 className="gallery-section-title">📹 Event Highlights</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <video controls className="gallery-video">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">{video.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Images */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="modal"
          overlayClassName="overlay"
        >
          <img src={selectedImage} alt="Selected" className="modal-image" />
          <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
        </Modal>
      )}
     
    </div>
    
  );
};

export default Gallery;