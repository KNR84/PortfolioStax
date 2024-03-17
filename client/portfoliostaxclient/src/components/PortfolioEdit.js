// this component fetches portfolio details based on the id parameter from the URL, allows users to edit the portfolio information, and saves the changes back to the server when the "Save" button is clicked

import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editPortfolio, getPortfolioByStudentId } from "../APIManagers/PortfolioViewManager";
import './Form.css';

export const EditPortfolio = () => {
    const [portfolio, setPortfolio] = useState({
        startYear: "",
        finishYear: "", 
        studentId: 0
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPortfolioByStudentId(id)
            .then((data) => {
                setPortfolio(data);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        editPortfolio(portfolio)
            .then(() => {
                navigate("/portfolios"); // Navigate back to /portfolios
            })
            .catch((error) => {
                console.error("Error editing portfolio:", error);
                // Handle error accordingly
            });
    };

    return (
        <div className="full-page-container"> {/* Wrap the form in a container */}
<div className="header">
              <br></br>
              <br></br>
                <h2>Edit your portfolio years here:</h2></div>
        
            <InputGroup>
                <Input
                    placeholder='Start Year'
                    value={portfolio.startYear}
                    onChange={(e) => {
                        const copy = { ...portfolio };
                        copy.startYear = e.target.value;
                        setPortfolio(copy);
                    }}
                />
            </InputGroup>
            <br></br>
            <InputGroup>
                <Input
                    placeholder='Finish Year'
                    value={portfolio.finishYear}
                    onChange={(e) => {
                        const copy = { ...portfolio };
                        copy.finishYear = e.target.value;
                        setPortfolio(copy);
                    }}
                />
            </InputGroup>
            <br></br>
            <Button color='primary' onClick={(e) => handleSubmit(e)}>
                Save
            </Button>
       
        </div>
    );
};