function generatePrompt() {
    const starters = [
        "What is a moment when you felt",
        "Reflect on a time you",
        "Explore what makes you",
        "Think about a day you",
        "What is one way you have",
        "Consider a memory that",
        "How do you feel when you",
        "Recall a time you",
        "What is a choice you made that",
        "Imagine a quiet moment when you",
        "What is a lesson you learned from",
        "Think back to when you",
        "How has a time you",
        "What is a feeling you have had",
        "Reflect on when you first",
        "What is a strength you found",
        "Consider a day that",
        "How do you respond when you",
        "What is a hope you hold",
        "Explore a time when you"
    ];
    const topics = [
        "truly at peace",
        "strong and grounded",
        "connected to your purpose",
        "overcame a challenge",
        "found quiet joy",
        "learned something about yourself",
        "embraced your authentic self",
        "felt truly seen",
        "let go of fear",
        "discovered your resilience",
        "healed a past wound",
        "stood up for yourself",
        "found comfort in silence",
        "realized your worth",
        "chased a dream",
        "felt unstoppable",
        "forgave someone",
        "listened to your heart",
        "grew through pain",
        "trusted your intuition"
    ];
    const endings = [
        "and what did it teach you?",
        "—how does it shape you now?",
        "and why does it matter to you?",
        "—what strength did you find?",
        "and how can you carry it forward?",
        "—what feelings linger?",
        "and how does it guide your path?",
        "—what did you learn about yourself?",
        "and how has it changed you?",
        "—what wisdom do you hold now?",
        "and why do you cherish it?",
        "—how do you honor it today?",
        "and what does it reveal about you?",
        "—how did it shift your perspective?",
        "and what peace did it bring?",
        "—what did it awaken in you?",
        "and how do you nurture it?",
        "—what growth came from it?",
        "and how does it inspire you?",
        "—what truth did it uncover?"
    ];

    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    const newPrompt = `${randomStarter} ${randomTopic} ${randomEnding}`;

    try {
        document.getElementById("prompt").innerHTML = newPrompt;
    } catch (error) {
        console.log("Oops, something went wrong!", error);
        document.getElementById("prompt").innerHTML = "Oopsie, try again, girly!";
    }
}

// Save entry with prompt and update history
function saveEntry() {
    try {
        const entry = document.getElementById("journal").value.trim();
        const prompt = document.getElementById("prompt").innerHTML.trim();
        if (entry === "") return; // Don’t save empty entries

        // Get existing entries from localStorage (or start fresh)
        let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        const timestamp = new Date().toLocaleString(); // Add date/time
        entries.unshift({ prompt: prompt, text: entry, time: timestamp }); // Save prompt too

        // Save back to localStorage
        localStorage.setItem("journalEntries", JSON.stringify(entries));

        // Clear the text box
        document.getElementById("journal").value = "";

        // Update the history display
        displayHistory();
    } catch (error) {
        console.log("Oops, saving failed!", error);
        alert("Oopsie, try again, girly!");
    }
}

// Show saved entries with prompts
function displayHistory() {
    try {
        const historyList = document.getElementById("history-list");
        const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        historyList.innerHTML = ""; // Clear current list

        entries.forEach(entry => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${entry.time}</strong><br>Prompt: ${entry.prompt}<br>Entry: ${entry.text}`;
            historyList.appendChild(li);
        });
    } catch (error) {
        console.log("Oops, history failed!", error);
    }
}

// Clear all saved entries
function clearHistory() {
    try {
        localStorage.removeItem("journalEntries");
        displayHistory();
    } catch (error) {
        console.log("Oops, clearing failed!", error);
        alert("Oopsie, try again, girly!");
    }
}

// Load history and generate a default prompt when the page opens
window.onload = function() {
    displayHistory();
    generatePrompt(); // Adds a default prompt
};