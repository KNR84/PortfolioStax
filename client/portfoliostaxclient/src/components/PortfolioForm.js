// this component provides a form for users to add a new portfolio. It captures the input data, sends it to the server via a POST request, and updates the UI with the new portfolio upon successful addition

import { useState } from "react";
import { addPortfolio } from "../APIManagers/PortfolioViewManager";


export const PortfolioForm = ({ updatePortfoliosState }) => {
    const [newPortfolio, setNewPortfolio] = useState({
        startYear: "",
        finishYear: "",
    });

    const clickTheSaveButton = (e) => {
        e.preventDefault()

        const newPortfolioToSendToAPI = {
            StartYear: newPortfolio.startYear,
            FinishYear: newPortfolio.finishYear,
        }

        addPortfolio(newPortfolioToSendToAPI)
        .then(setNewPortfolio({
                    startYear: "",
                    finishYear: "",
        })).then(() => updatePortfoliosState())
    }

    return (
        <>
        <form className="portfolio-form">
            <fieldset>
                <div className="form-group">
                    <h3><b><label htmlFor="startYear">Start Year:</label></b></h3>
                    <input
                        type="text"
                        id="startYear"
                        value={newPortfolio.startYear}
                        onChange={(event) => {
                            const copy = { ...newPortfolio };
                            copy.startYear = event.target.value;
                            setNewPortfolio(copy);
                        }}
                    />
                </div>
                <div className="form-group">
                    <h3><b><label htmlFor="finishYear">Finish Year:</label></b></h3>
                    <input
                        type="text"
                        id="finishYear"
                        value={newPortfolio.finishYear}
                        onChange={(event) => {
                            const copy = { ...newPortfolio };
                            copy.finishYear = event.target.value;
                            setNewPortfolio(copy);
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