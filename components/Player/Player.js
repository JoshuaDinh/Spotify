import { useEffect, useState, useCallback } from "react";
import styles from "./Player.module.css";
import { debounce } from "lodash";
import useSongInfo from "../../hooks/useSongInfo";
import useSpotify from "../../hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { isPlayingState, currentTrackIdState } from "../../atoms/songAtom";
import {
  FastForwardIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeOffIcon,
} from "@heroicons/react/outline";
import { PlayIcon, PauseIcon, VolumeUpIcon } from "@heroicons/react/solid";

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(
    currentTrackIdState
  );
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  // Custom Hook to retrieve song details
  const songInfo = useSongInfo();

  //Use song details to get player controls
  const fetchCurrentSong = async () => {
    if (!songInfo) {
      try {
        const currentTrack = await spotifyApi.getMyCurrentPlayingTrack();
        console.log(`Now Playing: ${currentTrack.body?.item}`);
        setCurrentTrackId(currentTrack.body?.item?.id);
        const playbackState = await spotifyApi.getMyCurrentPlaybackState();
        setIsPlaying(playbackState.body?.is_playing);
      } catch (err) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackId, spotifyApi, session]);

  //Handles Volume controls
  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);

  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((error) => {
        console.error(error);
      });
    }, 500),
    []
  );

  // Handles Playing and pausing of current track
  const handlePlayPause = async () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  return (
    <div
      className={`${styles.player}  bg-gradient-to-b from-white to-gray-400`}
    >
      {/* Left side of Player  Track details */}
      <div className={styles.leftContainer}>
        <img
          className={styles.image}
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
        <div className={styles.wrapper}>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      {/* Center of Player Current Track Controls */}
      <div className={styles.centerContainer}>
        <SwitchHorizontalIcon className={styles.button} />
        <RewindIcon className={styles.button} />
        {isPlaying ? (
          <PauseIcon onClick={handlePlayPause} className={styles.innerButton} />
        ) : (
          <PlayIcon onClick={handlePlayPause} className={styles.innerButton} />
        )}
        <FastForwardIcon className={styles.button} />
        <ReplyIcon className={styles.button} />
      </div>

      {/* Right side of Player - Volume controls */}
      <div className={styles.rightContainer}>
        <VolumeOffIcon
          className={styles.button}
          onClick={() => volume > 0 && setVolume(volume - 10)}
        />
        <input
          type="range"
          min={0}
          max={100}
          onChange={(e) => {
            setVolume(Number(e.target.value));
          }}
        />
        <VolumeUpIcon
          className={styles.button}
          onClick={() => volume < 100 && setVolume(volume + 10)}
        />
      </div>
    </div>
  );
};

export default Player;
