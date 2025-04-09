const http = require('http');

const PORT = 3002;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
            <head>
                <title>Live Date and Time</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80, #facc15);
                        background-size: 800% 800%;
                        animation: gradientBG 15s ease infinite;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }

                    @keyframes gradientBG {
                        0% {background-position: 0% 50%;}
                        50% {background-position: 100% 50%;}
                        100% {background-position: 0% 50%;}
                    }

                    h1 {
                        font-size: 2.5rem;
                        background: linear-gradient(90deg,rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0), #facc15);
                        background-clip: text;
                        -webkit-background-clip: text;
                        color: transparent;
                        -webkit-text-fill-color: transparent;
                        font-weight: bold;
                        text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
                    }
                </style>
            </head>
            <body>
                <h1 id="dateTime">Loading...</h1>

                <script>
                    function updateTime() {
                        const now = new Date();
                        document.getElementById('dateTime').textContent =
                            'The current date and time is: ' + now.toLocaleString();
                    }

                    setInterval(updateTime, 1000);
                    updateTime();
                </script>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
