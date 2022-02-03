import React from "react";
import styles from "./Song.module.css";
import { useRecoilState } from "recoil";
import { isPlayingState, currentTrackIdState } from "../../atoms/songAtom";
import { millisToMinutesAndSeconds } from "../../lib/time";
import useSpotify from "../../hooks/useSpotify";

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(
    currentTrackIdState
  );
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(track.track.id);
    setIsPlaying(true);
    spotifyApi.play({ uris: [track.track.uri] });
  };

  return (
    <div className={styles.song}>
      <div className={styles.container} onClick={playSong}>
        <p>{order + 1}</p>
        <img
          className={styles.image}
          src={track.track.album.images[0].url}
          alt=""
          d
        />
        <div className={styles.track}>
          <p>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>

      <div className={styles.album}>
        <p className={styles.albumName}>{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
