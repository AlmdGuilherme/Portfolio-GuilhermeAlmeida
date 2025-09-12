import './MoreInfosCard.css'
import { Link } from 'react-router-dom';

export default function MoreInfosCard(props){

  return(
    <>
      <div className='card-more-infos'>
      <div className='card-infos'>
        <h2>
          {props.title}
        </h2>
        <p>
          {props.description}
        </p>
        <Link to={props.redirect}>
          {props.ButtonText}
          <ion-icon name="caret-forward-outline"></ion-icon>
        </Link>
      </div>
      <div className='card-component'>
        {props.component}
      </div>
      </div>
    </>
  )
}