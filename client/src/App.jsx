import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingNew from './pages/LandingNew';
import SignInSimple from './pages/SignInSimple';
import SignUpSimple from './pages/SignUpSimple';
import DashboardSimple from './pages/DashboardSimple';
import StudyTimer from './pages/StudyTimer';
import SmartNotes from './pages/SmartNotes';
import Flashcards from './pages/Flashcards';
import SimpleProgress from './pages/SimpleProgress';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

function AppRoutes() {
  const location = useLocation();
  const noNav = ['/', '/signin', '/signup', '/dashboard'];
  const hideNav = noNav.includes(location.pathname);
  
  return (
    <>
      {!hideNav && <Header />}
      <Routes>
        <Route path="/" element={<LandingNew />} />
        <Route path="/signin" element={<SignInSimple />} />
        <Route path="/signup" element={<SignUpSimple />} />
        <Route path="/dashboard" element={<DashboardSimple />} />
        <Route path="/study-timer" element={<StudyTimer />} />
        <Route path="/smart-notes" element={<SmartNotes />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/progress" element={<SimpleProgress />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNav && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;