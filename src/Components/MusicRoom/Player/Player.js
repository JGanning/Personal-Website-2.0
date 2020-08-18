import React, { Component } from "react";
import "./Player.css";
import _ from 'underscore';

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      song: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEqual(this.props.currentSong, nextProps.currentSong)) {
      this.setState({
        song: nextProps.currentSong
      })
    }
  }

  playSong = () => {
    let play = !this.state.play;
    let song = this.state.song;
    console.log(!_.isEmpty(song));
    console.log(song);
    if (!_.isEmpty(song)) {
      if (play) {
        console.log("Song Playing " + this.state.song.title);
      } else {
        console.log("Song Stopped");
      }
    } else {
      let musicList = [...this.props.musicList];
      song = musicList[0];
    }
    this.setState({
      play,
      song,
    });
  };

  prevSong = () => {
    let song = this.state.song;
    let musicList = [...this.props.musicList];
    let index = musicList.findIndex((current) => current === song);
    if (index === -1 || index === 0) {
      song = musicList[musicList.length - 1];
    } else {
      song = musicList[index - 1];
    }
    console.log("Previous Song " + song.title);
    this.setState({
      song,
    });
  };

  nextSong = () => {
    let song = this.state.song;
    let musicList = [...this.props.musicList];
    let index = musicList.findIndex((current) => current === song);
    if (index === musicList.length - 1) {
      song = musicList[0];
    } else {
      song = musicList[index + 1];
    }

    console.log("Next Song " + song.title);
    this.setState({
      song,
    });
  };

  render() {
    let song = this.state.song;
    console.log(this.state.song);
    return (
      <div className="player">
        <h2>The Music Player</h2>
        <h4>{song && song.title ? "Now Playing: " + song.title : ""}</h4>
        <div id="buttons">
          <button id="pre" onClick={this.prevSong}>
            Previous
          </button>
          <button id="play" onClick={this.playSong}>
            {this.props.play ? "Pause" : "Play"}
          </button>
          <button id="next" onClick={this.nextSong}>
            Next
          </button>
        </div>
        <div id="seek-bar">
          <div id="fill"></div>
          <div id="handle"></div>
        </div>
      </div>
    );
  }
}

export default Player;
