import React, { Component } from "react";
import "./MusicRoom.css";
import Player from "./Player/Player";
import Playlist from "./Playlist/Playlist";
import _ from "underscore";

export class MusicRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: [
        {
          id: 1,
          title: "Zinnia - Pokemon",
          artist: "Paddy and the Rats",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 2,
          title: "Guzma - Pokemon",
          artist: "Twiddle",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 3,
          title: "Pallet - Pokemon",
          artist: "Felix Hagan",
          song: "song goes here",
          time: "4:20",
        },
      ],
      song: {},
      playSong: {},
      play: false,
      currentTime: "",
      duration: "",
    };
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

  selectSong = (song) => {
    let musicList = [...this.state.musicList];
    let index = musicList.findIndex((current) => current === song);
    let playSong = this.state.playSong;

    if (!_.isElement(playSong)) {
      playSong = new Audio();
      playSong.src = require("../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    } else {
      playSong.src = require("../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    }

    playSong.play();
    this.setState({
      song,
      playSong,
      play: true,
    });
  };

  playSong = () => {
    let play = !this.state.play;
    let song = this.state.song;
    let playSong = this.state.playSong;
    let musicList = [...this.state.musicList];
    let index = musicList.findIndex((current) => current === song);

    if (index === -1 || index === 0) {
      index = 0;
    }

    if (!_.isElement(playSong)) {
      console.log("entered if");
      playSong = new Audio();
    }
    playSong.src = require("../../assets/music/" +
      this.state.musicList[index].title +
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
      let musicList = [...this.state.musicList];
      song = musicList[0];
      playSong.play();
    }
    this.setState({
      play,
      song,
      playSong,
    });
  };

  prevSong = () => {
    let play = this.state.play;
    let song = this.state.song;
    let musicList = [...this.state.musicList];
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
      playSong.src = require("../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    } else {
      playSong.src = require("../../assets/music/" +
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
  };

  nextSong = () => {
    let play = this.state.play;
    let song = this.state.song;
    let musicList = [...this.state.musicList];
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
      playSong.src = require("../../assets/music/" +
        musicList[index].title +
        ".mp3");
      playSong.volume = 0.4;
    } else {
      playSong.src = require("../../assets/music/" +
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
  };

  render() {
    let song = this.state.song;
    console.log(this.state.playSong);
    console.log(this.state.playSong && this.state.playSong.duration);
    return (
      <div className="music-room">
        <div className="row no-margin">
          <div className="col-lg-9 no-padding">
            <div className="player col-lg-12 no-padding">
              <h2 className="player-header no-margin">The Music Player</h2>
              <div
                className="buttons"
                style={{ justifyContent: "space-between" }}
              >
                <button
                  className="button btn btn-primary"
                  onClick={this.prevSong}
                >
                  Previous
                </button>
                <button
                  className="button btn btn-primary"
                  onClick={this.playSong}
                >
                  {this.state.play ? "Pause" : "Play"}
                </button>
                <button
                  className="button btn btn-primary"
                  onClick={this.nextSong}
                >
                  Next
                </button>
              </div>
              <h4 className="title no-margin">
                {song && song.title ? "Now Playing: " + song.title : ""}
              </h4>
            </div>
          </div>
          <div className="col-lg-3 no-padding">
            <Playlist
              selectSong={this.selectSong}
              musicList={this.state.musicList}
              currentSong={this.state.song}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MusicRoom;
