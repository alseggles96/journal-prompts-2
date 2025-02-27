function generatePrompt() {
    fetch('https://api.quotable.io/random?tags=inspirational') // Fixed URL with https://
        .then(response => response.json())
        .then(data => {
            const prompt = data.content;
            document.getElementById("prompt").innerHTML = prompt;
        })
        .catch(error => {
            console.log("Oops, something went wrong!", error);
            document.getElementById("prompt").innerHTML = "Oopsie, try again, girly!";
        });
}