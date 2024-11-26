import Image from "next/image";
import styles from "./page.module.css";
import AppSidebar from "@/pages/AppSideBar/AppSideBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AppSidebar />

      </main>
    </div>
  );
} 