// for the view my portfolios page this module matches the functionality of Category.js in Tabloid it renders a card displaying the name of a portfolio item with options to edit or delete it. It's designed to be reusable and can be used wherever individual portfolio items need to be displayed with edit and delete functionalities.

import React from "react";
import { Card, CardBody, Button } from "reactstrap";


const Portfolio = ({ portfolio, onEdit, onSelect }) => {
  return (
    <Card className="m-4" key={portfolio.id}>
      <CardBody>
        <p><strong>Start Year:</strong> {portfolio.startYear}</p>
        <p><strong>Finish Year:</strong> {portfolio.finishYear}</p>
        <span style={{ margin: '0 5px' }}></span>
        <Button onClick={() => onEdit(portfolio.id)}>Edit</Button>
        <span style={{ margin: '0 5px' }}></span>
        <Button onClick={() => onSelect(portfolio.id)}>Select</Button>
      </CardBody>
    </Card>
  );
};

export default Portfolio;

