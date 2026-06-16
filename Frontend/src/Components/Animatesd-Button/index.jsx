import { useRef } from 'react'
import gsap from 'gsap'
import styles from './styles.module.css'

export default function AnimatedButton({ text, scroll_to, gsap_class = '' }) {
  const spanRef = useRef(null)

  function setPosition(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    gsap.set(spanRef.current, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      xPercent: -50,
      yPercent: -50
    })
  }

  function handleMouseEnter(e) {
    setPosition(e)

    gsap.to(spanRef.current, {
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    })
  }

  function handleMouseMove(e) {
    setPosition(e)
  }

  function handleMouseLeave(e) {
    setPosition(e)

    gsap.to(spanRef.current, {
      scale: 0,
      duration: 1,
      ease: 'power3.out'
    })
  }

  return (
    <a
      href={scroll_to}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${gsap_class} ${styles.animated_button}`}
    >
      <span ref={spanRef} className={styles.animated_span} />
      <span className={styles.btn_text}>{text}</span>
    </a>
  )
}