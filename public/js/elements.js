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

    // call set image url function with the image itme we just set up
    setImageUrl(image);
}

// fetch an image from the cat API and set scr attribute for the image element on the page to the url in the response
// exported so that listeners can use it later too to reset the image
export function setImageUrl(){
    const element = document.querySelector('img');
    try{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => data[0].url)
        .then(url => element.setAttribute('src', url));
    }
    catch(e){
        console.log("Failed to fetch image", e);
    }
}

// build the new cat image button
function buildNewImageButton(){
    const button = document.createElement('button');
    button.setAttribute('id', 'new-cat-button');
    button.setAttribute('type', 'button');
    button.innerText = 'Load New Cat Image';
    document.body.append(button);

}

// build the popularity and buttons section
function buildPopularityDiv(){
    // make a div to hold the popularity score and 2 buttons
    const div = document.createElement('div');
    div.setAttribute('id', 'popularity-div');

    // make buttons for upvote/downvote
    const upvote = document.createElement('button');
    upvote.classList.add('vote-button');
    upvote.setAttribute('id', 'upvote-button');
    upvote.innerText = '👍';

    const downvote = document.createElement('button');
    downvote.classList.add('vote-button');
    downvote.setAttribute('id', 'downvote-button');
    downvote.innerText = '👎';

    // make a header with a span for the vote amount
    const header = document.createElement('h3');
    header.innerHTML = 'Popularity Score: <span id="score-span">0</span>';

    // add div to document then put all elements in div
    document.body.append(div);
    div.append(upvote);
    div.append(downvote);
    div.append(header);
}

// build the comment form section
function buildCommentForm(){
    // make a form element and put it in the body
    const form = document.createElement('form');
    form.innerHTML = '<label id="text-area-label" for="text-area">Comment: </label><textarea id="text-area" name="text-area" rows="4" cols="25"></textarea><input type="submit" id="submit-button" value="Submit">';
    document.body.append(form);
}

// build the comment display section
function buildCommentsArea(){
    // make a div and put it in the body
    const div = document.createElement('div');
    div.setAttribute('id', 'comments-div');
    document.body.append(div);
}
