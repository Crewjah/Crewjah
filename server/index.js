const express = require('express');
const cors = require('cors');
require('dotenv').config();


const { signup, login, requireAuth, users } = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder route for health check
app.get('/', (req, res) => {
  res.send('Crewjah API is running');
});


// --- Auth ---
app.post('/auth/signup', signup);
app.post('/auth/login', login);
app.post('/auth/forgot', (req, res) => res.json({ message: 'Forgot password endpoint (placeholder)' }));

// --- User Profile & Preferences ---
app.get('/me', requireAuth, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, name: user.name, email: user.email });
});
app.patch('/me/preferences', (req, res) => res.json({ message: 'Update preferences (placeholder)' }));

// --- Notes & Summaries ---
app.post('/summaries', (req, res) => res.json({ message: 'Create summary (placeholder)' }));
app.get('/summaries', (req, res) => res.json({ message: 'Get summaries (placeholder)' }));

// --- Study Resources ---
app.get('/resources', (req, res) => res.json({ message: 'Get resources (placeholder)' }));

// --- Quizzes ---
app.post('/quizzes/start', (req, res) => res.json({ message: 'Start quiz (placeholder)' }));
app.post('/quizzes/submit', (req, res) => res.json({ message: 'Submit quiz (placeholder)' }));

// --- Progress & Analytics ---
app.get('/progress/overview', (req, res) => res.json({ message: 'Get progress overview (placeholder)' }));

// --- Flashcards ---
app.post('/flashcards/decks', (req, res) => res.json({ message: 'Create flashcard deck (placeholder)' }));
app.post('/flashcards/cards', (req, res) => res.json({ message: 'Create flashcard (placeholder)' }));

// --- Planner ---
app.post('/planner/tasks', (req, res) => res.json({ message: 'Create planner task (placeholder)' }));
app.get('/planner/week', (req, res) => res.json({ message: 'Get planner week (placeholder)' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
