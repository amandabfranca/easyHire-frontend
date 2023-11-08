import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom'; 

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h2>Welcome to Easy Hire</h2>
      <div className="button-container">
        <Link to="/registration">
          <button className="register-button">Register Employee</button>
        </Link>
        <Link to="/search">
          <button className="search-button">Search Employee</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;



