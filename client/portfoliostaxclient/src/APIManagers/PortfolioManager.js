// Portfolio API manager
const apiUrl = "https://localhost:5001";

export const getPortfolioYears = (studentId) => {
  return fetch(`${apiUrl}/api/Portfolio/${studentId}/Years`)
    .then((response) => response.json());
};


