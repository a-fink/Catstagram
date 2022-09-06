import { setImageUrl } from "./elements.js";

// add listeners to all necessary elements on the page
// exported so main js script can call it
export function addAllListeners(){
    addLoadButtonListener();
    addUpvoteButtonListener();
    addDownvoteButtonListener();
    addFormListener();
}

// put a listener on the load new cat image button
function addLoadButtonListener(){
    // get the button
    const button = document.getElementById('new-cat-button');
    button.addEventListener('click', loadButtonHandler);
}

// callback function for events happeneing on the load new cat image button
// inputs - the event that triggerd the listener
function loadButtonHandler(event){
    // call the set image url function to load a new cat image
    setImageUrl();

    // call helpers to clear the score and comments
    clearScore();
    clearComments();
}

// put a listener on the upvote button
function addUpvoteButtonListener(){
    // get the button
    const button = document.getElementById('upvote-button');
    button.addEventListener('click', upvoteButtonHandler);
}

// callback function for events happening on the upvote button
// inputs - event that triggered the listener
function upvoteButtonHandler(event){
    // get the span that has the score
    const span = document.getElementById('score-span');

    // get the current score and increase it
    let score = Number(span.innerText);
    score++;

    span.innerText = score;
}

// put a listener on the downvote button
function addDownvoteButtonListener(){
    // get the button
    const button = document.getElementById('downvote-button');
    button.addEventListener('click', downvoteButtonHandler);
}

// callback function for events happening on the downvote button
// inputs - event that triggered the listener
function downvoteButtonHandler(event){
    // get the span that has the score
    const span = document.getElementById('score-span');

    // get the current score and decrease it
    let score = Number(span.innerText);
    score--;

    span.innerText = score;
}

// put a listener on the form submit button
function addFormListener(){
    // get the form and put a listener on it
    const form = document.querySelector('form');
    form.addEventListener('submit', formHandler);
}

// callback function for events happening on the submit form button
// inputs - event that triggered the listener
function formHandler(event){
    // prevent the default behavior of the event (sending the form)
    event.preventDefault();

    // get the textarea element, and it's value, then clear the value
    const textarea = document.getElementById('text-area');
    const value = textarea.value;

    // if the text area had content (length of string > 0) call add comment helper
    if(value.length > 0){
        addComment(value);
    }

    textarea.value = '';
}

// function to add a new comment upon form submission
// inputs - string containing text that was submitted
function addComment(string){
    // get the comments div
    const div = document.getElementById('comments-div');

    // if the comments div is currently empty add the border class to it
    if(div.innerHTML === '') div.classList.add('border-div');

    // make a new div for the comment and put the given string in it
    const newDiv = document.createElement('div');
    newDiv.classList.add('comment');
    newDiv.innerText = string;

    // put the new div into the comments div
    div.append(newDiv);
}

// function to clear the score stored in the score span (called when new cat image is loaded)
function clearScore(){
    // get the span with the score & set the text in it to 0
    const span = document.getElementById('score-span');
    span.innerText = '0';
}

// function to clear all comments in the comments section (called when new cat image is loaded)
function clearComments(){
    // get the comments div, empty the inner html, and remove the border class
    const div = document.getElementById('comments-div');
    div.innerHTML = '';

    if(div.classList.contains('border-div')) div.classList.remove('border-div')
}
