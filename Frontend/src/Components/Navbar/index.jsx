import { useNavigate, useLocation } from 'react-router-dom'
import { wipeIn } from '../../Utils/AnimationTrigger'
import styles from './styles.module.css'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (to) => {
    if (!to || location.pathname === to) return
    wipeIn(() => {
      navigate(to)
    })
  }

  return (
    <nav className={styles.navbar}>
      <p>
        Guilherme Almeida
      </p>
      <ul className={styles.navbar_navigation}>
        <button 
          onClick={() => handleNavigation("/")} 
          disabled={location.pathname === "/"}
        >
          Home
        </button>
        <button 
          onClick={() => handleNavigation("/projetos")} 
          disabled={location.pathname === "/projetos"}
        >
          Projetos
        </button>
        {/* <button 
          onClick={() => handleNavigation("/experiencia")} 
          disabled={location.pathname === "/experiencia"}
        >
          Experiência
        </button>
        <button 
          onClick={() => handleNavigation("/sobre")} 
          disabled={location.pathname === "/sobre"}
        >
          Sobre mim
        </button> */}
      </ul>
    </nav>
  )
}