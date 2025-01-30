import React, { useRef, useEffect } from 'react';

const ExerciseVideo = ({ videoUrl }) => {
  const videoRef = useRef(null); 


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  }, [videoUrl]); 

  return (
    <div>
      <h4>Exercise Video</h4>
      <video ref={videoRef} width="100%" height="auto" controls>
        <source src={`/videos/${videoUrl}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ExerciseVideo;
