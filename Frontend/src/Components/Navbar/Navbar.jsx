import styles from './Navbar.module.css'
import { ScreenWidth } from '../../hooks/ScreenWidth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about-me")
  const screenWidth = ScreenWidth()

  useEffect(() => {
    const sections = ["about-me", "formacao-academica", "certificados", "projetos"]

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
    <nav id='navbar' className={`${screenWidth <= 900 ? styles.mobile_navbar : styles.Navbar}`}>
      <ul className={styles.navbar_itens}>
        <li className={`${styles.navbar_item} ${activeSection === "about-me" ? styles.active : ''}`}>
          <button
            onClick={() => scrollToSection("about-me")}
          >
            <ion-icon className={`ion-icon ${styles.icon}`} name="home-outline"></ion-icon>
            <span>Sobre mim</span>
          </button>
        </li>
        <li className={`${styles.navbar_item} ${activeSection === "formacao-academica" ? styles.active : ''}`}>
          <button
            onClick={() => scrollToSection("formacao-academica")}
          >
            <ion-icon className={`ion-icon ${styles.icon}`} name="code-slash-outline"></ion-icon>
            <span>Formação e Habilidades</span>
          </button>
        </li>
        <li className={`${styles.navbar_item} ${activeSection === "certificados" ? styles.active : ''}`}>
          <button
            onClick={() => scrollToSection("certificados")}
          >
            <ion-icon className={`ion-icon ${styles.icon}`} name="documents-outline"></ion-icon>
            <span>Certificados</span>
          </button>
        </li>
        <li className={`${styles.navbar_item} ${activeSection === "projetos" ? styles.active : ''}`}>
          <button
            onClick={() => scrollToSection("projetos")}
          >
            <ion-icon className={`ion-icon ${styles.icon}`} name="folder-open-outline"></ion-icon>
            <span>Projetos</span>
          </button>
        </li>
        {screenWidth <= 900 && (
          <div className={styles.indicator}></div>
        )}
      </ul>
    </nav>
  )
}