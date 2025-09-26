import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import StudyAssistant from './pages/StudyAssistant';
import SmartNotes from './pages/SmartNotes';
import Flashcards from './pages/Flashcards';
import SimpleProgress from './pages/SimpleProgress';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

function AppRoutes() {
  const location = useLocation();
  const noNav = ['/'];
  const hideNav = noNav.includes(location.pathname);
  
  return (
    <>
      {!hideNav && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study-assistant" element={<StudyAssistant />} />
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