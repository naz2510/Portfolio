import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/user') 
      .then(response => {
        setContactInfo({ email: response.data.email, phone: response.data.phone });
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the contact info!", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Ready to get started on your project? Contact me now for a free consultation.</p>

      <div className="contact-info">
        <div className="contact-method">
          <strong>Email: </strong>
          <a href={`mailto:${contactInfo.email}`} className="contact-email">
            {loading ? 'Loading...' : contactInfo.email || 'N/A'}
          </a>
        </div>
        <div className="contact-method">
          <strong>Phone: </strong>
          <a href={`tel:${contactInfo.phone}`} className="contact-phone">
            {loading ? 'Loading...' : contactInfo.phone || 'N/A'}
          </a>
        </div>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Send a message to get started</label>
          <textarea placeholder="Enter your message"></textarea>

          <div className="captcha">
            <input type="checkbox" /> I’m not a robot
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
