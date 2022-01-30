import React from "react";
import styles from "./Login.module.css";

export default function Login({ providers, signIn }) {
  return (
    <div className={styles.login}>
      <img className={styles.img} src="https:links.papareact.com/9xl" alt="" />
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
