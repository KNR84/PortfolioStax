// this component provides a form for users to add a new portfolioItem. It captures the input data, sends it to the server via a POST request, and updates the UI with the new portfolio item upon successful addition

import React, { useState } from "react";
import { addPortfolioItem } from "../APIManagers/PortfolioItemViewManager";
import { useNavigate } from 'react-router-dom';

export const PortfolioItemForm = ({ updatePortfolioItemsState }) => {
    const [newPortfolioItem, setNewPortfolioItem] = useState({
        itemType: "",
        title: "",
        description: "",
        studentId: 0,
        portfolioId: 0, 
        filePath: "",
        completedDateTime: new Date().toISOString() // Initialize with current date and time
    });

    const navigate = useNavigate();

    const clickTheSaveButton = (e) => {
        e.preventDefault();

        const currentDate = new Date().toISOString(); // Get current date and time
        const newPortfolioItemToSendToAPI = {
            itemType: newPortfolioItem.itemType,
            title: newPortfolioItem.title,
            description: newPortfolioItem.description,
            completedDateTime: currentDate // Update completedDateTime with current date and time
        };

        addPortfolioItem(newPortfolioItemToSendToAPI)
            .then(() => {
                setNewPortfolioItem({
                    itemType: "",
                    title: "",
                    description: "",
                    completedDateTime: currentDate // Update completedDateTime in state
                });
                updatePortfolioItemsState();
                navigate('/'); // Redirect to home or any other page after submission
            });
    };

    return (
        <>
            <form className="portfolio-form">
                <fieldset>
                    <div className="form-group">
                        <h3><b><label htmlFor="itemType">Subject:</label></b></h3>
                        <input
                            type="text"
                            id="itemType"
                            value={newPortfolioItem.itemType}
                            onChange={(event) => {
                                const copy = { ...newPortfolioItem };
                                copy.itemType = event.target.value;
                                setNewPortfolioItem(copy);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <h3><b><label htmlFor="title">Title:</label></b></h3>
                        <input
                            type="text"
                            id="title"
                            value={newPortfolioItem.title}
                            onChange={(event) => {
                                const copy = { ...newPortfolioItem };
                                copy.title = event.target.value;
                                setNewPortfolioItem(copy);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <h3><b><label htmlFor="description">Description:</label></b></h3>
                        <input
                            type="text"
                            id="Description"
                            value={newPortfolioItem.description}
                            onChange={(event) => {
                                const copy = { ...newPortfolioItem };
                                copy.description = event.target.value;
                                setNewPortfolioItem(copy);
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


