// server.js - Simple API for HNG Stage 1
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (not strictly needed for GET, but good practice)
app.use(express.json());

// GET / - Returns "API is running"
app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// GET /health - Returns "healthy"
app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

// GET /me - Returns your personal info
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Olaoluwa Afolami",
    email: "laoluafolami@outlook.com",
    github: "https://github.com/laoluafolami"
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ API server running on port ${PORT}`);
});