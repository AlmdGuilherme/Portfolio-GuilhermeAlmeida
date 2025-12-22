import { Link } from 'react-router-dom'
import './FormacaoCard.css'

export default function FormacaoCard(props) {
  const icons = {
    'Educação': <i class="fa-solid fa-graduation-cap"></i>,
    'Língua Estrangeira': <i class="fa-solid fa-language"></i>,
    'Desenvolvimento Web': <i class="fa-solid fa-code"></i>
  }

  const icon = icons[props.area] || null


  return (
    <>
      <div className='form-card'>
        <h1>{props.title}</h1>
        <div className='form-informations'>
          <div>
            <label htmlFor="periodo">Período: </label>
            <p>{props.periodo}</p>
          </div>
          <div>
            <label htmlFor="local">Local: </label>
            <p>{props.local}</p>
          </div>
        </div>
        <div className='form-description'>
          <p>{props.descricao}</p>
        </div>
        <div className='form-card-border border-tl'></div>
        <div className='form-card-border border-tr'></div>
        <div className='form-card-border border-br'></div>
        <div className='form-card-border border-bl'></div>
      </div>
    </>
  )
}