const express = require('express');
const cors = require('cors');
require('dotenv').config();


const { signup, login, requireAuth, users, updateProfile, deleteAccount } = require('./auth');

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
  res.json({ id: user.id, name: user.name, email: user.email, bio: user.bio, preferences: user.preferences || {} });
});
app.patch('/me/preferences', requireAuth, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.preferences = { ...user.preferences, ...req.body };
  res.json({ message: 'Preferences updated', preferences: user.preferences });
});
app.patch('/me', requireAuth, updateProfile);
app.delete('/me', requireAuth, deleteAccount);

// --- Notes & Summaries ---
const summaries = [];
app.post('/summaries', requireAuth, (req, res) => {
  const { text, type } = req.body;
  if (!text || !type) return res.status(400).json({ error: 'Missing text or type' });
  const summary = { id: summaries.length + 1, userId: req.user.id, text, type, created: Date.now() };
  summaries.push(summary);
  res.status(201).json(summary);
});
app.get('/summaries', requireAuth, (req, res) => {
  const userSummaries = summaries.filter(s => s.userId === req.user.id);
  res.json(userSummaries);
});

// --- Study Resources ---
const resources = [
  { id: 1, subject: 'Math', title: 'Algebra Basics', url: 'https://www.khanacademy.org/math/algebra' },
  { id: 2, subject: 'Science', title: 'Physics Fundamentals', url: 'https://www.khanacademy.org/science/physics' }
];
app.get('/resources', requireAuth, (req, res) => {
  res.json(resources);
});

// --- Quizzes ---
const quizzes = [];
app.post('/quizzes/start', requireAuth, (req, res) => {
  const { subject, difficulty } = req.body;
  if (!subject || !difficulty) return res.status(400).json({ error: 'Missing subject or difficulty' });
  const quiz = { id: quizzes.length + 1, userId: req.user.id, subject, difficulty, started: Date.now(), questions: [], completed: false };
  quizzes.push(quiz);
  res.status(201).json(quiz);
});
app.post('/quizzes/submit', requireAuth, (req, res) => {
  const { quizId, answers } = req.body;
  const quiz = quizzes.find(q => q.id === quizId && q.userId === req.user.id);
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
  quiz.answers = answers;
  quiz.completed = true;
  res.json({ message: 'Quiz submitted', quiz });
});

// --- Progress & Analytics ---
app.get('/progress/overview', requireAuth, (req, res) => {
  // Example: count quizzes, summaries, flashcards for user
  const quizCount = quizzes.filter(q => q.userId === req.user.id).length;
  const summaryCount = summaries.filter(s => s.userId === req.user.id).length;
  res.json({ quizzes: quizCount, summaries: summaryCount });
});

// --- Flashcards ---
const flashcardDecks = [];
const flashcards = [];
app.post('/flashcards/decks', requireAuth, (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Missing deck name' });
  const deck = { id: flashcardDecks.length + 1, userId: req.user.id, name };
  flashcardDecks.push(deck);
  res.status(201).json(deck);
});
app.post('/flashcards/cards', requireAuth, (req, res) => {
  const { deckId, front, back } = req.body;
  if (!deckId || !front || !back) return res.status(400).json({ error: 'Missing card info' });
  const deck = flashcardDecks.find(d => d.id === deckId && d.userId === req.user.id);
  if (!deck) return res.status(404).json({ error: 'Deck not found' });
  const card = { id: flashcards.length + 1, deckId, userId: req.user.id, front, back };
  flashcards.push(card);
  res.status(201).json(card);
});

// --- Planner ---
const plannerTasks = [];
app.post('/planner/tasks', requireAuth, (req, res) => {
  const { title, dueDate, duration } = req.body;
  if (!title || !dueDate || !duration) return res.status(400).json({ error: 'Missing task info' });
  const task = { id: plannerTasks.length + 1, userId: req.user.id, title, dueDate, duration, completed: false };
  plannerTasks.push(task);
  res.status(201).json(task);
});
app.get('/planner/week', requireAuth, (req, res) => {
  const weekTasks = plannerTasks.filter(t => t.userId === req.user.id);
  res.json(weekTasks);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
