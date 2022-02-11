import React from "react";
import styles from "./SignOut.module.css";
import { signOut } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

const SignOut = () => {
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <div className={styles.container} onClick={() => signOut()}>
        <img
          src={
            session?.user.image
              ? session.user.image
              : "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
          }
          className={styles.avatar}
          alt="avatar"
        />
        <h2 className={styles.username}>{session?.user.name}</h2>
        <ChevronDownIcon className={styles.icon} />
      </div>
    </header>
  );
};

export default SignOut;
