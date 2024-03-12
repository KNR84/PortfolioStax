// for the view my portfolioItems page this module matches the functionality of Category.js in Tabloid it renders a card displaying the portfolio items of a student with options to edit or delete them. It's designed to be reusable and can be used wherever individual portfolio items need to be displayed with edit and delete functionalities.

import React from "react";
import { Card, CardBody, Button } from "reactstrap";

export const PortfolioItem = ({ portfolioItem, onEdit, onDelete }) => {
  return (
    <Card className="m-4">
      <CardBody>
        <p>
          <h5 to={`/portfolioItems/edit${portfolioItem.id}`}>
          <strong>{portfolioItem.title}</strong>
          </h5>
          <span>{`Item Type: ${portfolioItem.itemType}`}</span><br />
          <span>{`Completed Date: ${portfolioItem.completedDateTime}`}</span><br />
          <span>{`Description: ${portfolioItem.description}`}</span><br />
          <span>{`File Path: ${portfolioItem.filePath}`}</span><br />
        </p>
        <Button onClick={() => onEdit(portfolioItem.id)}>Edit</Button>
        <span style={{ margin: '0 5px' }}></span>
        <Button onClick={() => onDelete(portfolioItem.id)} color="danger">Delete</Button> 
      </CardBody>
    </Card>
  );
};

export default PortfolioItem;