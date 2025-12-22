import { useParams } from "react-router-dom"
import ReturnButton from "../Componentes/ReturnButton/ReturnButton"
import { useEffect, useState } from "react"
import Loader from '../Componentes/Loader/Loader'
import LetterGlitch from '../Componentes/Backgrounds/LetterGlitch/LetterGlitch'

export default function CertificationPage() {
  const [certification, setCertification] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { certId } = useParams()

  useEffect(() => {
    fetch(`https://portfolio-backend-omega-woad.vercel.app/api/certificado/${certId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar certificado -', response.status)
        }
        return response.json()
      })
      .then(data => {
        setCertification(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loader />
  }

  const base_url = `https://portfolio-backend-omega-woad.vercel.app/`

  return (
    <>
      <div className="w-full h-[100dvh] relative overflow-y-auto">
        <LetterGlitch
          glitchColors={['#202020', '#07001A', '#2A0075']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
        <ReturnButton backLink="/formacao-academica" />
        <div className="absolute top-[20%] p-8 h-auto w-full flex flex-wrap items-center justify-center gap-2">
            <img src={`${base_url}${certification.image}`} alt="" className="w-[35rem]"/>
            <div className="relative">
              
            </div>
        </div>
      </div>
    </>
  )
}