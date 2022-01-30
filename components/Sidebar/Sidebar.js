import React from "react";
import styles from "./Sidebar.module.css";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <button className={styles.button}>
          <HomeIcon className="h-5 w-5" />
          <p className={styles.paragraph}>Home</p>
        </button>
        <button className={styles.button}>
          <SearchIcon className="h-5 w-5" />
          <p className={styles.paragraph}>Search</p>
        </button>
        <button className={styles.button}>
          <LibraryIcon className="h-5 w-5" />
          <p className={styles.paragraph}>Your Library</p>
        </button>
        <hr className={styles.break} />
        <button className={styles.button}>
          <PlusCircleIcon className="h-5 w-5" />
          <p className={styles.paragraph}>Create Playlist</p>
        </button>
        <button className={styles.button}>
          <HeartIcon className="h-5 w-5" />
          <p className={styles.paragraph}>Liked Songs</p>
        </button>
        <button className={styles.button}>
          <RssIcon className="h-5 w-5" />
          <p className={styles.paragraph}>Your Episodes</p>
        </button>
      </div>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
      <p>playlist</p>
    </div>
  );
};

export default Sidebar;
