// Your code here
import { buildAllElements} from "./elements.js";
import { addAllListeners } from "./listeners.js";

// function to call once window has finished loading, will call helper functions to build/append html elements, set listeners, etc
// inputs - none, returns - none
const addElementsAndListeners = () => {
    buildAllElements();
    addAllListeners();
}

window.onload = addElementsAndListeners;
