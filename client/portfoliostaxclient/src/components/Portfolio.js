import React, { useState, useEffect } from 'react';
import { getPortfolioYears } from '../APIManagers/PortfolioManager';

const PortfolioYearSelector = ({ studentId, onSelect }) => {
    const [selectedYear, setSelectedYear] = useState('');
    const [portfolioYears, setPortfolioYears] = useState([]);

    useEffect(() => {
        console.log("Student ID in useEffect:", studentId);
        getPortfolioYears(studentId)
            .then(years => setPortfolioYears(years))
            .catch(error => console.error('Error fetching portfolio years:', error));
    }, [studentId]);

    const generateYearRange = (startYear) => {
        return `${startYear}-${startYear + 1}`;
    };

    const handleSelectChange = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
        onSelect(selectedYear);
    };

    return (
        <div style={{ backgroundColor: '#86c232', minHeight: '100vh', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <label htmlFor="portfolioYear" style={{ marginRight: '10px' }}>Select Portfolio Year:</label>
                <select id="portfolioYear" value={selectedYear} onChange={handleSelectChange} style={{ width: '200px' }}>
                    <option value="">Select Year</option>
                    {portfolioYears.map((year) => (
                        <option key={year} value={year}>{generateYearRange(year)}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default PortfolioYearSelector;
