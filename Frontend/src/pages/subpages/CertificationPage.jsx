import { useEffect, useReducer } from "react"
import { fetchCertification } from "../../Services/PortfolioServices"
import CertificadoCard from '../../Componentes/CertificadoCard/CertificadoCard'
import Loader from "../../Componentes/Loader/Loader"
import OBC from '../../assets/OneBitCode-Logo.png'
import ErrorMessage from "../../Componentes/ErrorMessage/ErrorMessage"

const ACTIONS = {
  START: 'start',
  SUCCESS: 'success',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { loading: false, certificados: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, certificados: [], error: action.payload }
    default:
      return state
  }
}

export default function CertificationPage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    certificados: [],
    error: null
  })

  useEffect(() => {
    const carregarDados = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const res = await fetchCertification()
        dispatch({ type: ACTIONS.SUCCESS, payload: res })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    }
    carregarDados();
  }, [])

  return (
    <>
      <div className="w-full min-h-dvh h-auto bg-zinc-950 
        flex flex-col items-center max-md:pb-[8rem]"
        id="certificados"
      >
        <div className="w-full p-[2rem]">
          <h2 className="text-3xl font-bold font-[Roboto]">Certificados</h2>
        </div>
        <div className="w-full h-auto flex flex-1 flex-wrap gap-4 items-center justify-center relative">
          { state.loading ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <Loader />
              <h2 className="text-xl font-bold">Carregando certificados</h2>
            </div>
          ) : state.error ? (
            <ErrorMessage message={state.error} />
          ) : state.certificados.map((cert) => (
            <CertificadoCard
              certId={cert.id}
              certImg={OBC}
              certLocal={cert.local}
              certTitle={cert.titulo}
              key={cert.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}