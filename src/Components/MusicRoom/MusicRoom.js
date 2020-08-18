import React, { Component } from "react";
import "./MusicRoom.css";
import { UNDER_CONSTRUCTION } from "../../Constants/Generic_Constants";

export class MusicRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="music-room">
        <h2>The Music Room</h2>
        <h4>{UNDER_CONSTRUCTION}</h4>
      </div>
    );
  }
}

export default MusicRoom;