import CertificationContent from '../CertificationContent/CertificationContent'
import './CertificationModal.css'

export default function CertificationModal({ isOpen, onClose, certificado }) {
  const modal_class = isOpen ? 'opened' : 'closed'

  const base_url = `https://portfolio-backend-omega-woad.vercel.app/`
  return (
    <>
      <div className={`modal-${modal_class}`}>
        <div className='modal-body'>
          <span className='modal-top-left'></span>
          <span className='modal-top-right'></span>
          <button onClick={onClose} className='modal-button'>
            <ion-icon name="close-outline"></ion-icon>
            Fechar
          </button>
          <div className='modal-certification-data'>
            <img 
              src={certificado ? `${base_url}${certificado.imagem}` : ''} alt="" 
              className='w-[40rem]'
            />
            <div className='modal-certification-infos'>
              <div className='modal-certification-fields'>
                <label htmlFor="">Título: </label>
                <h2>{certificado?.titulo}</h2>  
              </div>
              <div className='modal-certification-fields'>
                <label htmlFor="">Local: </label>
                <h2>{certificado?.local}</h2>
              </div>
              <div className='modal-certification-fields'>
                <label htmlFor="">Carga horária:</label>
                <h2>{certificado?.tempo}</h2>
              </div>
              <div className='modal-certification-fields'>
                <label htmlFor="">Conteúdo:</label>
                <CertificationContent
                  lista={certificado?.conteudo}  
                />
              </div>
            </div>
          </div>
          <span className='modal-bottom-right'></span>
          <span className='modal-bottom-left'></span>
        </div>
      </div>
    </>
  )
}