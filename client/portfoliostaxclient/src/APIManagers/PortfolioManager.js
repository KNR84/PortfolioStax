// PortfolioManager.js
import React, { useState, useEffect } from 'react';
import PortfolioDropdown from './PortfolioDropdown';
import PortfolioList from './PortfolioList';

function PortfolioManager() {
  const [selectedYearRange, setSelectedYearRange] = useState('');
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    // Fetch portfolio items based on the selected year range
    fetchPortfolioItems();
  }, [selectedYearRange]);

  const fetchPortfolioItems = async () => {
    try {
      const response = await fetch(`/api/portfolio?yearRange=${selectedYearRange}`);
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio items');
      }
      const data = await response.json();
      setPortfolioItems(data);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
    }
  };

  const handleYearRangeChange = (yearRange) => {
    setSelectedYearRange(yearRange);
  };

  return (
    <div>
      <h1>Portfolio Manager</h1>
      <PortfolioDropdown onSelectYearRange={handleYearRangeChange} />
      <PortfolioList portfolioItems={portfolioItems} />
    </div>
  );
}

export default PortfolioManager;
