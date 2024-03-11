// this component fetches portfolio details based on the id parameter from the URL, allows users to edit the portfolio information, and saves the changes back to the server when the "Save" button is clicked

import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editPortfolio, getPortfolioByStudentId } from "../Managers/PortfolioManager";


export const editPortfolio = () => {
	const [portfolio, setPortfolio] = useState({
		name: ""
        
	});
	const navigate = useNavigate();
    const { id } = useParams()


    useEffect(() => {
        getPortfolioByStudentId(id)
            .then((data) => {
                setPortfolio(data)
            })
        }, [id])


	const handleSubmit = (e) => {
		
		return editPortfolio(portfolio).then(() => navigate("/portfolios"));
	};
	return (
		<Container>
			<InputGroup>
				<Input
					placeholder='Name'
                    value={portfolio.name}
					onChange={(e) => {
						const copy = { ...portfolio };
						copy.name = e.target.value;
						setPortfolio(copy);
					}}
				/>
				<Button color='primary' onClick={(e) => handleSubmit(e)}>
					Save
				</Button>
			</InputGroup>
		</Container>
	);
};


