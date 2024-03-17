// for the view my portfolioItems page this module matches the functionality of Category.js in Tabloid it renders a card displaying the portfolio items of a student with options to edit or delete them. It's designed to be reusable and can be used wherever individual portfolio items need to be displayed with edit and delete functionalities.
import React from "react";
import { Card, CardBody, Button } from "reactstrap";

export const PortfolioItem = ({ portfolioItem, onEdit, onDelete, onSelect }) => {
  // Function to format date in a friendlier way
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <Card className="m-4" style={{ border: "none" }}>
      <CardBody>
        <h5 to={`/portfolioItems/edit${portfolioItem.id}`}></h5>
        <p><strong>Project title: </strong>{portfolioItem.title}</p>
        <p><strong>Project subject: </strong> {portfolioItem.itemType}</p>
        <p><strong>Date completed: </strong> {formatDate(portfolioItem.completedDateTime)}</p>
        <p><strong>A description of what I learned: </strong> {portfolioItem.description}</p>
        {/* <p>File Path: {portfolioItem.filePath}</p> */}
        <Button onClick={() => onEdit(portfolioItem.id)}>Edit</Button>
        <span style={{ margin: '0 5px' }}></span>
        <Button onClick={() => onDelete(portfolioItem.id)} color="danger">Delete</Button> 
        <span style={{ margin: '0 5px' }}></span>
        <Button onClick={() => onSelect(portfolioItem.id)} color="dark">Add a photo</Button>
      </CardBody>
    </Card>
  );
};

export default PortfolioItem;


