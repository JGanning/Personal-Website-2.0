import React, { useContext } from "react";
import playerContext from "../MusicLounge_State_MGMT/playerContext";

export const Graphics = (props) => {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div className="graphics">
      <img
        src={require("../../../assets/img/" + songs[currentSong].album)}
        alt="album"
        width="80%"
        height="500px"
        className="album"
      />
    </div>
  );
};

export default Graphics;
