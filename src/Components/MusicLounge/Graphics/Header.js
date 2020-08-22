import React, { useContext } from "react";
import playerContext from "../MusicLounge_State_MGMT/playerContext";

export const Header = () => {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div>
      {songs && songs[currentSong] ? (
        <h2 className="musicroom-header">
          Now Playing: {songs[currentSong].title}
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
