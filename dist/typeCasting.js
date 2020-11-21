"use strict";
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement; // gdy wiemy że rezultat getElement nie będzie null
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Test"; // Type casting 
}
