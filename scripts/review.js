/** 
 * Load local storage
 * **/ 
// Initialize display element variable in review page
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;