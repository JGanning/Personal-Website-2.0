import React, { Component } from "react";
import "./MusicRoom.css";
import Player from "./Player/Player";
import Playlist from "./Playlist/Playlist";
// import _ from "underscore";

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

  returnSongToParent = (props) => {
    let song = props;
    this.setState({
      song
    })
  }

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
        <div className="row no-margin">
          <div className="col-lg-9 no-padding">
            <Player
              musicList={this.state.musicList}
              prevSong={this.prevSong}
              playSong={this.playSong}
              nextSong={this.nextSong}
              currentSong={this.state.song}
              play={this.state.play}
              returnSongToParent={this.returnSongToParent}
            />
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
