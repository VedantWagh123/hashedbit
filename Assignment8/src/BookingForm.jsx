import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from './movies';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we'd send this to a backend
    // For now, we'll pass the data via state to the confirmation page
    navigate('/confirmation', { state: { ...formData, movieTitle: movie.title } });
  };

  return (
    <div className="booking-form-container">
      <div className="form-card">
        <h1>Booking for: {movie.title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
