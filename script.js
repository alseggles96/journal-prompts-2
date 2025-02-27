function generatePrompt() {
    const prompts = [
        "What’s your favorite thing to do on a rainy day?",
        "If you could be any animal, what would you be and why?",
        "Write about a time you made someone laugh.",
        "What’s a superpower you wish you had?",
        "Describe your dream adventure!"
    ];
    
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const newPrompt = prompts[randomIndex];
    
    document.getElementById("prompt").innerHTML = newPrompt;
}