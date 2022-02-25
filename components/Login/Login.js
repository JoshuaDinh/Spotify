import React from "react";
import styles from "./Login.module.css";
import Visualizer from "../Visualizer/Visualizer";

export default function Login({ providers, signIn }) {
  return (
    <div className={styles.login}>
      <Visualizer />
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              className={styles.button}
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider?.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
