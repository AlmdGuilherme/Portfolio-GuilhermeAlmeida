import { useState } from 'react'
import './CertificadoCard.css'

export default function CertificadoCard({modalSituation, certId, certImg, certTitle, certLocal, buttonFunction}){
  const [isMouseOn, setIsMouseOn] = useState(false)

  console.log(isMouseOn)

  return(
    <div key={certId} className='cert-card' onMouseEnter={() => setIsMouseOn(true)} onMouseLeave={() => setIsMouseOn(false)}>
      <img src={certImg} alt="" className='card-image'/>
      <div className='cert-card-infos'>
        <p className='cert-card-title'>{certTitle}</p>
        {isMouseOn ? (
          <p onClick={modalSituation ? null : buttonFunction} className='cert-more-details'>
            Ver detalhes &#129170;
          </p>
        ) : (
          <p className='cert-card-local'>{certLocal}</p>
        )}
      </div>
    </div>
  )
}
