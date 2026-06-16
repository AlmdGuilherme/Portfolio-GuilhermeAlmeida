import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p>
        Guilherme Almeida
      </p>
      <ul className={styles.navbar_navigation}>
        <Link to={"/"}>
          Home
        </Link>
        <Link to={"/projetos"}>
          Projetos
        </Link>
        <Link>
          Experiência
        </Link>
        <Link>
          Sobre mim
        </Link>
      </ul>
    </nav>
  )
}