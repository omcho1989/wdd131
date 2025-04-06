
let reviewCounter = localStorage.getItem("reviewCounter");

if (reviewCounter) {
    reviewCounter = parseInt(reviewCounter) + 1;
} else {
    reviewCounter = 1;
}


localStorage.setItem("reviewCounter", reviewCounter);
document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.querySelector("#counterDisplay"); 
    counterDisplay.textContent = `There has been ${reviewCounter} review(s).`; 
});