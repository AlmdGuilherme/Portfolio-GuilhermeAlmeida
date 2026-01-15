import styles from './Navbar.module.css'
import { ScreenWidth } from '../../hooks/ScreenWidth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about-me")
  const screenWidth = ScreenWidth()

  useEffect(() => {
    const sections = ["about-me", "formacao-academica", "certificados", "habilidades", "projetos"]

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0
    })

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav id='navbar' className={`${screenWidth <= 768 ? styles.mobile_navbar : styles.Navbar}`}>
      <ul className={styles.navbar_itens}>
        <li className={styles.navbar_item}>
          <button
            onClick={() => scrollToSection("about-me")}
            className={activeSection === "about-me" ? styles.active : ''}
          >
            <ion-icon className='ion-icon' name="home-outline"></ion-icon>
            <span>Sobre mim</span>
          </button>
        </li>
        <li className={styles.navbar_item}>
          <button
            onClick={() => scrollToSection("formacao-academica")}
            className={activeSection === "formacao-academica" ? styles.active : ''}
          >
            <ion-icon className='ion-icon' name="school-outline"></ion-icon>
            <span>Formação Academica</span>
          </button>
        </li>
        <li className={styles.navbar_item}>
          <button
            onClick={() => scrollToSection("certificados")}
            className={activeSection === "certificados" ? styles.active : ''}
          >
            <ion-icon className='ion-icon' name="documents-outline"></ion-icon>
            <span>Certificaos</span>
          </button>
        </li>
        <li className={styles.navbar_item}>
          <button
            onClick={() => scrollToSection("habilidades")}
            className={activeSection === "habilidades" ? styles.active : ''}
          >
            <ion-icon className='ion-icon' name="code-slash-outline"></ion-icon>
            <span>Habilidades</span>
          </button>
        </li>
        <li className={styles.navbar_item}>
          <button
            onClick={() => scrollToSection("projetos")}
            className={activeSection === "projetos" ? styles.active : ''}
          >
            <ion-icon className='ion-icon' name="folder-open-outline"></ion-icon>
            <span>Projetos</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}