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
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.sidebar}>
      <div>
        <button className={styles.button} onClick={() => signOut()}>
          <span className={styles.paragraph}>LogOut</span>
        </button>
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
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
      <div>playlist</div>
    </div>
  );
}

export default Sidebar;
