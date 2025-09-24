
import { useState, useEffect } from 'react';
import { MCQQuestion, ShortAnswerQuestion, ChallengeResults } from '../components/dailyChallenge';
import { QuizSetup, QuizResults } from '../components/quiz';
import { mcqs, shortChallenge, challengeConfig } from '../constants/dailyChallengeConstants';
import { Button } from '../components/ui';
import { useStatsTracking } from '../utils/statsTracker';

const DailyChallenge = () => {
  const [mcqAnswers, setMcqAnswers] = useState(Array(mcqs.length).fill(null));
  const [shortAns, setShortAns] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(true); // Daily challenge starts immediately
  const [showResult, setShowResult] = useState(false);
  
  // For daily challenge, we can use fixed settings or make them configurable
  const subject = 'mixed';
  const difficulty = 'medium';
  const subjects = [{ value: 'mixed', label: 'Mixed Topics' }];
  const difficulties = ['easy', 'medium', 'hard'];
  const questions = mcqs;
  const score = mcqAnswers.filter((a, i) => a === mcqs[i].answer).length;
  
  const setSubject = () => {}; // Not needed for daily challenge
  const setDifficulty = () => {}; // Not needed for daily challenge  
  const startQuiz = () => setStarted(true);
  const retry = () => {
    setMcqAnswers(Array(mcqs.length).fill(null));
    setShortAns('');
    setSubmitted(false);
    setShowResult(false);
  };
  
  const { trackQuestionAnswered, startPageTracking, endPageTracking } = useStatsTracking();
  // Track page visit for study time
  useEffect(() => {
    startPageTracking();
    return () => endPageTracking();
  }, [startPageTracking, endPageTracking]);

  function handleMcq(idx, val) {
    setMcqAnswers(ans => ans.map((a, i) => i === idx ? val : a));
  }
  
  function handleSubmit() {
    // Track each answered question
    const totalQuestions = mcqs.length + (shortAns.trim() ? 1 : 0);
    for (let i = 0; i < totalQuestions; i++) {
      trackQuestionAnswered();
    }
    
    setSubmitted(true);
    setShowResult(true);
  }

  const correctCount = mcqAnswers.filter((a, i) => a === mcqs[i].answer).length;

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-xl">
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
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-xl">
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-xl">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Daily Challenge</h1>
        <div className="mb-4 sm:mb-6 text-sm text-gray-600">Complete today's challenge to earn XP and keep your streak!</div>
        
        {/* MCQs */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-bold mb-2 text-primary">Multiple Choice</h2>
          {mcqs.map((mcq, i) => (
            <MCQQuestion
              key={i}
              question={mcq}
              questionIndex={i}
              selectedAnswer={mcqAnswers[i]}
              onAnswerSelect={(answer) => handleMcq(i, answer)}
              submitted={submitted}
              showFeedback={true}
            />
          ))}
        </div>
        
        {/* Short Answer */}
        <ShortAnswerQuestion
          question={shortChallenge.desc}
          answer={shortAns}
          onAnswerChange={setShortAns}
          submitted={submitted}
        />
        
        <Button 
          variant="primary" 
          size="lg"
          className="w-full mb-4 py-3 sm:py-4 text-base sm:text-lg font-semibold touch-manipulation active:scale-95 transition-transform" 
          onClick={handleSubmit} 
          disabled={submitted || mcqAnswers.includes(null) || !shortAns}
        >
          {submitted ? 'Submitted!' : 'Submit Challenge'}
        </Button>
        
        {submitted && (
          <ChallengeResults
            correctCount={correctCount}
            totalQuestions={mcqs.length}
            streak={challengeConfig.defaultStreak}
            xpEarned={challengeConfig.defaultXP}
            message={challengeConfig.completionMessage}
          />
        )}
      </div>
    </div>
  );
}

export default DailyChallenge;
