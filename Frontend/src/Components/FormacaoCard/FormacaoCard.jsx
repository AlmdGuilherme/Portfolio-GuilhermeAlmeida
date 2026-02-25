import styles from './styles.module.css'

export default function FormacaoCard({id, title, description, period, local, area}) {
  const icons = {
    'Educação': <i class="fa-solid fa-graduation-cap"></i>,
    'Língua Estrangeira': <i class="fa-solid fa-language"></i>,
    'Desenvolvimento Web': <i class="fa-solid fa-code"></i>
  }

  const icon = icons[area] || null


  return (
    <>
      <div className={styles.educational_card} key={id}>
        <div className={styles.card_icon}>
          {icon}
        </div>
        <div className={styles.card_title}>
          {local}
          {" | "}
          {title}
        </div>
        <button className={styles.card_button}>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </button>
      </div>
    </>
  )
}