import styles from "./page.module.css";
import Main from "../components/Main/Main";
export default function Home() {
  return (
    <main className={styles.main__container}>
      <Main />
    </main>
  );
}
