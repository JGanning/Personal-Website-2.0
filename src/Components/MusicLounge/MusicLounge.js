import React, { useState, useEffect } from "react";

import Header from "./Graphics/Header";
import Graphics from "./Graphics/Graphics";
import Actions from "./Playlist/Actions";
import Playlist from "./Playlist/Playlist";
import Controls from "./Controls";
import PlayerState from "./MusicLounge_State_MGMT/playerState";

function MusicLounge() {

  return (
    <PlayerState>
      <div className="test-main">
        <div className="top">
          <div className="row no-margin">
            <div className="left col-lg-9 no-padding">
            <h2 className="home-header">The Music Lounge</h2>
              <Header />
              <Graphics />
              <Controls />
            </div>
            <div className="right col-lg-3 no-padding">
              <Actions />
              <Playlist />
            </div>
          </div>
        </div>
      </div>
    </PlayerState>
  );
}

export default MusicLounge;
