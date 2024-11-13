import React, { useState } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const certificates = [
    {
      title: "Programming in Java – NPTEL (Gold + Elite, Score: 91%)",
      imgSrc: "logo/certificate_java.jpg",
    },
    {
      title: "The Joy of Computing Using Python – NPTEL (Gold + Elite, Score: 90%)",
      imgSrc: "logo/certificate_python.jpg",
    },
    {
      title: "Mastering Data Structures in C and C++ – Udemy",
      imgSrc: "logo/certificate_data_structures.jpg",
    },
    {
      title: "Google Data Analytics Professional Certificate – Coursera",
      imgSrc: "logo/certificate_data_analytics.jpg",
    },
  ];

  // Function to open the modal with the selected image
  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setModalImage(null);
  };

  return (
    <div id="certifications">
      <h2>CERTIFICATIONS</h2>
      {certificates.map((cert, index) => (
        <div className="card" key={index} onClick={() => openModal(cert.imgSrc)}>
          <h3>{cert.title}</h3>
          <img src={cert.imgSrc} alt={cert.title} className="certificate-image" />
        </div>
      ))}

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
