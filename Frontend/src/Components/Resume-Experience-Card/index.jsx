import styles from './styles.module.css'

export default function ResumeExperienceCard({image, title, local, period}) {
  return (
    <>
    <div className={styles.experience_card}>
      <img src={image} className={styles.card_image}/>
      <div className={styles.card_data}>
        <h2>
          {title}
        </h2>
        <span className="flex gap-2">
          <p>{local}</p>
          {"|"}
          <p>{period}</p>
        </span>
      </div>
    </div>
  
    </>
  )
}