import styles from './styles.module.css'

export default function LandingCard({ icon, title, description, width, height, left, top, index, perspective, yRotation, xRotation, gsap_class }) {
  return (
    <>
      <div
        className={`${styles.landing_card} ${gsap_class}`}
        style={{
          width: `${width}`,
          height: `${height}`,
          position: 'absolute',
          left: `${left}%`,
          top: `${top}%`,
          zIndex: `${index}`,
          transform: `perspective(${perspective}) rotateY(${yRotation}deg) rotateX(${xRotation}deg)`
        }}
      >
        <div className={styles.card_header}>
          <div className={styles.card_icon}>
            {icon}
          </div>
          <h2>
            {title}
          </h2>
        </div>  
        <p className={styles.card_description}>
          {description}
        </p>
      </div>
    </>
  )
}