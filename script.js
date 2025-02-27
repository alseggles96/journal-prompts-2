function generatePrompt() {
    const prompts = [
        "Whats your favorite thing to do on a rainy day?",
        "What is something that drives you?"
        "If you could be any animal, what would you be and why?",
        "Write about a time you made someone laugh.",
        "Whats a superpower you wish you had?",
        "Describe your dream adventure!"
    ];
    
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const newPrompt = prompts[randomIndex];
    
    document.getElementById("prompt").innerHTML = newPrompt;
}