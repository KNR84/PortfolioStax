// this component fetches student details based on the id parameter from the URL, allows users to edit the student information, and saves the changes back to the server when the "Save" button is clicked

import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent, getStudentById } from "../APIManagers/StudentViewManager";

export const EditStudent = () => {
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        gradeLevel: "",
        parentId: 0
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getStudentById(id)
            .then((data) => {
                setStudent(data);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        editStudent(student)
            .then(() => {
                navigate("/student/list"); 
            })
            .catch((error) => {
                console.error("Error editing student:", error);
                
            });
    };

    return (
        <Container>
            <InputGroup>
                <Input
                    placeholder='First Name'
                    value={student.firstName}
                    onChange={(e) => {
                        const copy = { ...student };
                        copy.firstName = e.target.value;
                        setStudent(copy);
                    }}
                />
            </InputGroup>
            <InputGroup>
                <Input
                    placeholder='Last Name'
                    value={student.lastName}
                    onChange={(e) => {
                        const copy = { ...student };
                        copy.lastName = e.target.value;
                        setStudent(copy);
                    }}
                />
             </InputGroup>
             <InputGroup>
                <Input
                    placeholder='Grade Level'
                    value={student.gradeLevel}
                    onChange={(e) => {
                        const copy = { ...student };
                        copy.gradeLevel = e.target.value;
                        setStudent(copy);
                    }}
                />
             </InputGroup>
             <Button color='primary' onClick={(e) => handleSubmit(e)}>
                Save
            </Button>
        </Container>
    );
};




