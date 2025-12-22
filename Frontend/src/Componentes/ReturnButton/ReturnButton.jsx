import { Link } from "react-router-dom";
import './ReturnButton.css'

export default function ReturnButton(props) {
  return (
    <Link to={props.backLink} className="return-button">
      <ion-icon name="arrow-back-circle-outline"></ion-icon>
      Voltar
    </Link>
  )
}