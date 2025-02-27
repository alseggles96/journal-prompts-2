function generatePrompt() {
    fetch('https://api.quotable.io/random?tags=inspirational') // Free API for quotes
        .then(response => response.json()) // Turn the response into usable data
        .then(data => {
            const prompt = data.content; // The quote itself
            document.getElementById("prompt").innerHTML = prompt; // Show it
        })
        .catch(error => {
            console.log("Oops, something went wrong!", error); // If it fails
            document.getElementById("prompt").innerHTML = "Oopsie, try again, girly!";
        });
}