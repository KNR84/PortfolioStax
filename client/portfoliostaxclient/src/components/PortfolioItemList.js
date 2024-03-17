//after completing crud
//after refactor and styling 
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deletePortfolioItem, getPortfolioItemById } from "../APIManagers/PortfolioItemViewManager";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioItemList.css"; // Import CSS file for styling

function PortfolioItemList() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getPortfolioItems = () => {
    getPortfolioItemById(id).then((allPortfolioItems) => setPortfolioItems(allPortfolioItems));
  };


  const updatePortfolioItemsState2 = () => {
    return getPortfolioItemById (id)
      .then((portfolioItemArray) => {
        setPortfolioItems(portfolioItemArray);
      })
      .catch((error) => {
        console.error("Error fetching portfolio items:", error);
      });
  };

  useEffect(() => {
    updatePortfolioItemsState2();
  }, [id]);

  const handleAddNewPortfolioItems = () => {
    navigate(`/create/new/portfolioItem/${id}`);
  };

  const handleEdit = (portfolioItemId) => {
    navigate(`/portfolioItem/edit/${portfolioItemId}`);
  };

  const handleSelect = (portfolioItemId) => {
    navigate(`/upload/file/${portfolioItemId}`);
  };
  

  const handleDelete = (id) => { 
    const confirmDelete = window.confirm("Are you sure you would like to delete this portfolio item?");
    if (confirmDelete) {
        // if Bad Request window.alert this category has dependencies it would go here...
      deletePortfolioItem(id).then(() => { 
        getPortfolioItems();
      });
    }
  };



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <div className="add-New-Item-Button">
          <Button onClick={handleAddNewPortfolioItems} className="mb-4">
            Add New Portfolio Item
          </Button>
          </div>
          {portfolioItems.map((portfolioItem) => (
            <div key={portfolioItem.id} className="portfolio-card">
              <div className="portfolio-details">
                <div className="portfolio-image">
                  <img
                    src={`https://localhost:5001/api/PortfolioDownload/download?portfolioItemID=${portfolioItem.id}`}
                    alt="Portfolio Item"
                  />
                </div>
                <PortfolioItem
                  portfolioItem={portfolioItem}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onSelect={handleSelect}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItemList;








