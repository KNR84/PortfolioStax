//API manager to get, edit and get by student id portfolios for the ViewMyPortfolio page

const baseUrl = '/api/Portfolio';

// Function to fetch all portfolios
export const getAllPortfolios = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
};

// Function to add a portfolio
export const addPortfolio = (singlePortfolio) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePortfolio),
  });
};

// Function to edit a portfolio
export const editPortfolio = (portfolio) => {
  return fetch(`${baseUrl}/${portfolio.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(portfolio)
  });
};

// Function to get a portfolio by student id
export const getPortfolioByStudentId = (id) => {
  return fetch(`${baseUrl}/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
};

