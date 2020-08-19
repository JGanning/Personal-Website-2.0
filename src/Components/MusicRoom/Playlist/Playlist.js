import React from "react";
import "./Playlist.css";

export const Playlist = (props) => {
  return (
    <div className="playlist">
      <h2 className="playlist-header no-margin">The Playlist</h2>
      {props.musicList &&
        props.musicList.map((item, index) => {
          let active;
          if (props.currentSong.id === item.id) {
            active = "active";
          } else {
            active = "";
          }
          return (
            <div
              key={index}
              className={active + " song"}
              onClick={() => props.selectSong(item)}
            >
              <div>{item.title}</div>
              <div>{item.artist}</div>
              <div>{item.time}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Playlist;
