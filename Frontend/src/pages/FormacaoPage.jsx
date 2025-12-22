import FormacaoCard from "../Componentes/FormacaoCard/FormacaoCard"
import CertificadoCard from '../Componentes/CertificadoCard/CertificadoCard'
import PageCard from '../Componentes/PageCard/PageCard'
import LetterGlitch from "../Componentes/Backgrounds/LetterGlitch/LetterGlitch"
import { useEffect, useState } from "react"
import CertificationModal from "../Componentes/CertificationModal/CertificationModal"
import Loader from '../Componentes/Loader/Loader'

export default function FormacaoPage() {
  const [loading, setLoading] = useState(true)
  const [formacoes, setFormacoes] = useState([])
  const [certificados, setCertificados] = useState([])
  const [isModalCOpen, setIsModalCOpen] = useState(false)
  const [certificadoSelecionado, setCertificaSelecionado] = useState(null)

  const carregar_dados = async () => {
    try {
      setLoading(true)
      const res = await fetch("https://portfolio-backend-omega-woad.vercel.app/api/formacao-academica");

      if (!res.ok) {
        throw new Error(`HTTP Erro! Status: ${res.status}`);
      }

      const json = await res.json();
      setCertificados(json.certificados);
      setFormacoes(json.formacao)
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setErro(error.message);
    } finally {
      setLoading(false)
    }
  };
  
  useEffect(() => {
    carregar_dados();
  }, []);
  

  const openModal = (certification) => {
    setCertificaSelecionado(certification)
    setIsModalCOpen(true)
  }

  const closeModal = () => {
    setIsModalCOpen(false)
  }

  const url = 'https://portfolio-backend-omega-woad.vercel.app'
  if (loading) {
    return (
      <Loader/>
    )
  }

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-6 overflow-hidden">
        <div className="w-full h-[100dvh] relative">
          <LetterGlitch
            glitchColors={['#202020', '#07001A', '#2A0075']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
          />
          <PageCard
            cardTitle="Formação Acadêmica e Certificados"
            cardDescription="Veja um pouco mais da minha trajetória e conhecimentos adquiridos até o momento"
            cardLink="formacao-academica"
          />
        </div>
        <div className="w-full h-auto pt-8 pb-8 bg-gradient-to-b from-zinc-gray-900 to-zinc-800
            flex flex-col items-center justify-center gap-20 max-md:pb-[8rem]" id="formacao-academica">
          <div className="w-[90%] h-auto flex flex-col items-center justify-center gap-4">
            <p className="text-4xl font-bold self-baseline">Formação Acadêmica</p>
            <div className="flex flex-wrap gap-6 w-full items-center justify-center">
              {formacoes && formacoes.map(form => (
                <FormacaoCard
                  key={form.id}
                  id={form.id}
                  title={form.nome}
                  descricao={form.descricao}
                  periodo={form.periodo}
                  local={form.local}
                />
              ))}
            </div>
          </div>
          <div className="w-[90%] flex flex-col items-center justify-center gap-4">
            <p className="text-4xl font-bold self-baseline">Certificados</p>
            <div className="flex flex-wrap gap-2 gap-y-4 w-full items-center justify-center">
              { certificados && certificados.map(cert => (
                <CertificadoCard
                  key={cert.id}
                  certd={cert.id}
                  certImg={`${url}${cert.local_image}`}
                  certTitle={cert.titulo}
                  certLocal={cert.local}
                  modalSituation={isModalCOpen}
                  buttonFunction={() => openModal(cert)}
                />
              ))}
            </div>
          </div>
        </div>
        <CertificationModal
          isOpen={isModalCOpen}
          onClose={closeModal}
          certificado={certificadoSelecionado}
        />
      </div >
    </>
  )
}