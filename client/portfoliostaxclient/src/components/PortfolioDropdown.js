// PortfolioDropdown.js
import React from 'react';

function PortfolioDropdown({ onSelectYearRange }) {
  const yearRanges = ['2023-2024', '2022-2023', '2021-2022']; // Sample year ranges

  const handleSelectChange = (event) => {
    const selectedYearRange = event.target.value;
    onSelectYearRange(selectedYearRange);
  };

  return (
    <div>
      <label>Select Year Range:</label>
      <select onChange={handleSelectChange}>
        <option value="">Select...</option>
        {yearRanges.map((yearRange, index) => (
          <option key={index} value={yearRange}>
            {yearRange}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PortfolioDropdown;
