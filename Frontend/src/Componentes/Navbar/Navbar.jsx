import styles from './Navbar.module.css'
import { BrowserRouter, Link, Route, useLocation} from "react-router-dom";
import { ScreenWidth } from '../../hooks/ScreenWidth';

const repoName = 'Portfolio-GuilhermeAlmeida'

export default function Navbar(){
  const screenWidth = ScreenWidth()
  const pageLink = useLocation()
  return(
    <nav id='navbar' className={`${screenWidth <= 768 ? styles.mobile_navbar : styles.Navbar}`}>
      <ul className={styles.navbar_itens}>
        <li className={styles.navbar_item}>
          <Link to={`/`} 
                className={pageLink.pathname === `/` ? styles.active : '' }
          >
            <ion-icon className='ion-icon' name="home-outline"></ion-icon>
            <span>Sobre mim</span>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link to={`/formacao-academica`} 
                className={pageLink.pathname === `/formacao-academica` ? styles.active : '' }
          >
            <ion-icon className='ion-icon' name="school-outline"></ion-icon>
            <span>Formação Academica</span>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link to={`/habilidades`}
                className={pageLink.pathname === `/habilidades` ? styles.active : '' }
          >
            <ion-icon className='ion-icon' name="code-slash-outline"></ion-icon>
            <span>Habilidades</span>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link>
            <ion-icon className='ion-icon' name="documents-outline"></ion-icon>
            <span>Projetos</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}