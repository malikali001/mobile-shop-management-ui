import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <h2>Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p>We're here to help you with any inquiries. Reach out to us through the details below:</p>
          <ul className="list-unstyled">
            <li><strong>Phone:</strong> +123-456-7890</li>
            <li><strong>Email:</strong> support@mobileshop.com</li>
            <li><strong>Address:</strong> 123 Mobile Shop Street, Cityname, Country</li>
          </ul>
          <div className="mt-4">
            <h3>Find Us Here</h3>
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Placeholder for Google Maps iframe */}
              <p>Map goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
