import { useState } from 'react'
import styles from './styles.module.css'

export default function FormacaoCard(props){
  const [formShown, setFormShown] = useState(null)

  const formacoes = props.formacao

  const showFormacao = (form) => {
    setFormShown(form)
  }

  return(
      <div className={styles.formacao_card}>
        <div className={styles.formacao_options}>
          {formacoes && formacoes.map(form => (
            <p key={form.id} 
              onClick={() => showFormacao(form)}
              className={formShown && formShown.id === form.id && styles.active}
            >
              {form.nome}
            </p>
          ))}
        </div>
        <div className={styles.formacao_text}>
          {formShown ? (
            <div className={styles.informations}>
              <div className={styles.formacao_info}>
                <div>
                  <label htmlFor="formacao">Formação:</label>
                  <p>{formShown.nome}</p>
                </div>
                <div>
                  <label htmlFor="local">Local:</label>
                  <p>{formShown.local}</p>
                </div>
                <div>
                  <label htmlFor="periodo">Período:</label>
                  <p>{formShown.periodo}</p>
                </div>
              </div>
              <div className={styles.formacao_desc}>
                {formShown.descricao}
              </div>
            </div>
          ) : (
            <h2>Selecione uma das opções acima.</h2>
          )}
        </div>
      </div>
  )
}