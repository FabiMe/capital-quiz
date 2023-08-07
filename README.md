# <center>Capital Quiz</center>

The Capital Quiz is a web application that tests your knowledge of European capitals through a fun and interactive quiz game.

![Capital Quiz Screenshot](https://github.com/FabiMe/capital-quiz/assets/136444209/2283b8f2-cdba-4caf-8149-5654869dde98)

[Go to the live page](https://fabime.github.io/capital-quiz/)


# <center>User Stories</center>

## Visitor Goals

- As a visitor, I want to test my knowledge of European capitals in an engaging way.
- I want to enter my name before starting the quiz to personalize the experience.
- I want to see feedback on whether my answers are correct or wrong.
- After completing the quiz, I want to see my final score.

## Site Owner Goals

- As the site owner, I want to provide an enjoyable quiz experience for visitors.
- I want to encourage visitors to share and replay the quiz.

# <center>Project Planning</center>

In this phase, I want to establish the foundational aspects of my project.

## Goals and Objectives

My goal is to create a captivating and educational capital quiz web application that challenges users' knowledge of European capitals. The primary objectives include:

- Providing an engaging and enjoyable quiz experience.
- Personalizing the experience by allowing users to enter their names.
- Offering immediate feedback on quiz answers.
- Displaying the final score and congratulating users on their performance.
  
## Target Audience

My target audience includes people interested in geography and general knowledge. This could range from students to casual learners looking for an interactive and entertaining way to test their knowledge.


# <center>Strategy Plane</center>

The strategy plane focuses on defining my approach to meet the project's goals and user needs.

## User Needs

Users need an interactive and intuitive quiz interface that provides an easy way to enter their name, answer questions, and view their scores.

## Features

- Enter Your Name
- Quiz Interface
- Feedback
- Score Display
  

# <center>Scope Plane</center>

In the scope plane, I define the boundaries of my project and identify what will be included.

## Included Features

- Enter Your Name
- Quiz Interface
- Feedback
- Score Display
  
## Excluded Features

- Timed Quiz Mode (out of scope for initial version)
- Advanced game mode for more challenging questions (out of scope for initial version)


# <center>Structure Plane</center>

The structure plane involves organizing and arranging the project's components for a seamless user experience.

## Navigation Flow

1. User arrives on the landing page.
2. User enters their name and clicks "Start Quiz."
3. Quiz questions are presented one at a time.
4. After answering, users receive feedback and can proceed to the next question.
5. Upon completing the quiz, users are shown their final score.

# <center>Skeleton Plane</center>

In the skeleton plane, I create a low-fidelity representation of the application's interface.

## Wireframes

- Landing Page (with name input)
- Question Interface (with question and answer choices)
- Feedback Display
- Final Score Display
  

# <center>Surface Plane</center>

In the surface plane, I focus on the visual and interactive aspects of the application.

## Visual Design

Color Scheme: White background with black lettering to create a legible contrast and not be distracting.<br>
Typography: 'Lato' for headings, 'Press Start 2P' for a playful touch, and 'Roboto Slab' for body text.<br>
Imagery: Use relevant images to enhance the user experience.


# <center>Features</center>

## Enter Your Name

![Your name](https://github.com/FabiMe/capital-quiz/assets/136444209/39f55ae2-7fa1-4797-a8bc-165c3206dd37)

Before starting the quiz, players are asked to provide their name. This personal touch adds a sense of ownership to the quiz experience.

## Quiz

![question-section](https://github.com/FabiMe/capital-quiz/assets/136444209/464ff632-7858-46b0-a1c9-b010fbb669e5)

The quiz comprises multiple-choice questions about European capitals. Players choose answers and move on to the next question.

## Visual Feedback

![visual-feedback](https://github.com/FabiMe/capital-quiz/assets/136444209/d5e0f821-df08-41ed-ba2c-34dc61c2e954)
![visual-feedback2](https://github.com/FabiMe/capital-quiz/assets/136444209/d22b3add-2f4b-4590-8817-40d7c32e9811)

Upon selecting an answer, the screen responds with a color cue, confirming correctness or indicating the need for another try. This real-time interaction adds engagement to the quiz.

## Exit the Game and Go to the Score Area Button

![exit-game](https://github.com/FabiMe/capital-quiz/assets/136444209/5669d491-aa4e-488d-8fbd-b4950e36858c)

During the quiz, players have the option to exit the game at any point and proceed directly to the score area. This provides a convenient way to view their progress and final score without completing all the questions.

## Score Display

![score-area](https://github.com/FabiMe/capital-quiz/assets/136444209/9d6cd43b-65c6-447c-b593-56cd4c74b410)

Upon completing the quiz, players can view their final score, which includes the number of correct answers and their name.

## Another Round Button

![Another round](https://github.com/FabiMe/capital-quiz/assets/136444209/53fa5157-ca14-4feb-b5d4-2687ebb0bf1d)

After completing the quiz, players can start another round of challenging questions. This button provides a quick way to dive back into the quiz and keep the excitement going.


# <center>Testing</center>

## Browser Testing

| Browser         | Outcome                               |
|-----------------|---------------------------------------|
| Google Chrome   | All features function as expected     |
| Mozilla Firefox | All features function as expected     |
| Safari          | All features function as expected     |
| Microsoft Edge  | All features function as expected     |

## Manual Testing

Manual testing was performed to ensure the proper functionality of the Capital Quiz web application. The following test cases cover various scenarios and interactions that users might encounter during their experience with the quiz.

| Description          | Steps to Reproduce                              | Expected Outcome                                  | Actual Outcome | Pass/Fail |
|----------------------|--------------------------------------------------|----------------------------------------------------|----------------|-----------|
| Name Input Validation| Enter an empty name and click "Start Quiz"       | An alert message should appear: "Please enter your name before starting the game." | As expected | Pass      |
| Quiz Start           | Enter a name and click "Start Quiz"             | Quiz question and answer choices should be displayed | As expected | Pass      |
| Answer Selection     | Select an answer      | Feedback should be displaye (green for right, red for wrong), and the next question should be shown | As expected | Pass      |
| Exiting Quiz         | Click "Exit the game and go to the score area" during the quiz              | User should be taken to the score area            | As expected | Pass      |
| Score Display        | Complete all quiz questions  | Final score should be displayed along with user's name | As expected | Pass      |
| Another Round        | Click "Another Round?" after viewing the score | Quiz should start again | As expected | Pass


## Validator Testing

- HTML / validator.w3.org
  - No errors were returned

- CSS / jigsaw.w3.org
  - no errors were returned

- JSHint / jshint.com
  - no errors were returned

- Lighthouse 
  - ![lighthouse capital quiz](https://github.com/FabiMe/capital-quiz/assets/136444209/1d5f308a-a6d1-446f-9c46-5aedc89b77da)


## Bugs

- hover function prevented visual feedback from being given to the answered question. 
bug was fixed by removing the hover function

# <center>Deployment</center>

- This website was deployed on GitHub pages. The following steps were used.
  - Open the GitHub repository and navigate to settings
  - Navigate to Pages
  - Set Brunches from none to main
  - Insert custom URL
  - Deploy site
  - GitHub provides the URL to the completed website

# <center>Credits</center>

## Content

- W3schools [Media query](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
## Media
- Background image intro : [Pexels - Globe](https://www.pexels.com/de-de/foto/person-die-globus-wirft-1275393/)
- Background image game : [Pexels - Old City](https://www.pexels.com/de-de/foto/mit-blattern-bedeckte-betonhauser-210017/)
- Background image score : [Pexels - Winner](https://www.pexels.com/de-de/foto/schachfigur-260024/)