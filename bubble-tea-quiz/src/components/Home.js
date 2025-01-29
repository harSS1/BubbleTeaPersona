import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const startQuiz= () => {
        navigate("/quiz");
    }

    return (
        <div>
            <h1> Welcome to the Bubble Tea Personality Quiz!</h1>
            <p>Embark on a fun journey in Boba Springs and discover which bubble tea flavor best matches your personality!</p>
            <button onClick={startQuiz}> Start Quiz </button>
        </div>
    )

}

export default Home;