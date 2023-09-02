let img = document.querySelector(".img");
let container = document.querySelector(".container");
let darkButton = document.getElementById("dark");
let darkButtonAbout = document.getElementById("about");
// change background img
function moves(x) {
    img.src = x;
}
// change background color
function color(color) {
    container.style.background = color;
}


document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code, including the darkMode function, goes here
    function darkMode() {
        if (darkButton.innerHTML === "Dark Mode") {
            document.body.style.backgroundColor = '#000';
            container.style.backgroundColor = '#000';
            darkButton.innerHTML = "Light Mode";
        } else {
            document.body.style.backgroundColor = '#474787'; // Change to your preferred light mode background color
            container.style.backgroundColor = '#474787'; // Change to your preferred light mode background color
            darkButton.innerHTML = "Dark Mode";

        }
    }

    // Add event listener to the dark mode button
    darkButton.addEventListener("click", darkMode);
});