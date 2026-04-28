import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from './movies';
import './MovieList.css';

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h1>Now Showing</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
