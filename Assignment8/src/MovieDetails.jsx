import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from './movies';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  const handleBookSeat = () => {
    navigate(`/book/${movie.id}`);
  };

  return (
    <div className="movie-details-container">
      <div className="details-card">
        <img src={movie.image} alt={movie.title} />
        <div className="details-info">
          <h1>{movie.title}</h1>
          <p className="description">{movie.description}</p>
          <button className="book-btn" onClick={handleBookSeat}>
            Book Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
