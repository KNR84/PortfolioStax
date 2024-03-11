// for the view my portfolios page this module matches the functionality of Category.js in Tabloid it renders a card displaying the name of a portfolio item with options to edit or delete it. It's designed to be reusable and can be used wherever individual portfolio items need to be displayed with edit and delete functionalities.

import React, { useState, useEffect } from "react";
import { Card, CardBody, Button } from "reactstrap";
import axios from 'axios';
import { Link } from "react-router-dom";


const Portfolio = ({ portfolio, onEdit, onDelete }) => {
    return (
      <Card className="m-4">
        <CardBody>
          <p>
            <Link to={`/portfolios/edit/${portfolio.id}`}>
              <strong>{portfolio.title}</strong>
            </Link>
          </p>
          <Button onClick={() => onEdit(portfolio.id)}>Edit</Button>
          <span style={{ margin: '0 5px' }}></span>
          <Button onClick={() => onDelete(portfolio.id)} color="danger">Delete</Button> 
        </CardBody>
      </Card>
    );
  };
  
  export default Portfolio;
