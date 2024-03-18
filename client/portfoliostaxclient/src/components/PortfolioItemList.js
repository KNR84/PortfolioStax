// //after completing crud
// //after refactor and styling 
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deletePortfolioItem, getPortfolioItemByPortfolioId } from "../APIManagers/PortfolioItemViewManager";
import PortfolioItem from "./PortfolioItem";
import "./PortfolioItemList.css"; // Import CSS file for styling

function PortfolioItemList() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();
  const { id: portfolioId } = useParams();

  const getPortfolioItems = () => {
    getPortfolioItemByPortfolioId(portfolioId).then((allPortfolioItems) => setPortfolioItems(allPortfolioItems));
  };


  const updatePortfolioItemsState2 = () => {
    return getPortfolioItemByPortfolioId (portfolioId)
      .then((portfolioItemArray) => {
        setPortfolioItems(portfolioItemArray);
      })
      .catch((error) => {
        console.error("Error fetching portfolio items:", error);
      });
  };

  useEffect(() => {
    updatePortfolioItemsState2();
  }, [portfolioId]);

  const handleAddNewPortfolioItems = () => {
    navigate(`/create/new/portfolioItem/${portfolioId}`);
  };

  const handleEdit = (portfolioItemId) => {
    navigate(`/portfolioItem/edit/${portfolioId}/${portfolioItemId}`);
  };

  const handleSelect = (portfolioItemId) => {
    navigate(`/upload/file/${portfolioId}/${portfolioItemId}`);
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
    <div className="full-page-container">
      <div className="header">
      <br></br>
              <br></br>
                <h2>Add your items:</h2>
                <p>Here, you can view, edit, and remove portfolio items from your child's portfolio. Showcase all their hard work with our easy-to-use application.</p>
      </div>
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
    </div>
  );
}

export default PortfolioItemList;















