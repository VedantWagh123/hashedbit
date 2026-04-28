import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">MovieBook</h1>
          </div>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/book/:id" element={<BookingForm />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
