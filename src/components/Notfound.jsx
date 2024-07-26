import React from 'react';
import '../index.css'; // Make sure to create this CSS file

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <div className="error-message">Oops! Page Not Found</div>
      <div className="animation-wrapper">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <a href="/users" className="home-link">Back to Home</a>
    </div>
  );
};

export default NotFoundPage;
