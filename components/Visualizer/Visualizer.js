import React from "react";
import styles from "./Visualizer.module.css";

const Visualizer = () => {
  return (
    <div className={styles.container}>
      <div class={styles.loader}>
        <div class={styles.rectangle1}></div>
        <div class={styles.rectangle2}></div>
        <div class={styles.rectangle3}></div>
        <div class={styles.rectangle4}></div>
        <div class={styles.rectangle5}></div>
        <div class={styles.rectangle6}></div>
        <div class={styles.rectangle5}></div>
        <div class={styles.rectangle4}></div>
        <div class={styles.rectangle3}></div>
        <div class={styles.rectangle2}></div>
        <div class={styles.rectangle1}></div>
      </div>
    </div>
  );
};

export default Visualizer;
