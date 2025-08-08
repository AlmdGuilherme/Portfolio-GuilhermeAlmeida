import styles from './styles.module.css'

export default function Modal(props){
  if(!props.cert) return null


  const certificado = props.cert
  const url = "https://portfolio-backend-omega-woad.vercel.app/"

  return(
    <div className={props.isOpen ? styles.open_modal :styles.modal}>
      <div className={styles.modal_header}>
        <span onClick={props.func}>
          &times;
        </span>
      </div>
      <div className={styles.modal_content}>
        <div className={styles.modal_info_group}>
          <img src={`${url}${certificado.imagem}`} alt="" />
          <div className={styles.certfication_infos}>
            <div>
              <label htmlFor="">Local:</label>
              <p>{certificado.local}</p>
            </div>
            <div>
              <label htmlFor="">Conteúdo:</label>
              <p>{certificado.tipo}</p>
            </div>
            <div>
              <label htmlFor="">Carga Horária:</label>
              <p>{certificado.tempo}</p>
            </div>
          </div>
        </div>
        <div className={styles.certificado_content}>
          <label htmlFor="">Tópicos:</label>
          <ul>
            {certificado.conteudo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}