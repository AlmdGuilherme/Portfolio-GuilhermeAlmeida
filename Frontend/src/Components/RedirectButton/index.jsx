import styles from './styles.module.css'

export default function RedirectButton({children, redirectId}) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <a onClick={() => scrollToSection(redirectId)} className={styles.card_details_button}>
      {children}
    </a>
  )
}