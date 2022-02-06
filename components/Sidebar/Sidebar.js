import React, { useState, useEffect } from "react";
import Visualizer from "../Visualizer/Visualizer";
import styles from "./Sidebar.module.css";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import useSpotify from "../../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../../atoms/playlistAtom";

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await spotifyApi.getUserPlaylists();
        setPlaylists(data.body.items);
      } catch (error) {
        console.error(error);
      }
    };
    if (spotifyApi.getAccessToken()) {
      fetchData();
    }
  }, [session, spotifyApi]);

  return (
    <div className={styles.sidebar}>
      <Visualizer />
      <div>
        <button className={styles.button}>
          <HomeIcon className="h-5 w-5" />
          <span className={styles.paragraph}>Home </span>
        </button>
        <button className={styles.button}>
          <SearchIcon className="h-5 w-5" />
          <span className={styles.paragraph}>Search</span>
        </button>
        <button className={styles.button}>
          <LibraryIcon className="h-5 w-5" />
          <span className={styles.paragraph}>Your Library</span>
        </button>
        <hr className={styles.break} />
        <button className={styles.button}>
          <PlusCircleIcon className="h-5 w-5" />
          <span className={styles.paragraph}>Create Playlist</span>
        </button>
        <button className={styles.button}>
          <HeartIcon className="h-5 w-5" />
          <span className={styles.paragraph}>Liked Songs</span>
        </button>
        <button className={styles.button}>
          <RssIcon className="h-5 w-5" />
          <span className={styles.paragraph}> Your Episodes</span>
        </button>
      </div>
      {playlists.map((playlist) => {
        return (
          <p
            key={playlist.id}
            className={styles.playlist}
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        );
      })}
    </div>
  );
}

export default Sidebar;
