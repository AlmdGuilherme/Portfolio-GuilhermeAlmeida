import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./root.module.css";
import { ScreenWidth } from "../hooks/ScreenWidth";

export default function RootLayout() {
  const screen = ScreenWidth();

  return (
    <>
      {screen < 768 ? (
        <>
          <main className={styles.content}>
            <Outlet />
            <Navbar />
          </main>
        </>
      ) : (
        <>
          <header className={styles.navigation}>
            <Navbar />
          </header>
          <main className={styles.content}>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}
