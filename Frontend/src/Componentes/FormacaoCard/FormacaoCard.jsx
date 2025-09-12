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
        <p>{props.descricao}</p>
        <div className='form-periodo'>
          <label htmlFor="periodo">Período: </label>
          <p>{props.periodo}</p>
        </div>
        <div className='form-local-more'>
          <div>
            <label htmlFor="local">Local: </label>
            <p>{props.local}</p>
          </div>
          <button>
            Ver detalhes
          </button>
        </div>
      </div>
    </>
  )
}