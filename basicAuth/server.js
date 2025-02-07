const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

// Basic Authentication Middleware
app.use(basicAuth({
    users: { 'admin': 'password' }, // Replace with your username and password
    challenge: true, // Enables basic auth popup in browsers
}));

// Serve the WCAG issues page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'wcag-issues.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
