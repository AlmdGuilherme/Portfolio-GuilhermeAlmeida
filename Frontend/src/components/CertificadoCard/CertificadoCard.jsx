import styles from './styles.module.css'

export default function CertificadoCard(props){
  const areaCertificado = () => {
      if (props.tipo === 'HTML') {
        return <p className={`${styles.html_Class} ${styles.area}`}>HTML</p>;
      } else if (props.tipo === 'CSS') {
        return <p className={`${styles.css_Class} ${styles.area}`}>CSS</p>;
      } else if (props.tipo === 'JS') {
        return <p className={`${styles.js_Class} ${styles.area}`}>JavaScript</p>
      } else if (props.tipo === 'Python'){
        return <p className={`${styles.py_Class} ${styles.area}`}>Python</p>
      } else if (props.tipo === 'TS'){
        return <p className={`${styles.ts_Class} ${styles.area}`}>TypeScript</p>
      } else if (props.tipo === 'Sass'){
        return <p className={`${styles.sass_Class} ${styles.area}`}>Sass</p>
      } else {
        return <p>{props.tipo}</p>;
      }
    };
  return(
    <div key={props.id} className={styles.card} onClick={props.modalSituation ? null : props.func}>
      <div className={styles.card_components}>
        <img src={props.img} alt="" className={styles.card_image}/>
        <div className={styles.card_subcomponents}>
          <div className={styles.card_infos}>
            {areaCertificado()}
            <p className={styles.card_local}>{props.local}</p>
          </div>
        </div>
      </div>
    </div>
  )
}