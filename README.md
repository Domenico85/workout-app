# Workout Trainer App

A workout trainer app built with React and Vite. This app allows users to set workout parameters, such as training time, round time, number of rounds, and intensity. When the workout starts, the app will display a video for each exercise, and automatically switch to the next exercise video at the end of each round.

# Features

- Set training time, round time, number of rounds, and intensity.
- Start the workout and watch exercise videos.
- Automatic video switch based on the current round.
- Video playback starts automatically when switching to a new exercise.

# Tech Stack

- Frontend: React.js
- Build tool: Vite

# Getting Started

Follow these steps to set up the project on your local machine.

Prerequisites

Ensure you have the following installed:

- Node.js (preferably the latest LTS version)
- npm or Yarn for package management

Installation

1.  Clone the repository:

git clone https://github.com/your-username/workout-trainer-app.git
cd workout-trainer-app

2. Install dependencies:

If you are using npm:

npm install

Or if you are using yarn:

yarn install

3. Start the development server:

npm run dev

Or if you're using yarn:

    yarn dev

    4. Open your browser and go to http://localhost:5173 to view the app.

# Usage

Starting the Workout

    * After opening the app, you'll be presented with an interface to set the workout parameters.
       * Training Time: The total workout duration.
       * Round Time: The duration of each round.
       * Rounds: The number of rounds to complete.
       * Intensity: A setting for the workout intensity.

- After setting the parameters, click on Start Workout to begin.

- The app will display a video for the first exercise and automatically start playing it.

- When a round ends, the video will change, and a new exercise video will be shown.

Changing the Video

The app currently switches between two videos (exercise1.mp4 and exercise2.mp4) for different rounds. You can add more videos or customize the video list as needed.

# Folder Structure

my-react-app/
├── public/
│ ├── videos/ # Your exercise videos
│ │ ├── exercise1.mp4
│ │ └── exercise2.mp4
│ ├── favicon.ico # Your app's favicon
│ └── index.html # Main HTML file
├── src/
│ ├── components/
│ │ ├── WorkoutSettings.jsx # Component for workout settings
│ │ ├── Timer.jsx # Component to manage the timer
│ │ └── ExerciseVideo.jsx # Component to display the exercise videos
│ ├── App.jsx # Main App component
└── package.json # Project dependencies

# Contributing

    1. Fork the repository.
    2. Create your feature branch (git checkout -b feature/your-feature).
    3. Commit your changes (git commit -am 'Add some feature').
    4. Push to the branch (git push origin feature/your-feature).
    5. Create a new Pull Request.

# License

This project is licensed under the MIT License – see the LICENSE file for details.

# Acknowledgements

    * Inspired by workout apps and fitness tracking software.
    * Thanks to Vite and React for the amazing development experience.
