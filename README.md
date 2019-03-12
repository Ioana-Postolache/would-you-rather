# Would You Rather? project

## Start Project
After adding the dependencies (by running "npm  install"), the app can be launched by running "npm start".

## General description
After signing in, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## Main Page 
In the main page ("/"), after the user has signed in, they can see 2 lists of questions, in reverse chronological order. The questions are classified separately in 2 categories, depending on whether they have been answered or not by the signed in user. The user can click on the "view poll" button for each question and see more details. From the menu, the user can navigate to add a new question or see the leaderboard.

## New Question
At  the have /add route, the signed in user will see a form with two options for creating a new "would-you-rather-question". After submitting a new question, the user is redirected to the home page and they can see their new question in the unanswered list.

## Question Page
The details of each poll are available at questions/:question_id and are accessible by clicking on the "view poll" that each question has on the main page.

## Leaderboard
At /leaderboard, users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered.
