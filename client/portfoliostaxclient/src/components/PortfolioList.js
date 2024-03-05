// PortfolioList.js
import React from 'react';
import Portfolio from './Portfolio';


function PortfolioList({ portfolioItems }) {
  console.log(portfolioItems); // Log the portfolioItems array to the console
  return (
    <div>
      <h2>Portfolio List</h2>
      <ul>
        {portfolioItems.map((portfolio) => (
          <li key={portfolio.id}>
            <Portfolio portfolio={portfolio} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioList;
