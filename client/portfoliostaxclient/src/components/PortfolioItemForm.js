// this component provides a form for users to add a new portfolioItem. It captures the input data, sends it to the server via a POST request, and updates the UI with the new portfolio item upon successful addition

import { useState } from "react";
import { addPortfolioItem } from "../APIManagers/PortfolioItemViewManager";


export const PortfolioItemForm = ({ updatePortfolioItemsState }) => {
    const [newPortfolioItem, setNewPortfolioItem] = useState({
        itemType: "",
        title: "",
        description: ""
    });

    const clickTheSaveButton = (e) => {
        e.preventDefault()

        const newPortfolioItemToSendToAPI = {
            ItemType: newPortfolioItem.itemType,
            title: newPortfolioItem.title,
            description: newPortfolioItem.description,
        }

        addPortfolioItem(newPortfolioItemToSendToAPI)
        .then(setNewPortfolioItem({
            itemType: "",
            title: "",
            description: ""
        })).then(() => updatePortfolioItemsState())
    }

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