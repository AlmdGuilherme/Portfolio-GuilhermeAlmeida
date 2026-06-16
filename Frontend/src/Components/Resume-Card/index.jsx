import { useRef } from 'react'
import gsap from 'gsap'
import styles from './styles.module.css'

export default function ResumeCard({ icon, title, description, gsap_class }) {

  return (
    <div className={`${styles.resume_card} ${gsap_class}`}>
      <div className={styles.card_icon}>
        {icon}
      </div>
      <h3 className={styles.card_title}>
        {title}
      </h3>
      <p className={styles.card_description}>
        {description}
      </p>
    </div>
  )
}