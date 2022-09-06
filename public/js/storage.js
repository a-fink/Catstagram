// function to store a score value in the session storage
// inputs - score value
export function storeScore(score){
    sessionStorage.setItem('score', score);
}

// function to restore a score value from the session storage
// returns - the score stored in session storage
export function restoreScore(){
    // get the score from session Storage
    return sessionStorage.getItem('score');
}

// function to store the url value of the current cat image to the session storage
export function storeUrl(url){
    sessionStorage.setItem('url', url);
}

// function to restore an image url from the session storage
// returns - the url stored in session storage
export function restoreImageUrl(){
    return sessionStorage.getItem('url');
}

// function to store a comment in the session storage
// inputs - string containing the comment
export function storeComment(comment){
    // get the current comments value from session storage
    const currentComments = sessionStorage.getItem('comments');

    let commentsArray;
    // if currentComments is truthy (not null/undefined/'') then parse it to get the comments array
    // otherwise set the comments Array to an empty array
    if(currentComments) commentsArray = JSON.parse(currentComments);
    else commentsArray = [];

    // push the given comment string into the commnets array
    commentsArray.push(comment);

    // put the updated comments array back in session storage
    sessionStorage.setItem('comments', JSON.stringify(commentsArray));
}

// function to clear the comments stored in session storage
export function clearSessionComments(){
    sessionStorage.removeItem('comments');
}

// function to restore comments from the session storage
// returns - the array of comments from session storage or a null
export function restoreComments(){
    // get the current comments value from session storage
    const currentComments = sessionStorage.getItem('comments');

    // if currentComments is truthy (not null/undefined/'') then parse it to get the comments array and return
    // otherwise return null
    if(currentComments) return JSON.parse(currentComments);
    else return null;
}
