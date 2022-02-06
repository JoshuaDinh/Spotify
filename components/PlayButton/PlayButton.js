import React from "react";
import styles from "./PlayButton.module.css";
import { HeartIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

const PlayButton = () => {
  return (
    <div className={styles.container}>
      <PlayIcon className={styles.playIcon} />
      <HeartIcon className={styles.heartIcon} stroke="rgb(110, 110, 110)" />
      <DotsHorizontalIcon
        className={styles.dotsIcon}
        stroke="rgb(110, 110, 110)"
      />
    </div>
  );
};

export default PlayButton;
