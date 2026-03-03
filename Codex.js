function handleCodeMessage(msg) {
    // 1. HTML5 - Basic Page Structure
    if (msg.includes("html")) {
        const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UB Nexo Project</title>
</head>
<body>
    <header>
        <h1>Welcome to My Site</h1>
    </header>
    <main>
        <p>This is a modern HTML5 structure.</p>
    </main>
</body>
</html>`;
        addBotMessage(htmlCode, true, "html");
        return true;
    } 

    // 2. CSS3 - Glassmorphism UI Card
    if (msg.includes("css")) {
        const cssCode = `.card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    color: white;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}`;
        addBotMessage(cssCode, true, "css");
        return true;
    } 

    // 3. JavaScript - Dark Mode Toggle logic
    if (msg.includes("js") || msg.includes("javascript")) {
        const jsCode = `const toggleTheme = () => {
    const body = document.body;
    const isDark = body.classList.contains('dark-mode');
    
    if (isDark) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
};

// Event Listener
document.getElementById('btn').addEventListener('click', toggleTheme);`;
        addBotMessage(jsCode, true, "javascript");
        return true;
    } 

    // 4. Python - Simple Weather API Fetcher
    if (msg.includes("python") || msg.includes("py")) {
        const pyCode = `import requests

def get_weather(city):
    api_key = "your_api_key_here"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        temp = data['main']['temp']
        print(f"The temperature in {city} is {temp}K")
    else:
        print("Error fetching data")

get_weather("London")`;
        addBotMessage(pyCode, true, "python");
        return true;
    }
    return false;
}

