import './MoreInfosCard.css'
import { Link } from 'react-router-dom';

export default function MoreInfosCard({title, description, buttonText, redirectId, component}){
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
        <button onClick={() => scrollToSection(redirectId)}>
          {buttonText}
          <ion-icon name="caret-forward-outline"></ion-icon>
        </button>
      </div>
      <div className='card-component'>
        {component}
      </div>
      </div>
    </>
  )
}