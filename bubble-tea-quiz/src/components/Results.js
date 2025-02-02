import { Link, useLocation } from "react-router-dom";
import pDescriptions from "../data/PersonalityDescriptions";
import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

const ResultImage = styled.img`
  width: 300px;
  height: 450px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin-bottom: 20px;
`;

const TraitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Trait = styled.li`
  background-color: #f8f9fa;
  border-radius: 50px;
  margin: 5px 5px;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #5cb5a0;
`;

const StyledButton = styled.button`
  background-color:#5cb5a0;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
  
  a {
        text-decoration: none;
        color: inherit;
    }
`;

const Results = () => {
    const location = useLocation();
    const { flavours } = location.state || {};

    if (!flavours || Object.keys(flavours).length === 0) {
        return <h1> No results Found!</h1>;
    }

    const maxCount = Math.max(...Object.values(flavours));
    const highestFlavour = Object.keys(flavours).find(flavour => flavours[flavour] === maxCount);

    const formattedFlavour = highestFlavour.replace(/\s+/g, '');
    const flavourImage = `/images/${formattedFlavour}.png`;

    const { description, traits } = pDescriptions[formattedFlavour] || {};

    return (
        <ResultsContainer>
            <h1> Your Bubble Tea Personality is...</h1>
            <h2>{highestFlavour}</h2>
            <ResultImage src={flavourImage} alt={highestFlavour} />
            <Description>{description}</Description>
            {/* <h3>Traits:</h3> */}
            <TraitsList>
                {traits.map((trait, index) => (
                    <Trait key={index}>{trait}</Trait>
                ))}
        </TraitsList>
        <Link to = "/"> <StyledButton> Try Again</StyledButton></Link> 
        </ResultsContainer>
    );
};

export default Results;