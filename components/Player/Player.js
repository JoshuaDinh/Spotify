import { useEffect, useState } from "react";
import styles from "./Player.module.css";
import useSongInfo from "../../hooks/useSongInfo";
import useSpotify from "../../hooks/useSpotify";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { isPlayingState, currentTrackIdState } from "../../atoms/songAtom";

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

  return (
    <div className={styles.player}>
      {/* Left Side of Player */}
      <div>
        <img
          className={styles.image}
          src={songInfo?.album.images?.[0]?.url}
          alt=""
        />
      </div>
    </div>
  );
};

export default Player;
