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
          title: "Farewell to Jenny",
          artist: "Paddy and the Rats",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 2,
          title: "Syncopated Healing",
          artist: "Twiddle",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 3,
          title: "Tough to Be a Dreamer",
          artist: "Felix Hagan",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 4,
          title: "SAD",
          artist: "Young Rising Sons",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 5,
          title: "The Whiskey, The Liar, The Thief",
          artist: "Patent Pending",
          song: "song goes here",
          time: "4:20",
        },
        {
          id: 6,
          title: "Get What I Need",
          artist: "Goldfinger",
          song: "song goes here",
          time: "4:20",
        },
      ],
      song: {},
      play: false,
    };
  }

  // playSong = () => {
  //   let play = !this.state.play;
  //   let song = this.state.song;
  //   console.log(!_.isEmpty(song));
  //   console.log(song);
  //   if (!_.isEmpty(song)) {
  //     if (play) {
  //       console.log("Song Playing " + this.state.song.title);
  //     } else {
  //       console.log("Song Stopped");
  //     }
  //   } else {
  //     let musicList = [...this.state.musicList];
  //     song = musicList[0];
  //   }
  //   this.setState({
  //     play,
  //     song,
  //   });
  // };

  // prevSong = () => {
  //   let song = this.state.song;
  //   let musicList = [...this.state.musicList];
  //   let index = musicList.findIndex((current) => current === song);
  //   if (index === -1 || index === 0) {
  //     song = musicList[musicList.length - 1];
  //   } else {
  //     song = musicList[index - 1];
  //   }
  //   console.log("Previous Song " + song.title);
  //   this.setState({
  //     song,
  //   });
  // };

  // nextSong = () => {
  //   let song = this.state.song;
  //   let musicList = [...this.state.musicList];
  //   let index = musicList.findIndex((current) => current === song);
  //   if (index === musicList.length - 1) {
  //     song = musicList[0];
  //   } else {
  //     song = musicList[index + 1];
  //   }

  //   console.log("Next Song " + song.title);
  //   this.setState({
  //     song,
  //   });
  // };

  selectSong = (song) => {
    let play = !this.state.play;
    console.log('Playing "' + song.title + '" by ' + song.artist);
    this.setState({
      song,
      play,
    });
  };

  render() {
    return (
      <div className="music-room">
        <div className="row">
          <div className="col-lg-9">
            <Player
              musicList={this.state.musicList}
              prevSong={this.prevSong}
              playSong={this.playSong}
              nextSong={this.nextSong}
              currentSong={this.state.song}
              play={this.state.play}
            />
          </div>
          <div className="col-lg-3">
            <Playlist
              selectSong={this.selectSong}
              musicList={this.state.musicList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MusicRoom;
