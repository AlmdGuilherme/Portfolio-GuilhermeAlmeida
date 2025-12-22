import './PageCard.css'

export default function PageCard({cardTitle, cardDescription, cardLink}) {
  return (
    <>
      <div className="page-card">
        <div className="page-title">
          <h1>{cardTitle}</h1>
        </div>
        <p>{cardDescription}</p>
        <a href={`#${cardLink}`} className="more-button">
        Ver mais
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </a>
      </div>
    </>
  )
}