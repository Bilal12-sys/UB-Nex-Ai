function handleBotReply(msg) {
    const lowMsg = msg.toLowerCase().trim();

    // 1. ROUTE TO CODE (codex.js)
    const codeResponse = handleCodeMessage(lowMsg);
    if (codeResponse) return;


    // 3. PERSONALITY & GREETINGS
    if (lowMsg.includes("hello") || lowMsg.includes("hi")) return addBotMessage("Hello there! 👋 How can I assist you today?");
    if (lowMsg.includes("assalam")) return addBotMessage("Wa Alaikum Assalam! 😊 How is your day going?");
    if (lowMsg.includes("how are you")) return addBotMessage("I'm doing great, thank you for asking! 🤖 I'm powered by code and ready to help you.");
    if (lowMsg.includes("who created you") || lowMsg.includes("owner")) return addBotMessage("I was created by a brilliant developer (That's you!) using HTML, CSS, and JS.");
    if (lowMsg.includes("thank")) return addBotMessage("You're very welcome! Happy to help. ✨");

    // 4. SMART COMMANDS (Advice, Facts, Motivation)
    if (lowMsg.includes("advice")) {
        const advices = [
            "Consistent practice is the key to mastering coding. 💻",
            "Don't compare your Chapter 1 to someone else's Chapter 20.",
            "Take breaks! Sometimes the best debugging happens away from the screen."
        ];
        return addBotMessage("💡 Advice: " + advices[Math.floor(Math.random() * advices.length)]);
    }

    if (lowMsg.includes("fact")) {
        const facts = [
            "The first computer programmer was a woman named Ada Lovelace.",
            "Python was named after the comedy group Monty Python, not the snake! 🐍",
            "The first 'bug' was an actual moth found inside a computer in 1947."
        ];
        return addBotMessage("🤓 Did you know? " + facts[Math.floor(Math.random() * facts.length)]);
    }

    if (lowMsg.includes("motivate") || lowMsg.includes("sad")) {
        return addBotMessage("🚀 Believe in yourself! Every line of code you write is making you smarter. You've got this!");
    }

    // 5. UTILITIES (Time, Date, Help)
    if (lowMsg.includes("time")) return addBotMessage("🕒 The current time is " + new Date().toLocaleTimeString());
    if (lowMsg.includes("date")) return addBotMessage("📅 Today is " + new Date().toDateString());
    
    if (lowMsg.includes("help") || lowMsg.includes("commands")) {
        return addBotMessage(`🤖 **UB Nexo Master Menu:**<br><br>
        💻 **Code:** Type "Show HTML", "CSS", "JS", or "Python"<br>
        🎮 **Game:** Type "Quiz"<br>
        📊 **Math:** Type "5 table" or "10 + 10"<br>
        💡 **Fun:** Type "Advice", "Fact", or "Motivate"`);
    }

    // 6. TABLES
    if (lowMsg.includes("table")) {
        const num = lowMsg.match(/\d+/);
        if (!num) return addBotMessage("❌ Please provide a number, e.g., '5 table'");
        let result = `📊 **Table of ${num[0]}**<br><br>`;
        for (let i = 1; i <= 10; i++) result += `${num[0]} × ${i} = ${num[0] * i}<br>`;
        return addBotMessage(result);
    }

    // 7. CALCULATOR
    if (/^[0-9+\-*\/().\s]+$/.test(lowMsg) && /[0-9]/.test(lowMsg)) {
        try {
            return addBotMessage("🧮 Result: " + eval(lowMsg));
        } catch {
            return addBotMessage("❌ I couldn't calculate that.");
        }
    }

    // DEFAULT
    const defaults = [
        "🤔 I'm not sure I understand. Try typing 'help'!",
        "😅 My brain is still growing! Can you rephrase that?",
        "🤖 I don't have an answer for that yet, but I'm learning!"
    ];
    addBotMessage(defaults[Math.floor(Math.random() * defaults.length)]);
}