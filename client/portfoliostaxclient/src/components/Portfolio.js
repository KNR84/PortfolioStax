import React from 'react';

function Portfolio({ portfolio }) {
  console.log('Portfolio:', portfolio); // Log the portfolio object
  return (
    <div>
      <h3>Portfolio ID: {portfolio.id}</h3>
      <p>Start Year: {portfolio.startYear}</p>
      <p>Finish Year: {portfolio.finishYear}</p>
      <p>Student ID: {portfolio.studentId}</p>
      {/* Render other portfolio details as needed */}
    </div>
  );
}

export default Portfolio;
