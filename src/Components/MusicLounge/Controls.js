import React, { useState, useEffect, useRef, useContext } from "react";
import playerContext from "./MusicLounge_State_MGMT/playerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeDown,
  faPlay,
  faPause,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  // global state
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
  } = useContext(playerContext);

  const audio = useRef("audio_tag");

  // local state
  const [statevolume, setVolume] = useState(0.5);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (volume) => {
    setVolume(volume);
    audio.current.volume = volume;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    audio.current.volume = statevolume;
    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);

  return (
    <div className="controls">
      <audio
        ref={audio}
        type="audio/mpeg"
        src={require("../../" + songs[currentSong].song)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onEnded={handleEnd}
        preload="true"
      />

      <div className="volume">
        <FontAwesomeIcon icon={faVolumeDown} />
        <input
          value={Math.round(statevolume * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>
      <div className="music-controls">
        <button onClick={prevSong} className="button btn btn-primary">
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button
          className="button btn btn-primary"
          onClick={() => {
            togglePlaying();
            toggleAudio();
          }}
        >
          {playing ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button onClick={nextSong} className="button btn btn-primary">
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
      <div className="progressbar">
        <span className="time current-time">{fmtMSS(currentTime)}</span>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className="time total-time">{fmtMSS(dur)}</span>
      </div>
    </div>
  );
}

export default Controls;
