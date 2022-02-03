import React, { useState, useEffect } from "react";
import styles from "./Center.module.css";
import Songs from "../Songs/Songs";
import SignOut from "../SignOut/Signout";
import { shuffle } from "lodash";
import { useSession } from "next-auth/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../../atoms/playlistAtom";
import useSpotify from "../../hooks/useSpotify";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const Center = () => {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();

  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    // Loads randomized color for background everytime playlist changes
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    // Retrieves list of items within a playlistd
    const fetchData = async () => {
      try {
        const data = await spotifyApi.getPlaylist(playlistId);
        setPlaylist(data.body);
      } catch (error) {
        console.error(error);
      }
    };
    if (spotifyApi.getAccessToken()) {
      fetchData();
    }
  }, [spotifyApi, playlistId]);

  return (
    <div className={styles.center}>
      <SignOut />
      <section
        className={`${styles.section} bg-gradient-to-b to-black ${color} `}
      >
        <img
          src={playlist?.images?.[0]?.url}
          className={styles.playlistImage}
          alt=""
        />
        <div className={styles.playlistContainer}>
          <p>PLAYLIST</p>
          <h2 className={styles.playlistTitle}>{playlist?.name}</h2>
        </div>
      </section>
      <div className={styles.songContainer}>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
