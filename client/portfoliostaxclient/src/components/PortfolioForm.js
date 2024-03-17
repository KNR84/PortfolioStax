// this component provides a form for users to add a new portfolio. It captures the input data, sends it to the server via a POST request, and updates the UI with the new portfolio upon successful addition

import { useState } from "react";
import { addPortfolio } from "../APIManagers/PortfolioViewManager";
import { useNavigate } from 'react-router-dom'
import './Form.css';


export const PortfolioForm = ({ updatePortfoliosState }) => {
    const [newPortfolio, setNewPortfolio] = useState({
        startYear: "",
        finishYear: "",
        studentId: 0
    });

    
    
//QUESTION FOR STEVE how do I get the Student Id?
    
    
const navigate = useNavigate()
    
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
                })).then(() => navigate("/portfolio/list"))
    }

    return (
        <div className="full-page-container"> {/* Wrap the form in a container */}
         <div className="header">
              <br></br>
              <br></br>
                <h2>Create a new portfolio:</h2>
                <p>Organizing your educational journey by year can offer clarity and simplicity. Please indicate the year you commenced this grade and the year you intend to complete it.</p>

            </div>
        <form className="portfolio-form">
            <fieldset>
                <div className="form-group">
                    <h3><b><label htmlFor="startYear">Year you began this grade:</label></b></h3>
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
                    <h3><b><label htmlFor="finishYear">Year you plan to finish:</label></b></h3>
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
            <button onClick={(clickEvent) => clickTheSaveButton(clickEvent)} className="btn btn-primary">Submit</button>
        </form>
        </div>
   
);
};