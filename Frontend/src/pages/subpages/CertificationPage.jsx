import { useEffect, useReducer } from "react"
import { fetchCertification } from "../../Services/PortfolioServices"
import CertificadoCard from '../../Componentes/CertificadoCard/CertificadoCard'
import Loader from "../../Componentes/Loader/Loader"
import OBC from '../../assets/OneBitCode-Logo.png'
import ErrorMessage from "../../Componentes/ErrorMessage/ErrorMessage"

const ACTIONS = {
  START: 'start',
  SUCCESS: 'success',
  ERROR: 'error',
  LOAD_MORE: 'load_more'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { ...state, loading: false, certificados: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, certificados: [], error: action.payload }
    case ACTIONS.LOAD_MORE:
      return { ...state, visiveis: state.visiveis + 8 }
    default:
      return state
  }
}

export default function CertificationPage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    certificados: [],
    error: null,
    visiveis: 8
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

  const certificadosExibidos = state.certificados.slice(0, state.visiveis)
  const restantes = state.certificados.length - state.visiveis
  const loadMore = restantes > 0;
  const nextStep = restantes >= 8 ? 8 : restantes

  return (
    <>
      <div className="w-full h-auto bg-zinc-950 
        flex flex-col items-center justify-center"
        id="certificados"
      >
        <div className="w-full p-[2rem]">
          <h2 className="text-3xl font-bold font-[Roboto]">Certificados</h2>
        </div>
        <div className="w-full h-auto flex flex-wrap gap-4 items-center justify-center relative">
          {state.loading ? (
            <div className="h-[50dvh] flex flex-col items-center justify-center gap-2">
              <Loader />
              <h2 className="text-xl font-bold">Carregando certificados</h2>
            </div>
          ) : state.error ? (
            <ErrorMessage message={state.error} />
          ) : certificadosExibidos.map((cert) => (
            <CertificadoCard
              certId={cert.id}
              certImg={OBC}
              certLocal={cert.local}
              certTitle={cert.titulo}
              key={cert.id}
            />
          ))}
          {!state.loading && !state.error && loadMore && (
            <div className="w-full flex justify-center mt-8">
              <button
                onClick={() => dispatch({ type: ACTIONS.LOAD_MORE })}
                className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors font-medium border border-zinc-700"
              >
                Carregar (+{nextStep}) certificados
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}