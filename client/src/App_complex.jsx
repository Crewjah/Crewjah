

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import AskAnything from './pages/AskAnything';
import SummarizeText from './pages/SummarizeText';
import SummarizeCode from './pages/SummarizeCode';
import StudyResources from './pages/StudyResources';
import Quiz from './pages/Quiz';
import Flashcards from './pages/Flashcards';
import StudyAssistant from './pages/StudyAssistant';
import SmartNotes from './pages/SmartNotes';
import FlashcardGenerator from './pages/FlashcardGenerator';
import DailyChallenge from './pages/DailyChallenge';
import StudyPlanner from './pages/StudyPlanner';
import ProgressTracker from './pages/ProgressTracker';
import ProfileSettings from './pages/ProfileSettings';


import Help from './pages/Help';
import NotFound from './pages/NotFound';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';


function AppRoutes() {
  const location = useLocation();
  const noNav = ['/', '/signin', '/signup', '/forgot'];
  const hideNav = noNav.includes(location.pathname);
  return (
    <>
      {!hideNav && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ask" element={<AskAnything />} />
        <Route path="/study-assistant" element={<StudyAssistant />} />
        <Route path="/summarize-text" element={<SummarizeText />} />
        <Route path="/smart-notes" element={<SmartNotes />} />
        <Route path="/summarize-code" element={<SummarizeCode />} />
        <Route path="/resources" element={<StudyResources />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/flashcard-generator" element={<FlashcardGenerator />} />
        <Route path="/daily" element={<DailyChallenge />} />
        <Route path="/planner" element={<StudyPlanner />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNav && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
