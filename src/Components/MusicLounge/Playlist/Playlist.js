import React, { useState, useContext } from "react";
import playerContext from "../MusicLounge_State_MGMT/playerContext";
import { songsArr } from "../MusicLounge_State_MGMT/songs";

function Playlist() {
  const { SetCurrent, currentSong } = useContext(playerContext);

  const [sel, setSel] = useState(0);

  return (
    <div className="playlist">
      <div className="header">
        <i className="fas fa-list-ul"></i>
        <h2 className="playlist-header no-margin">Playlist</h2>
      </div>
      <div className="playlist">
        <ul className="song-list">
          {songsArr.map((song, i) => (
            <li className={'song ' + (currentSong === i ? 'active' : '')} key={i} onClick={() => { SetCurrent(i); }}>
              <div>

              </div>
              <i className="fas fa-music"></i>
              <span className="">{song[0]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
