
import { useState } from 'react';
import { QuizSetup, QuestionCard, QuizResults, ProgressIndicator } from '../components/quiz';
import { subjects, difficulties, questionBank } from '../constants/quizConstants';
import { Button } from '../components/ui';

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [subject, setSubject] = useState('python');
  const [difficulty, setDifficulty] = useState('Easy');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = questionBank[subject];

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
    if (selected === questions[current].answer) setScore(s => s + 1);
    setSelected(null);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowResult(true);
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
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
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
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
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
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Quiz</h1>
        
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
