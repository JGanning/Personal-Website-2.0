import React, { useState, useContext } from "react";
import playerContext from "../MusicLounge_State_MGMT/playerContext";
import { songsArr } from "../MusicLounge_State_MGMT/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faUser, faList } from "@fortawesome/free-solid-svg-icons";

function Playlist() {
  const { SetCurrent, currentSong } = useContext(playerContext);

  const [sel, setSel] = useState(0);

  return (
    <div className="playlist">
      <div className="header">
        <i className="fas fa-list-ul"></i>
        <h2 className="playlist-header no-margin">
          <FontAwesomeIcon className="fa-margin" icon={faList} />
          Playlist
        </h2>
      </div>
      <div className="songs">
        <ul className="song-list">
          {songsArr.map((song, i) => (
            <li
              className={"song " + (currentSong === i ? "active" : "")}
              key={i}
              onClick={() => {
                SetCurrent(i);
              }}
            >
              <div>
                <FontAwesomeIcon className="fa-margin" icon={faMusic} />
                <span className="song-info">{song.title}</span>
              </div>
              <div>
                <FontAwesomeIcon className="fa-margin" icon={faUser} />
                <span className="song-info">{song.artist}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
