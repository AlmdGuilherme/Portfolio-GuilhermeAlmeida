import './InformationCard.css'

export default function InformationCard(props){
  return(
    <div className='information-card'>
      <h2>{props.title}</h2>
      <p>{props.information}</p>
    </div>
  )
}