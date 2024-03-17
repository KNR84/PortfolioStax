// this component provides a form for users to add a new student. It captures the input data, sends it to the server via a POST request, and updates the UI with the new student upon successful addition

import { useState } from "react";
import { addStudent } from "../APIManagers/StudentViewManager";
import { useNavigate } from 'react-router-dom'
import './Form.css';


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
        <div className="full-page-container"> {/* Wrap the form in a container */}
        <div className="header">
              <br></br>
              <br></br>
                <h2>Add a new Student here:</h2>
                <p>This page serves as a hub for seamlessly adding multiple students to your account, enhancing the management and organization of your educational endeavors. We recognize the significance of efficiently documenting and tracking each student's academic journey.

Adding new students to your account is straightforward and user-friendly. Simply provide essential details such as the student's firt and last name and their grade level and we will do the rest. Each addition contributes to a comprehensive roster, enabling you to manage and monitor the progress of every student under your care.

Your account isn't just a list of names; it's a dynamic reflection of your commitment to education and the growth of each individual student. With each new addition, you're building a stronger foundation for their success and creating a supportive environment for learning.

We appreciate the opportunity to be a part of your educational journey. Together, let's empower students to reach their full potential and celebrate their achievements along the way.</p>

            </div>
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
            <button onClick={(clickEvent) => clickTheSaveButton(clickEvent)} className="btn btn-primary">Submit</button>
        </form>
        </div>
    </>
);
};