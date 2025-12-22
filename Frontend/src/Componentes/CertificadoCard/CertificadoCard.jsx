import './CertificadoCard.css'

export default function CertificadoCard({modalSituation, certId, certImg, certTitle, certLocal, buttonFunction}){
  return(
    <div key={certId} className='cert-card' >
      <img src={certImg} alt="" className='card-image'/>
      <div className='cert-card-infos'>
        <p className='cert-card-title'>{certTitle}</p>
        <p className='cert-card-local'>{certLocal}</p>
        <p onClick={modalSituation ? null : buttonFunction} className='cert-more-details'>
          Ver detalhes &#129170;
        </p>
      </div>
    </div>
  )
}
