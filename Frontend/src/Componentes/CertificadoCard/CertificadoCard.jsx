import styles from './styles.module.css'

export default function CertificadoCard(props){
  const tipos = {
    "HTML": <p className={`${styles.html_Class} ${styles.area}`}>HTML</p>,
    "CSS": <p className={`${styles.css_Class} ${styles.area}`}>CSS</p>,
    "JS": <p className={`${styles.js_Class} ${styles.area}`}>JavaScript</p>,
    "Python": <p className={`${styles.py_Class} ${styles.area}`}>Python</p>,
    "TS": <p className={`${styles.ts_Class} ${styles.area}`}>TypeScript</p>,
    "Sass": <p className={`${styles.sass_Class} ${styles.area}`}>Sass</p>
  }

  const areaCertificado = props.tipo in tipos ? tipos[props.tipo] : <p>{props.tipo}</p>

  return(
    <div key={props.id} className={styles.card} onClick={props.modalSituation ? null : props.func}>
      <div className={styles.card_components}>
        <img src={props.img} alt="" className={styles.card_image}/>
        <div className={styles.card_subcomponents}>
          <div className={styles.card_infos}>
            {areaCertificado}
            <p className={styles.card_local}>{props.local}</p>
          </div>
        </div>
      </div>
    </div>
  )
}