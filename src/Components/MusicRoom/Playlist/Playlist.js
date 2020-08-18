import React, { Component } from "react";
import "./Playlist.css";

export class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="playlist">
        <h2 className="header no-margin">The Playlist</h2>
        {this.props.musicList &&
          this.props.musicList.map((item, index) => {
            return (
              <div
                key={index}
                className="song"
                onClick={() => this.props.selectSong(item)}
              >
                <div>{item.title}</div>
                <div>{item.artist}</div>
                <div>{item.time}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Playlist;
