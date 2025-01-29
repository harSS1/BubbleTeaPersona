import { useLocation } from "react-router-dom";
import pDescriptions from "../data/PersonalityDescriptions";


const Results = () => {
    const location = useLocation();
    const { flavours } = location.state || {};

    if (!flavours || Object.keys(flavours).length === 0) {
        return <h1> No results Found!</h1>;
    }

    const maxCount = Math.max(...Object.values(flavours));
    const highestFlavour = Object.keys(flavours).find(flavour => flavours[flavour] === maxCount);

    const formattedFlavour = highestFlavour.replace(/\s+/g, '');
    const flavourImage = `/images/${formattedFlavour}.png`

    const { description, traits } = pDescriptions[formattedFlavour] || {}

    return (
        <div>
            <h1> Your Bubble Tea Personality is...</h1>
            <h2> {highestFlavour}</h2>
            <img src={flavourImage} alt={highestFlavour} />
            <p> {description}</p>
            <h3> Traits: </h3>
            <ul>
                {traits.map((trait, index) => (
                    <li key={index}> {trait}</li>
                ))}
            </ul>
        </div>
    )

}

export default Results;