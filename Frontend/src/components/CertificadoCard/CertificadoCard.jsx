import styles from'./styles.module.css'

export default function CertificadoCard({ modalSituation, certId, certImg, certTitle, certLocal, buttonFunction }) {

  return (
    <div key={certId} className={styles.certification_card}>
      <img src={certImg} alt="" className={styles.card_image} />
      <div className={styles.card_infos}>
        <p className={styles.card_title}>{certTitle}</p>
        <p className={styles.card_location}>{certLocal}</p>
      </div>
    </div>
  )
}