// PortfolioList: A component responsible for fetching and displaying a list of portfolios. This component renders multiple instances of the PortfolioItem component.

import React, { useState, useEffect } from "react";
import { Portfolio } from "./Portfolio";
import { PortfolioForm } from "./PortfolioForm";
import { getAllPortfolios } from "../Managers/PortfolioManager"; 
import { useNavigate } from "react-router-dom";
import { getAllPortfolios } from "../APIManagers/PortfolioViewManager";

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();

  const getPortfolios = () => {
    getAllPortfolios().then((allPortfolios) => setPortfolios(allPortfolios));
  };

  const updatePortfoliosState = () => {
    return getAllPortfolios().then((portfolioArray) => {
      setPortfolios(portfolioArray);
    });
  };

  useEffect(() => {
    updatePortfoliosState();
  }, []);

  const handleEdit = (portfolioId) => {
    navigate(`/portfolios/edit/${portfolioId}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <PortfolioForm updatePortfoliosState={updatePortfoliosState} />
          {portfolios.map((portfolio) => (
            <Portfolio
              key={portfolio.id}
             portfolio={portfolio}
              onEdit={handleEdit}
             
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;

