import { Link, useLocation } from "react-router-dom";
import pDescriptions from "../data/PersonalityDescriptions";
import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  flex: 1; 
`;

const ResultImage = styled.img`
  width: auto;
  height: 450px;
  object-fit: contain;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
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
  border: 2px solid #b18f6a;
`;

const FlavourTitle = styled.h2`
  color: ${(props) => props.color || "#000000"};
  font-size: 2.5rem;
  margin-bottom: 10px;
`;


const StyledButton = styled.button`
  background-color:#b18f6a;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-bottom: 10px;

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

    const { description, traits, color } = pDescriptions[formattedFlavour] || {};

    return (
        <ResultsContainer>
            <h1> Your Bubble Tea Personality is...</h1>
            <FlavourTitle color={color}>{highestFlavour}</FlavourTitle>
            <ResultImage src={flavourImage} alt={highestFlavour} />
            <Description>{description}</Description>
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