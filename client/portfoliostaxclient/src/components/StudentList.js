//A component responsible for fetching and displaying a list of students. T
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { deleteStudent, getAllStudents } from "../APIManagers/StudentViewManager";
import Student from "./Student";



const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const getStudents = () => {
    getAllStudents().then((allStudents) => setStudents(allStudents));
  };

  const updateStudentsState = () => {
    return getAllStudents()
      .then((studentArray) => {
        setStudents(studentArray);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        // Handle error accordingly
      });
  };

  useEffect(() => {
    updateStudentsState();
  }, []);

  const handleAddNewStudent = () => {
    navigate("/create/new/student");
  };

  const handleEdit = (studentId) => {
    navigate(`/students/edit/${studentId}`);
  };
  const handleSelect = (studentId) => {
    navigate(`/portfolio/list/${studentId}`);
  };

  const handleDelete = (id) => { 
    const confirmDelete = window.confirm("Are you sure you would like to delete this student?");
    if (confirmDelete) {
        // if Bad Request window.alert this category has dependencies it would go here...
      deleteStudent(id).then(() => { 
        getStudents();
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          <Button onClick={handleAddNewStudent} className="mb-4">
            Add New Student
          </Button>
          {students.map((student) => (
            <Student
              key={student.id}
              student={student}
              onEdit={handleEdit} 
              onDelete={handleDelete}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;