import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify";

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentIdTrack, setCurrentIdTrack] = useRecoilState(
    currentTrackIdState
  );
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentIdTrack) {
          const data = await fetch(
            `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
            {
              headers: {
                Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
              },
            }
          ).then((res) => res.json());
          setSongInfo(data);
        }
      } catch (error) {}
    };
    fetchData();
  }, [currentIdTrack, spotifyApi]);
  return songInfo;
};

export default useSongInfo;
