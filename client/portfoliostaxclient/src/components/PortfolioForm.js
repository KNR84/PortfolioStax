// this component provides a form for users to add a new portfolio. It captures the input data, sends it to the server via a POST request, and updates the UI with the new portfolio upon successful addition

import { useState } from "react";
import { addPortfolio } from "../APIManagers/PortfolioViewManager";


export const PortfolioForm = ({ updatePortfoliosState }) => {
    const [newPortfolio, setNewPortfolio] = useState({
        studentFirstName: "",
        studentLastName: "",
        gradeLevel: "",
        startYear: "",
        finishYear: "",
    });

    const clickTheSaveButton = (e) => {
        e.preventDefault()

        const newPortfolioToSendToAPI = {
            StudentFirstName: newPortfolio.studentFirstName,
            StudentLastName: newPortfolio.studentLastName,
            GradeLevel: newPortfolio.gradeLevel,
            StartYear: newPortfolio.startYear,
            FinishYear: newPortfolio.finishYear,
        }

        addPortfolio(newPortfolioToSendToAPI)
        .then(setNewPortfolio({
                    studentFirstName: "",
                    studentLastName: "",
                    gradeLevel: "",
                    startYear: "",
                    finishYear: "",
        })).then(() => updatePortfoliosState())
    }

    return (
        <>
        <form className="portfolio-form">
            <fieldset>
                <div className="form-group">
                    <h3><b><label htmlFor="studentFirstName">Student First Name:</label></b></h3>
                    <input
                        type="text"
                        id="studentFirstName"
                        value={newPortfolio.studentFirstName}
                        onChange={(event) => {
                            const copy = { ...newPortfolio };
                            copy.studentFirstName = event.target.value;
                            setNewPortfolio(copy);
                        }}
                    />
                </div>
                <div className="form-group">
                    <h3><b><label htmlFor="studentLastName">Student Last Name:</label></b></h3>
                    <input
                        type="text"
                        id="studentLastName"
                        value={newPortfolio.studentLastName}
                        onChange={(event) => {
                            const copy = { ...newPortfolio };
                            copy.studentLastName = event.target.value;
                            setNewPortfolio(copy);
                        }}
                    />
                </div>
                <div className="form-group">
                    <h3><b><label htmlFor="gradeLevel">Grade Level:</label></b></h3>
                    <input
                        type="text"
                        id="gradeLevel"
                        value={newPortfolio.gradeLevel}
                        onChange={(event) => {
                            const copy = { ...newPortfolio };
                            copy.gradeLevel = event.target.value;
                            setNewPortfolio(copy);
                        }}
                    />
                </div>
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