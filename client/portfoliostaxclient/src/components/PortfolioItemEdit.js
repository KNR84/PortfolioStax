// this component fetches portfolioItems based on the id parameter from the URL, allows users to edit the portfolioItem information, and saves the changes back to the server when the "Save" button is clicked

import { useEffect, useState } from "react";
import { Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editPortfolioItem, getPortfolioItemById } from "../APIManagers/PortfolioItemViewManager";
import './Form.css';

export const EditPortfolioItem = () => {
    const [portfolioItem, setPortfolioItem] = useState({
        itemType: "",
        title: "",
        description: "",
        studentId: 0,
        portfolioId: 0,
        filePath: "",
    });

    const navigate = useNavigate();
    const {portfolioId, portfolioItemId } = useParams();

    useEffect(() => {
        getPortfolioItemById(portfolioItemId)
            .then((data) => {
                setPortfolioItem(data);
            });
    }, [portfolioItemId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        editPortfolioItem(portfolioItem)
            .then(() => {
                navigate(`/portfolioItem/list/${portfolioId}`); // Navigate back to /portfolioItem
            })
            .catch((error) => {
                console.error("Error editing portfolio item:", error);

            });
    };


    return (
        <div className="full-page-container"> {/* Wrap the form in a container */}
        <div className="header">
              <br></br>
              <br></br>
                <h2>Add a new Student here:</h2>

            </div>

            <InputGroup>
                <Input
                    placeholder='Enter the project title here'
                    value={portfolioItem.title}
                    onChange={(e) => {
                        const copy = { ...portfolioItem };
                        copy.title = e.target.value;
                        setPortfolioItem(copy);
                    }}
                />
            </InputGroup>
            <br></br>
            <InputGroup>
                <Input
                    placeholder='Enter the subject here'
                    value={portfolioItem.itemType}
                    onChange={(e) => {
                        const copy = { ...portfolioItem };
                        copy.itemType = e.target.value;
                        setPortfolioItem(copy);
                    }}
                />
            </InputGroup>
            <br></br>
            <InputGroup>
                <Input
                    placeholder='A description of what I learned'
                    value={portfolioItem.description}
                    onChange={(e) => {
                        const copy = { ...portfolioItem };
                        copy.description = e.target.value;
                        setPortfolioItem(copy);
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
