const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatArea = document.getElementById("chat-area");

let typingDiv = null;


sendBtn.onclick = sendMessage;
input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
});

// ====== SEND MESSAGE ======
function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;

    addUserMessage(msg);
    input.value = "";

    handleBotReply(msg);
}

// ====== USER MESSAGE ======
function addUserMessage(text) {
    const div = document.createElement("div");
    div.className = "user-message";
    div.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
    chatArea.appendChild(div);
    scrollBottom();
}

// ====== BOT MESSAGE ======
function addBotMessage(text, isCode = false, lang = "javascript") {
    const div = document.createElement("div");
    div.className = "bot-message";

    if (isCode) {
        // Ensure the class name is exactly what Prism expects
        div.innerHTML = `<div class="message-content"><strong></strong> Here's your ${lang} code:<pre class="language-${lang}"><code class="language-${lang}"></code></pre></div>`;
    } else {
        div.innerHTML = `<div class="message-content"><strong></strong> </div>`;
    }

    const content = isCode ? div.querySelector("code") : div.querySelector(".message-content");
    chatArea.appendChild(div);
    scrollBottom();

    let i = 0;
    const speed = 1; // Fast typing for code

    function type() {
        if (i < text.length) {
            if (isCode) {
                
                content.textContent += text.charAt(i);
            } else {
                content.innerHTML += text.charAt(i);
            }
            i++;
            scrollBottom();
            setTimeout(type, speed);
        } else {
            
            if (isCode && window.Prism) {
                Prism.highlightElement(content);
            }
        }
    }
    type();
}
function copyCode(button) {
    const code = button.parentElement.querySelector("code").innerText;
    navigator.clipboard.writeText(code);
    
    button.innerText = "Copied!";
    setTimeout(() => { button.innerText = "Copy"; }, 2000);
}



// ====== UTILS ======
function escapeHtml(text) {
    const div = document.createElement("div");
    div.innerText = text;
    return div.innerHTML;
}

function scrollBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
}

