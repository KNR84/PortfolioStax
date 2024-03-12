// PortfolioList: http://localhost:3000/portfolios     
//A component responsible for fetching and displaying a list of portfolios. This component renders multiple instances of the PortfolioItem component.
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllPortfolios } from "../APIManagers/PortfolioViewManager";
import Portfolio from "./Portfolio";

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();

  const updatePortfoliosState = () => {
    return getAllPortfolios()
      .then((portfolioArray) => {
        setPortfolios(portfolioArray);
      })
      .catch((error) => {
        console.error("Error fetching portfolios:", error);
        // Handle error accordingly
      });
  };

  useEffect(() => {
    updatePortfoliosState();
  }, []);

  const handleAddNewPortfolio = () => {
    navigate("/create-new-portfolio");
  };

  const handleEdit = (portfolioId) => {
    navigate(`/portfolios/edit/${portfolioId}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <Button onClick={handleAddNewPortfolio} className="mb-4">
            Add New Portfolio
          </Button>
          {portfolios.map((portfolio) => (
            <Portfolio
              key={portfolio.id}
              portfolio={portfolio}
              onEdit={handleEdit} // Pass handleEdit as a prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;


