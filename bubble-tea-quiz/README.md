# React Bubble Tea Personality Quiz

This is a React app for a Bubble Tea Quiz. The app is designed for personal use only and should not be used for commercial purposes.

## Description
The **Bubble Tea Personality Quiz** allows users to answer questions to find out what bubble tea flavour best suits their personality. It is an interactive quiz built with **React** and styled using **styled-components**.

## App Structure
The app consists of the following components and data files:

### Components

1. **Footer.js**  
   This component is displayed across all pages of the app. It provides consistent footer information, including copyright details and credits.

2. **Home.js**  
   The initial page of the app, introducing the quiz and providing the user with an option to start the quiz.

3. **Quiz.js**  
   The main part of the app, where users are presented with a series of 12 questions. Each question has multiple-choice options that help determine the user’s bubble tea personality based on their answers. The results are tracked, and once the quiz is completed, the user is directed to the **Results** page.

4. **Result.js**  
   This component displays the outcome of the quiz, showing the user's matched bubble tea flavor. It presents an image of the chosen flavor, a description explaining why it fits the user's personality, and a list of relevant personality traits.

### Data

1. **PersonalityDescription.js**  
   This file includes descriptions for various bubble tea flavors, which align with specific personality traits.

2. **QuizQuestions.js**  
   Contains the list of questions and multiple-choice options for the quiz, designed to gather information about the user’s personality.