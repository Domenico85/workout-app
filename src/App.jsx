import React, { useState } from 'react';
import WorkoutSettings from './WorkoutSettings';
import Timer from './Timer';
import ExerciseVideo from './ExerciseVideo';

const App = () => {
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [trainingTime, setTrainingTime] = useState(0);
  const [roundTime, setRoundTime] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [intensity, setIntensity] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');

  const startWorkout = (trainingTime, roundTime, rounds, intensity) => {
    setTrainingTime(trainingTime);
    setRoundTime(roundTime);
    setRounds(rounds);
    setIntensity(intensity);
    setWorkoutStarted(true);
    setCurrentVideo('exercise1.mp4');  
  };

  const handleNextRound = (currentRound) => {
    if (currentRound % 2 === 0) {
      setCurrentVideo('exercise2.mp4');
    } else {
      setCurrentVideo('exercise1.mp4');
    }
  };

  return (
    <div>
      <h1>Workout Trainer</h1>
      {!workoutStarted ? (
        <WorkoutSettings onStartWorkout={startWorkout} />
      ) : (
        <>
          <Timer roundTime={roundTime} rounds={rounds} onNextRound={handleNextRound} />
          <ExerciseVideo videoUrl={currentVideo} />
        </>
      )}
    </div>
  );
};

export default App;
