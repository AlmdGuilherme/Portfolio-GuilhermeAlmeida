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
      <div className={`${styles.form_card}`} key={id}>
        <div className={`${styles.card_header}`}>
          <span>
            {icon}
          </span>
          <p>{title}</p>
        </div>
        <div className={`${styles.card_info}`}>
          <div className={`${styles.card_sub_title}`}>
            <p>{local}</p>
            {"|"}
            <p>{period}</p> 
          </div>
          <p className='text-sm text-justify'>{description}</p>
          <button className={`${styles.more_btn}`} disabled>
            Ver Mais
          </button>
        </div>
        <div className={`${styles.form_card_border} ${styles.border_tl}`}></div>
        <div className={`${styles.form_card_border} ${styles.border_tr}`}></div>
        <div className={`${styles.form_card_border} ${styles.border_br}`}></div>
        <div className={`${styles.form_card_border} ${styles.border_bl}`}></div>
      </div>
    </>
  )
}