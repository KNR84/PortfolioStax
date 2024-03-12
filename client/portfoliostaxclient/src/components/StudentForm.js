// this component provides a form for users to add a new student. It captures the input data, sends it to the server via a POST request, and updates the UI with the new student upon successful addition

import { useState } from "react";
import { addStudent } from "../APIManagers/StudentViewManager";
import { useNavigate } from 'react-router-dom'


export const StudentForm = () => {

    const [newStudent, setNewStudent] = useState({
        firstName: "",
        lastName: "",
        gradeLevel: "",
        parentId: 0
    });

//use this structure to provide user information for id's in a table
const userObject = localStorage.getItem("userProfile")
const parsedUser = JSON.parse(userObject)

const navigate = useNavigate()
  
    const clickTheSaveButton = (e) => {
        e.preventDefault()

        const newStudentToSendToAPI = {
            parentId: parsedUser.id,
            FirstName: newStudent.firstName,
            LastName: newStudent.lastName,
            GradeLevel: newStudent.gradeLevel
        }

        addStudent(newStudentToSendToAPI)
        .then(setNewStudent({
            firstName: "",
            lastName: "",
            gradeLevel: ""
        })).then(() => navigate("/student/list"))
    }

    return (
        <>
        <form className="portfolio-form">
            <fieldset>
                <div className="form-group">
                    <h3><b><label htmlFor="firstName">Student's First Name:</label></b></h3>
                    <input
                        type="text"
                        id="firstName"
                        value={newStudent.firstName}
                        onChange={(event) => {
                            const copy = { ...newStudent };
                            copy.firstName = event.target.value;
                            setNewStudent(copy);
                        }}
                    />
                </div>
                <div className="form-group">
                    <h3><b><label htmlFor="lastName">Student's Last Name:</label></b></h3>
                    <input
                        type="text"
                        id="lastName"
                        value={newStudent.lastName}
                        onChange={(event) => {
                            const copy = { ...newStudent };
                            copy.lastName = event.target.value;
                            setNewStudent(copy);
                        }}
                    />
                </div>
                <div className="form-group">
                    <h3><b><label htmlFor="gradeLevel">Student's Grade Level:</label></b></h3>
                    <input
                        type="text"
                        id="gradeLevel"
                        value={newStudent.gradeLevel}
                        onChange={(event) => {
                            const copy = { ...newStudent };
                            copy.gradeLevel = event.target.value;
                            setNewStudent(copy);
                        }}
                    />
                </div>
            </fieldset>
            <br />
            <button onClick={(clickEvent) => clickTheSaveButton(clickEvent)} className="btn btn-primary">Submit New Portfolio</button>
        </form>
    </>
);
};