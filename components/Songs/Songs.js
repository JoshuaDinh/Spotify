import React from "react";
import styles from "./Songs.module.css";
import Song from "../Song/Song";
import { playlistState } from "../../atoms/playlistAtom";
import { useRecoilValue } from "recoil";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className={styles.songs}>
      {playlist?.tracks.items.map((track, index) => {
        return <Song key={track.track.id} order={index} track={track} />;
      })}
    </div>
  );
};

export default Songs;
