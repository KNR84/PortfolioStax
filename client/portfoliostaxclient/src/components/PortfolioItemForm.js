import React, { useState } from "react";
import { addPortfolioItem } from "../APIManagers/PortfolioItemViewManager";
import { useNavigate, useParams } from 'react-router-dom';
import './Form.css';


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
    const { id } = useParams();

    const clickTheSaveButton = (e) => {
        e.preventDefault();

        const currentDate = new Date().toISOString(); // Get current date and time
        const newPortfolioItemToSendToAPI = {
            itemType: newPortfolioItem.itemType,
            title: newPortfolioItem.title,
            description: newPortfolioItem.description,
            portfolioId: id,
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
                // updatePortfolioItemsState();
                navigate(`/portfolioItem/list/${id}`); 
            });
    };

    return (
        <div className="full-page-container"> {/* Wrap the form in a container */}
       
            <div className="header">
              <br></br>
              <br></br>
                <h2>Submit your new Portfolio Item here:</h2>
                <p>This page serves as a gateway to adding a new portfolio item to your child's homeschool portfolio. As dedicated educators and guardians, we understand the importance of showcasing your child's educational journey and accomplishments. With this tool, you can document and celebrate their progress, capturing every milestone along the way.

Adding a new portfolio item is simple and intuitive. Enter the project title, subject, and a description of what your child learned in this form then attach an image to showcase accomplishments. Each entry is a testament to their growth and learning experience, forming a comprehensive record of their homeschooling journey.

Your child's portfolio is more than just a collection of assignments; it's a living testament to their dedication and achievement. Start adding new items today to create a vibrant showcase of their unique talents and accomplishments.

Thank you for entrusting us with a part of your homeschooling journey. Together, let's celebrate the joy of learning and the power of education.</p>

            </div>
            <form className="portfolio-form">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title"><b>Project title:</b></label>
                        <input
                            placeholder='Enter the project title here'
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
                        <label htmlFor="itemType"><b>Project subject:</b></label>
                        <input
                            placeholder='Enter the subject here'
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
                        <label htmlFor="description"><b>A description of what I learned:</b></label>
                        <input
                            placeholder='A description of what I learned'
                            type="text"
                            id="description"
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
                <button onClick={(clickEvent) => clickTheSaveButton(clickEvent)} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
