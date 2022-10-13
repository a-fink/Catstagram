# Catsagram Project

[Live site](https://catstagram-8f039.web.app/)

## Goal
- To cement my knowledge of frontend JavaScript, API interactions, and browser storage by building a responsive single-page social media style site
- To get familiar with cloud hosting and serverless architecture by using Firebase (Google cloud services)

## Features
- Users can view a random cat image drawn from [The Cat API](https://thecatapi.com/)
- Users can up-vote / down-vote the current image, make comments, or request a new image
- The current image, its popularity score, and its comments are stored in session storage and restored to the page on refresh
- Requesting a new image clears the popularity score and comments so each new image starts fresh

## Technologies Used:
- HTML 5 - page framework
- CSS - styling and media breakpoints for responsive design
- JavaScript / ES6 - build/manipulate HTML elements, write/read from session storage, fetch from an API and parse the response
- Firebase Hosting

## Possible Future Improvements
- I chose to stick with CSS for the first version of this project so I could focus on the JavaScript functionality. For future iterations I would like to explore adding additional styling, perhaps with Bootstrap or Tailwind.
- Utilize additional features of [The Cat API](https://thecatapi.com/) such as allowing users to request images by breed, allowing them to favorite images, etc

### Acknowledgements
This project was based on the Frontend Capstone project for App Academy Open's full stack bootcamp
