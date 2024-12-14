// Function to display the welcome message
function displayWelcomeMessage() {
    alert("Thank you for choosing to adopt! To pick up your new friend and complete the rest of the process, please visit our store.");
}

// Function to set the current date in the footer
function setCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    if (dateElement) {
        // Format the date as a readable string and set it as the content of the footer element
        dateElement.textContent = new Date().toDateString();
    }
}

// Call the displayWelcomeMessage and setCurrentDate functions on page load
window.onload = function() {
    displayWelcomeMessage();
    setCurrentDate();
};
