// for the view my students page this module matches the functionality of Category.js in Tabloid it renders a card displaying the name of a student with options to edit or delete them. It's designed to be reusable and can be used wherever individual student items need to be displayed with edit and delete functionalities.

import React from "react";
import { Card, CardBody, Button } from "reactstrap";

export const Student = ({ student, onEdit, onDelete, onSelect }) => {
  return (
    <Card  className="m-4">
      <CardBody>
        <h5>
          <strong>{`${student.firstName} ${student.lastName}`}</strong>
        </h5>
        <p>{`Grade Level: ${student.gradeLevel}`}</p>
        <Button onClick={() => onEdit(student.id)}>Edit</Button>
        <span style={{ margin: '0 5px' }}></span>
        <Button onClick={() => onDelete(student.id)} color="danger">Delete</Button>
        <Button onClick={() => onSelect(student.id)}>Select Student</Button> 
      </CardBody>
    </Card>
  );
};
export default Student;

