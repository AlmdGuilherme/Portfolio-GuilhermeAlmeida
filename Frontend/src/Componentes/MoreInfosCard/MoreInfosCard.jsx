import RedirectButton from '../RedirectButton'
import './MoreInfosCard.css'

export default function MoreInfosCard({title, description, buttonText, redirectId, component}){

  return(
    <>
      <div className='card-more-infos'>
      <div className='card-infos'>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>
        <RedirectButton redirectId={redirectId}>
          {buttonText}
          <ion-icon name="caret-forward-outline"></ion-icon>
        </RedirectButton>
      </div>
      <div className='card-component'>
        {component}
      </div>
      </div>
    </>
  )
}