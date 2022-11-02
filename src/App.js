import "./App.css";
import BackgroundSlider from "./BackgroundSlider";
import ReactPlayer from "react-player";
import React from "react";
function App() {
  return (
    <div className="App">
      <BackgroundSlider />
      <div className="react-player">
        <ReactPlayer
          width="720px"
          height="360px"
          controls
          url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
          autoPlay
        />
      </div>
    </div>
  );
}

export default App;
