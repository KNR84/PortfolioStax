 //A component responsible for fetching and displaying a list of portfolios. This component renders multiple instances of the PortfolioItem component.
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getPortfolioByStudentId} from "../APIManagers/PortfolioViewManager";
import Portfolio from "./Portfolio";

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const updatePortfoliosState = () => {
    return getPortfolioByStudentId(id)
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
  }, [id]);

  const handleAddNewPortfolio = () => {
    navigate("/create/new/portfolio");
  };

  const handleEdit = (portfolioId) => {
    navigate(`/portfolios/edit/${portfolioId}`);
  };
  const handleSelect = (portfolioId) => {
    navigate(`/portfolioItem/list/${portfolioId}`);
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
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;


