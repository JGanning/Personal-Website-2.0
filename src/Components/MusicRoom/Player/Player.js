import React, { Component } from "react";
import "./Player.css";
import _ from "underscore";

export class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      song: {},
      playSong: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.selectedSong, nextProps.selectedSong) ) {
      console.log("loud");
      // let index = this.props.musicList.findIndex(
      //   (current) => current === nextProps.selectedSong
      // );
      this.setState({
        song: nextProps.selectedSong,
      });
      this.playSelectedSong(nextProps.selectedSong);
    }
    if(!_.isEqual(this.props.play, nextProps.play)) {
      this.setState({
        play: nextProps.play
      })
    }
  }

  componentWillUnmount() {
    if (_.isElement(this.state.playSong)) {
      let playSong = this.state.playSong;
      playSong.pause();
    }

    this.setState({
      play: false,
      song: {},
      playSong: {},
    });
  }

  playSong = () => {
    let play = !this.state.play;
    let song = this.state.song;
    let playSong = this.state.playSong;
    let musicList = [...this.props.musicList];
    let index = musicList.findIndex((current) => current === song);

    if (index === -1 || index === 0) {
      index = 0;
    }

    if (!_.isElement(playSong)) {
      console.log("entered if");
      playSong = new Audio();
    }
    playSong.src = require("../../../assets/music/" +
      this.props.musicList[index].title +
      ".mp3");
    playSong.volume = 0.4;

    if (!_.isEmpty(song)) {
      if (play) {
        console.log("Song Playing " + this.state.song.title);
        playSong.play();
      } else {
        console.log("Song Stopped");
        playSong.pause();
      }
    } else {
      let musicList = [...this.props.musicList];
      song = musicList[0];
      playSong.play();
    }
    this.setState({
      play,
      song,
      playSong,
    });
    this.props.returnSongToParent(song);
  };

  prevSong = (selected) => {
    let play = this.state.play;
    let song = this.state.song;
    let musicList = [...this.props.musicList];
    let index = musicList.findIndex((current) => current === song);
    let playSong = this.state.playSong;

    if (index === -1) {
      index = 0;
    } else if (index === 0) {
      index = musicList.length - 1;
      song = musicList[musicList.length - 1];
    } else {
      index = index - 1;
      song = musicList[index];
    }

    if (!_.isElement(playSong)) {
      console.log("entered if");
      playSong = new Audio();
      playSong.src = require("../../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    } else {
      playSong.src = require("../../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    }

    console.log(this.state.play);
    if (!_.isEmpty(song)) {
      if (this.state.play) {
        console.log("Song Playing " + this.state.song.title);
        play = true;
        playSong.play();
      }
    } else {
      play = true;
      song = musicList[index];
      playSong.play();
    }

    this.setState({
      play,
      song,
      playSong,
    });
    this.props.returnSongToParent(song);
  };

  nextSong = (selected) => {
    let play = this.state.play;
    let song = this.state.song;
    let musicList = [...this.props.musicList];
    let index = musicList.findIndex((current) => current === song);
    let playSong = this.state.playSong;

    if (index === musicList.length - 1) {
      index = 0;
      song = musicList[0];
    } else {
      index = index + 1;
      song = musicList[index];
    }

    if (!_.isElement(playSong)) {
      console.log("entered if");
      playSong = new Audio();
      playSong.src = require("../../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    } else {
      playSong.src = require("../../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    }

    if (!_.isEmpty(song)) {
      if (this.state.play) {
        play = true;
        console.log("Song Playing " + this.state.song.title);
        playSong.play();
      }
    } else {
      play = true;
      song = musicList[index];
      playSong.play();
    }

    this.setState({
      play,
      song,
      playSong,
    });
    this.props.returnSongToParent(song);
  };

  playSelectedSong = (song) => {
    console.log(song);
    // let play = true;
    let musicList = [...this.props.musicList];
    let index = musicList.findIndex((current) => current === song);
    let playSong = this.state.playSong;

    if (!_.isElement(playSong)) {
      playSong = new Audio();
      playSong.src = require("../../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    } else {
      playSong.src = require("../../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    }

    playSong.play();
    this.setState({
      song,
      playSong,
      // play,
    });
  };

  playPause = () => {
    let playSong = this.state.playSong;
    if (this.state.play && _.isElement(this.state.playSong)) {
      playSong.play();
    }
  };

  render() {
    let song = this.state.song;
    console.log(this.state.song);
    console.log(this.state.playSong);
    return (
      <div className="player col-lg-12 no-padding">
        <h2 className="player-header no-margin">The Music Player</h2>
        <h4 className="title no-margin">
          {song && song.title ? "Now Playing: " + song.title : ""}
        </h4>
        <div className="buttons" style={{ justifyContent: "space-between" }}>
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
