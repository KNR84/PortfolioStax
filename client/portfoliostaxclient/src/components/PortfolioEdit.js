// this component fetches portfolio details based on the id parameter from the URL, allows users to edit the portfolio information, and saves the changes back to the server when the "Save" button is clicked

import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editPortfolio, getPortfolioByStudentId } from "../APIManagers/PortfolioViewManager";

export const EditPortfolio = () => {
    const [portfolio, setPortfolio] = useState({
        startYear: "",
        finishYear: ""
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
        <Container>
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
            <Button color='primary' onClick={(e) => handleSubmit(e)}>
                Save
            </Button>
        </Container>
    );
};


