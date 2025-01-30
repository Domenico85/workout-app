import React, { useState, useEffect } from 'react';

const Timer = ({ roundTime, rounds, onNextRound }) => {
  const [timeLeft, setTimeLeft] = useState(roundTime);
  const [currentRound, setCurrentRound] = useState(1);

  useEffect(() => {
    if (currentRound > rounds) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentRound, roundTime, rounds]);

  useEffect(() => {
    if (timeLeft === 0) {
      if (currentRound < rounds) {
        setCurrentRound((prevRound) => prevRound + 1);
        onNextRound(currentRound);
        setTimeLeft(roundTime);
      }
    }
  }, [timeLeft, currentRound, roundTime, rounds, onNextRound]);

  return (
    <div>
      <h3>Round {currentRound} / {rounds}</h3>
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
};

export default Timer;
