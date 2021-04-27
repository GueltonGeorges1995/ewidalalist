import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          quibusdam sint, incidunt quaerat, odit, rerum cumque architecto libero
          nam commodi est aliquam. Ea et nobis nemo aliquam itaque consequuntur
          voluptas!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          excepturi obcaecati unde cumque, at nam dignissimos qui explicabo
          maiores minima, eum, voluptas hic ducimus molestiae magnam? Fuga
          reiciendis aliquid ipsum!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas lising</a>
        </Link>
      </div>
    </>
  );
}
