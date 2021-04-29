import React from "react";
import Link from "next/link";
import styles from "./ContainerUser.module.css";

export default function ContainerUser({ user, handleDeleteUser }) {
  return (
    <div key={user.id} className={styles.userRow}>
      <Link key={user.id} href={`/ninjas/${user.id}`}>
        <a className={styles.single}>
          <h3>{user.name}</h3>
        </a>
      </Link>
      <button
        onClick={() => handleDeleteUser(user.id)}
        className={styles.deleteButton}
      >
        X
      </button>
    </div>
  );
}
