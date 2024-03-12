//A component responsible for fetching and displaying a list of portfolio items
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllPortfolioItems } from "../APIManagers/PortfolioItemViewManager";
import PortfolioItem from "./PortfolioItem";



const PortfolioItemList = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();

  const updatePortfolioItemsState = () => {
    return getAllPortfolioItems()
      .then((portfolioItemArray) => {
        setPortfolioItems(portfolioItemArray);
      })
      .catch((error) => {
        console.error("Error fetching portfolio items:", error);
        
      });
  };

  useEffect(() => {
    updatePortfolioItemsState();
  }, []);

  const handleAddNewPortfolioItems = () => {
    navigate("/create/new/portfolioItem");
  };

  const handleEdit = (portfolioItemId) => {
    navigate(`/portfolioItem/edit/${portfolioItemId}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <Button onClick={handleAddNewPortfolioItems} className="mb-4">
            Add New Portfolio Item
          </Button>
          {portfolioItems.map((portfolioItem) => (
            <PortfolioItem
              key={portfolioItem.id}
              portfolioItem={portfolioItem}
              onEdit={handleEdit} // Pass handleEdit as a prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemList;