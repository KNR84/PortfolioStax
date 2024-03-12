// this component fetches portfolioItems based on the id parameter from the URL, allows users to edit the portfolioItem information, and saves the changes back to the server when the "Save" button is clicked

import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editPortfolioItem, getPortfolioItemById } from "../APIManagers/PortfolioItemViewManager";

export const EditPortfolioItem = () => {
    const [portfolioItem, setPortfolioItem] = useState({
        itemType: "",
        title: "",
        description: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPortfolioItemById(id)
            .then((data) => {
                setPortfolioItem(data);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        editPortfolioItem(portfolioItem)
            .then(() => {
                navigate("/portfolioItem"); // Navigate back to /portfolioItem
            })
            .catch((error) => {
                console.error("Error editing portfolio item:", error);
                
            });
    };

    return (
        <Container>
            <InputGroup>
                <Input
                    placeholder='Item Type'
                    value={portfolioItem.itemType}
                    onChange={(e) => {
                        const copy = { ...portfolioItem };
                        copy.itemType = e.target.value;
                        setPortfolioItem(copy);
                    }}
                />
            </InputGroup>
             <InputGroup>
                <Input
                    placeholder='Title'
                    value={portfolioItem.title}
                    onChange={(e) => {
                        const copy = { ...portfolioItem };
                        copy.title = e.target.value;
                        setPortfolioItem(copy);
                    }}
                />
             </InputGroup>
             <InputGroup>
                <Input
                    placeholder='Description'
                    value={portfolioItem.description}
                    onChange={(e) => {
                        const copy = { ...portfolioItem };
                        copy.description = e.target.value;
                        setPortfolioItem(copy);
                    }}
                />
             </InputGroup>
             <Button color='primary' onClick={(e) => handleSubmit(e)}>
                Save
            </Button>
        </Container>
    );
};
