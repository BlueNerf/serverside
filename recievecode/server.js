// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;  // You can use any available port

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files (optional, if you want to serve your frontend)
app.use(express.static('public'));

// Endpoint to receive code from the web page
app.post('/recievecode', (req, res) => {
    const receivedCode = req.body.code;  // Get the 'code' from the request body

    if (receivedCode) {
        console.log('Received code:', receivedCode);

        // Here, you could send the code to the Roblox game or process it as needed
        // For now, we're simply sending a success response
        res.json({
            message: 'Code received successfully!',
            code: receivedCode,
        });

        // Optionally, you can store or process the code here (e.g., send it to Roblox via an API or WebSocket)
    } else {
        res.status(400).json({ message: 'No code provided!' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
