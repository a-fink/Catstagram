import { restoreComments, restoreImageUrl, restoreScore, storeScore, storeUrl } from "./storage.js";

// build elements function that will call other helpers to make DOM elements
// exported so can be called to build all DOM elements
export function buildAllElements(){
    buildHeader();
    buildImage();
    buildNewImageButton();
    buildPopularityDiv();
    buildCommentForm();
    buildCommentsArea();
}

// build header for page & add to DOM
function buildHeader(){
    // make header and set id/text
    const header = document.createElement('h1');
    header.setAttribute('id', 'main-header');
    header.innerText = 'Catstagram';
    // add header & image element to the dom
    document.body.append(header);
}

// make image element and add to DOM, then call function to fetch/set image url
function buildImage(){
    const image = document.createElement('img');
    image.setAttribute('alt', 'a picture of one or more cats');

    // add header & image element to the dom
    document.body.append(image);


    // attempt to get the image url from session storage
    const url = restoreImageUrl();

    // if score is truthy (not null/undefined/'') then set image src to that
    if(url) image.setAttribute('src', url);

    // otherwise call set image url function to set src to a new image from the API
    else setImageUrl();
}

// fetch an image from the cat API
// set scr attribute for the image element to the url in the response
// and update session storage for current picture
// exported so that listeners can use it later too to reset the image
export function setImageUrl(){
    // get image element
    const element = document.querySelector('img');

    try{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => data[0].url)
        .then(url => {
            storeUrl(url);
            return element.setAttribute('src', url);
        });
    }
    catch(e){
        console.log("Failed to fetch image", e);
    }
}

// build the new cat image button and add to the DOM
function buildNewImageButton(){
    const button = document.createElement('button');
    button.setAttribute('id', 'new-cat-button');
    button.setAttribute('type', 'button');
    button.classList.add('hover');
    button.innerText = 'Load New Cat Image';
    document.body.append(button);
}

// build the popularity and buttons section and add to DOM
function buildPopularityDiv(){
    // make a div to hold the popularity score and 2 buttons
    const div = document.createElement('div');
    div.setAttribute('id', 'popularity-div');

    // make buttons for upvote/downvote
    const upvote = document.createElement('button');
    upvote.classList.add('vote-button');
    upvote.setAttribute('id', 'upvote-button');
    upvote.classList.add('hover');
    upvote.innerText = '👍';

    const downvote = document.createElement('button');
    downvote.classList.add('vote-button');
    downvote.setAttribute('id', 'downvote-button');
    downvote.classList.add('hover');
    downvote.innerText = '👎';

    // make a header with a span for the vote amount
    const header = document.createElement('h3');
    header.innerText = 'Popularity Score: ';
    header.append(buildScoreSpan());

    // add div to document then put all elements in div
    document.body.append(div);
    div.append(upvote);
    div.append(downvote);
    div.append(header);
}

// build the span with the popularity score (score pulled from session storage or 0)
// returns a span item contaning the score
function buildScoreSpan(){
    const span = document.createElement('span');
    span.setAttribute('id', 'score-span');

    // get the score from session storage with restoreScore helper
    // if score is truthy (not null/undefined/'') then set span to that
    // otherwise set span to 0 and store it in session storage
    const score = restoreScore();
    if(score) span.innerText = score;
    else{
        span.innerText = 0;
        storeScore(0);
    }

    return span;
}

// build the comment form section and add to DOM
function buildCommentForm(){
    // make a form element and put it in the body
    const form = document.createElement('form');
    form.innerHTML = '<label id="text-area-label" for="text-area">Comment: </label><textarea id="text-area" name="text-area" rows="4" cols="25"></textarea><input type="submit" id="submit-button" class="hover" value="Submit">';
    document.body.append(form);
}

// build the comment display section and add to DOM
function buildCommentsArea(){
    // make a div and put it in the body
    const div = document.createElement('div');
    div.setAttribute('id', 'comments-div');
    document.body.append(div);

    // restore the comments section if session storage has one - will get either an array or a null
    const commentsArray = restoreComments();

    // if did not receive a null, call the helper function to restore comments to comments section
    if(commentsArray !== null) rebuildComemnts(commentsArray);
}

// function to fill in the comments section - called when session storage has comments
// inputs - the array of comments
function rebuildComemnts(array){
    // get the comments div and add the border class to it
    const div = document.getElementById('comments-div');
    div.classList.add('border-div');

    // go through the array, for each string in the comments array make a div and append it to the comments container div
    for(let i = 0; i < array.length; i++){
        let comment = array[i];

        // make a new div for the comment and put the current comment in it
        const newDiv = document.createElement('div');
        newDiv.classList.add('comment');
        newDiv.innerText = comment;

        // put the new div into the comments div
        div.append(newDiv);
    }
}
