import React from "react";
import styles from "./Visualizer.module.css";

const Visualizer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.rectangle1}></div>
        <div className={styles.rectangle2}></div>
        <div className={styles.rectangle3}></div>
        <div className={styles.rectangle4}></div>
        <div className={styles.rectangle5}></div>
        <div className={styles.rectangle6}></div>
        <div className={styles.rectangle5}></div>
        <div className={styles.rectangle4}></div>
        <div className={styles.rectangle3}></div>
        <div className={styles.rectangle2}></div>
        <div className={styles.rectangle1}></div>
      </div>
    </div>
  );
};

export default Visualizer;
