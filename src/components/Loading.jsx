import React from 'react';
import '../index.css'; // Make sure to create this CSS file

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingPage;
