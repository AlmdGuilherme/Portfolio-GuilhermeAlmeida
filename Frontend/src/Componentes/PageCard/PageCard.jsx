import './PageCard.css'

export default function PageCard(props) {
  return (
    <>
      <div className="page-card">
        <div className="page-title">
          <h1>{props.title}</h1>
        </div>
        <p>{props.descricao }</p>
        <a href={`#${props.link}`} className="more-button">
        Ver mais
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </a>
      </div>
    </>
  )
}