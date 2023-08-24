import styles from "./page.module.css";
import { Rightbar } from "@/components/Rigthbar/Rightbar";
// import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
export default function Home() {
  return (
    <main className={styles.main__container}>
      <Main />
    </main>
  );
}
