/** 
 * Load local storage
 * **/ 
// Initialize display element variable in review page
const reviewsDisplay = document.querySelector(".reviews");

// Get the stored VALUE for the numreviews-ls KEY in localStorage if it exists. If the numreviews KEY is missing, then assign 0 to the numreviews variable.
let numreviews = Number(window.localStorage.getItem("numreviews-ls")) || 0;

reviewsDisplay.textContent = numreviews;