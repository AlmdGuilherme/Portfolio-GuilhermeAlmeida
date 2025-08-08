import { Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from './root.module.css'
import { ScreenWidth } from "../hooks/ScreenWidth";

export default function RootLayout(){
  // const [IsOpen, setIsOpen] = useState(false)

  // const navbarAction = () => {
  //   setIsOpen (state => !state)
  // }

  return(
    <>
      <header className={styles.navigation}>
        {/* <span className={`${styles.navbarMenu} ${IsOpen ? styles.openMenu : null}`} onClick={navbarAction}>
          <div></div>
          <div></div>
          <div></div>
        </span> */}
        <Navbar/>
      </header>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  )
}