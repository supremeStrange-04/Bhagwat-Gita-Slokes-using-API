import React, { Component } from "react";
import song from "../assets/Krishna Flute (320 kbps).mp3";

class Audio extends Component {
  componentDidMount() {
    const audioEl = document.getElementById("backgroundMusic");
    audioEl.volume = 0.2; // 0.1
    audioEl.play().catch(() => {
      // Play the audio after the first user interaction
      document.addEventListener(
        "click",
        () => {
          audioEl.play();
        },
        { once: true }
      );
    });
  }

  render() {
    return (
      <>
        <audio id="backgroundMusic" loop>
          <source src={song} type="audio/mp3" />
        </audio>
      </>
    );
  }
}
// volume
export default Audio;
