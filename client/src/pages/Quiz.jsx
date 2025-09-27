
import { useState, useEffect } from 'react';
import { QuizSetup, QuestionCard, QuizResults, ProgressIndicator } from '../components/quiz';
import { subjects, difficulties, questionBank } from '../constants/quizConstants';
import { Button } from '../components/ui';
import { useStatsTracking } from '../utils/statsTracker';

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [subject, setSubject] = useState('python');
  const [difficulty, setDifficulty] = useState('Easy');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const { trackQuestionAnswered, trackQuizCompleted, startPageTracking, endPageTracking } = useStatsTracking();
  const questions = questionBank[subject];

  // Track page visit for study time
  useEffect(() => {
    startPageTracking();
    return () => endPageTracking();
  }, [startPageTracking, endPageTracking]);

  function startQuiz() {
    setStarted(true);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  }

  function handleSelect(i) {
    setSelected(i);
  }

  function handleNext() {
    // Track that user answered a question
    trackQuestionAnswered();
    
    if (selected === questions[current].answer) setScore(s => s + 1);
    setSelected(null);
    
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Quiz completed - track it
      trackQuizCompleted();
      setShowResult(true);
    }
  }

  function retry() {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden flex items-center justify-center p-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xl relative z-10">
          <QuizSetup
            selectedSubject={subject}
            selectedDifficulty={difficulty}
            onSubjectChange={setSubject}
            onDifficultyChange={setDifficulty}
            onStartQuiz={startQuiz}
            subjects={subjects}
            difficulties={difficulties}
          />
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden flex items-center justify-center p-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xl relative z-10">
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            subject={subjects.find(s => s.value === subject)?.label || subject}
            difficulty={difficulty}
            onRestart={retry}
          />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xl relative z-10">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Quiz</h1>
        
        <ProgressIndicator
          currentQuestion={current}
          totalQuestions={questions.length}
        />
        
        <QuestionCard
          question={currentQuestion}
          selected={selected}
          onSelect={handleSelect}
          showFeedback={selected !== null}
        />
        
        <Button 
          variant="primary"
          size="md"
          className="w-full"
          onClick={handleNext} 
          disabled={selected === null}
        >
          {current + 1 === questions.length ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
