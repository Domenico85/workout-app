import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WorkoutSettings = ({ onStartWorkout }) => {
  const [trainingTime, setTrainingTime] = useState(30); 
  const [roundTime, setRoundTime] = useState(5); 
  const [rounds, setRounds] = useState(5);
  const [intensity, setIntensity] = useState('Medium'); 

  const handleStart = () => {
    onStartWorkout(trainingTime, roundTime, rounds, intensity);
  };

  return (
    <div>
      <h2>Workout Settings</h2>
      <div>
        <label>Training Time (minutes):</label>
        <input
          type="number"
          value={trainingTime}
          onChange={(e) => setTrainingTime(e.target.value)}
        />
      </div>
      <div>
        <label>Round Time (seconds):</label>
        <input
          type="number"
          value={roundTime}
          onChange={(e) => setRoundTime(e.target.value)}
        />
      </div>
      <div>
        <label>Number of Rounds:</label>
        <input
          type="number"
          value={rounds}
          onChange={(e) => setRounds(e.target.value)}
        />
      </div>
      <div>
        <label>Intensity:</label>
        <select
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button onClick={handleStart}>Start Workout</button>
    </div>
  );
};

export default WorkoutSettings;
