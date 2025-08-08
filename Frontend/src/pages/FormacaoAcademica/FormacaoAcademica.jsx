import { useState } from "react";
import GradientText from "../../components/GradientText/GradientText";
import OneBitCodeLogo from '../../assets/OneBitCode-Logo.png'
import Loader from "../../components/Loader/Loader";
import DataReturn from "../../components/DataReturn/DataReturn";
import CertificadoCard from "../../components/CertificadoCard/CertificadoCard";
import { useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import FormacaoCard from "../../components/FormacaoCard/FormacaoCard";

export default function FormacaoAcademica(){
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalAction, setModalAction] = useState(false)
  const [certShown, setCertShown] = useState(null)

  const modalState = (cert) => {
    setCertShown(cert)
    setModalAction(true)
    console.log(cert)
  }

  const closeModal = () => {
    setCertShown(null)
    setModalAction(false)
  }
  

  useEffect(() => {
    fetch(`https://portfolio-backend-omega-woad.vercel.app/api/formacao-academica`)
    .then((res) => {
      if (!res.ok) {
        throw new Error (`HTTP erro! Status: ${res.status}`)
      }
      return res.json()
    }).then((data) => {
      setDados(data)
      setLoading(false)
    }).catch((error) => {
      setError(error)
      setLoading(false)
    })
  }, [])
  
  if (loading) {
    return <Loader/>
  }

  if (error) {
    return (
      <DataReturn text={`Erro ao carregar dados - Error: ${error.message}`} />
    );
  }

  return(
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center gap-4 text-center">
        <GradientText
          animationSpeed={9}
          colors={["#566573", "#fff", "#566573", "#fff", "#566573"]}
        >
          Formação Acadêmica
        </GradientText>
        <div className="w-[95%] h-auto flex flex-col items-center justify-center gap-4">
          <div className="w-full h-auto flex items-center justify-center ">
            <FormacaoCard
              formacao = {dados.formacao}
            />
          </div>
          <GradientText
            animationSpeed={9}
            colors={["#566573", "#fff", "#566573", "#fff", "#566573"]}
          >
            Certificados
          </GradientText>
          <div className="w-[80%] h-auto flex items-center justify-between flex-wrap gap-2 sm:gap-2 sm:justify-evenly">
            {dados && dados.certificados && dados.certificados.map(cert => (
              <CertificadoCard 
                id={cert.id}
                img={OneBitCodeLogo}
                tipo={cert.tipo}
                local={cert.local}
                modalSituation={modalAction}
                func={() => modalState(cert)}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal 
        cert={certShown}
        isOpen={modalAction}
        func={closeModal}
      />
    </>
  )
}