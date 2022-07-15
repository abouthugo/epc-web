import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sample from "../components/Sample";
import styles from "../styles/Home.module.css";
import AnnouncementBar from "../components/AnnouncementBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EPC | The church of the community</title>
        <meta
          name="description"
          content="Evangelical Pentecostal Church, the church of the community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sample />
        <AnnouncementBar />
      </main>
    </div>
  );
};

export default Home;