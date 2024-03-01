import React from "react";
import { Card, CardBody, Button } from "reactstrap";


export const Portfolio = ({ portfolio }) => {
  return (
    <Card className="m-4">
      <CardBody>
        <p>
          <h5 to={`/portfolio/edit${portfolio.id}`}>
            <strong>{portfolio.name}</strong>
          </h5>
        </p>
       
       </CardBody>
    </Card>
  );
};

