// PortfolioManager.js

const baseUrl = '/api/Portfolio/{studentId}';


export const getPortfolioYears = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };

