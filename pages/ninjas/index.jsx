import React from "react";
import Head from "next/head";
import axios from "axios";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: { ninjas: response.data },
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: { ninja: [] },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninja List | All ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1>All ninjas</h1>
      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
}
