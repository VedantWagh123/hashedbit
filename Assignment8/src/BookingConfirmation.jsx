import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const location = useLocation();
  const { name, email, mobile, movieTitle } = location.state || {};

  // Generate a random booking ID
  const bookingId = Math.random().toString(36).substring(2, 10).toUpperCase();

  if (!name) {
    return (
      <div className="confirmation-container">
        <h2>No booking found.</h2>
        <Link to="/" className="home-link">Go to Movies</Link>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p className="booking-id">Booking ID: <span>{bookingId}</span></p>
        
        <div className="details-summary">
          <h2>Booking Details</h2>
          <p><strong>Movie:</strong> {movieTitle}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mobile:</strong> {mobile}</p>
        </div>

        <Link to="/" className="home-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
