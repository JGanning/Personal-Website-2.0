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
    this.props.returnSongToParent(song);
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
    this.props.returnSongToParent(song);
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
    this.props.returnSongToParent(song);
  };

  render() {
    let song = this.state.song;
    
    return (
      <div className="player col-lg-12 no-padding">
        <h2 className="player-header no-margin">The Music Player</h2>
        <h4>{song && song.title ? "Now Playing: " + song.title : ""}</h4>
        <div className="buttons" style={{justifyContent: 'space-between'}}>
          <button className="button btn btn-primary" onClick={this.prevSong}>
            Previous
          </button>
          <button className="button btn btn-primary" onClick={this.playSong}>
            {this.state.play ? "Pause" : "Play"}
          </button>
          <button className="button btn btn-primary" onClick={this.nextSong}>
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
