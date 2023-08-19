"use client";
import styles from "./page.module.css";
import { Leftbar } from "../components/LeftBar/LeftBar";
import { Rightbar } from "../components/Rigthbar/Rightbar";
import { Header } from "../components/Header/Header";
import { Content } from "../components/Main/Content/Content";

export default function Home() {
  return (
    <main className={styles.main__container}>
      <div className={styles.main}>
        <Header />
        <Leftbar />
        <Rightbar />
        <Content />
      </div>
    </main>
  );
}
