import { useEffect, useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProjectService } from "../../Services/ProjectService"
import { wipeIn, wipeOut } from "../../Utils/animationTrigger"

const initialState = {
  loading: true,
  data: null,
  error: null
}

const ACTIONS = {
  START: 'start',
  SUCCESS: 'success',
  ERROR: 'error',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null }
    case ACTIONS.ERROR:
      return { ...state, loading: false, data: null, error: action.payload }
    default:
      return state
  }
}

export default function Project() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadProject = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const projectService = new ProjectService();
        const response = await projectService.FetchProjectById(id)
        dispatch({ type: ACTIONS.SUCCESS, payload: response })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    }

    loadProject()
  }, [id])

  useEffect(() => {
    if (!state.loading) {
      wipeOut()
    }
  }, [state.loading])

  const handleBackClick = (e) => {
    e.preventDefault()
    wipeIn(() => {
      navigate("/projetos")
    })
  }

  if (state.loading) {
    return <div className="min-h-screen bg-[#120F17]" />
  }

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col items-center gap-4 pt-10 pg-6 pb-8 overflow-hidden">
        <div className="w-[80%] flex flex-col gap-2">
          <a href="/projetos" onClick={handleBackClick} className="text-lg text-[#676767] hover:text-[#1E40AF] duration-300">
            ← Voltar aos projetos
          </a>
          <span className="w-full h-[.5px] bg-[#373737] rounded-lg" />
        </div>
        <div className="w-[80%] flex justify-center gap-6">
          <img src={state?.data?.image} alt="" className="w-1/2 h-auto max-h-[350px] rounded-lg object-cover" />
          <div className="w-1/2 flex flex-col justify-between py-1">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-[#60A5FA]">
                  {state?.data?.nome}
                </h1>

                <span className={`text-xs font-medium tracking-wide px-3 py-1 rounded-full border ${state?.data?.situacao === 'Concluído'
                  ? 'text-emerald-400 bg-emerald-950/30 border-emerald-800/50'
                  : 'text-amber-400 bg-amber-950/30 border-amber-800/50'
                  }`}>
                  {state?.data?.situacao}
                </span>
              </div>

              <div className="text-xs text-[#94A3B8] font-light flex items-center gap-2">
                <span>{state?.data?.time || "The Devs"}</span>
                <span className="text-[#373737]">•</span>
                <span className="text-purple-400 font-medium">Full-Stack Platform</span>
              </div>

              <p className="text-sm leading-relaxed text-zinc-300 font-light mt-2 text-justify">
                {state?.data?.descricao}
              </p>
              {state?.data?.link && (
                <a
                  href={state?.data?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-fit px-6 py-2.5 text-sm font-medium text-white bg-[#1E40AF] hover:bg-[#1D4ED8] active:scale-[0.98] rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/20 cursor-pointer text-center"
                >
                  Ver projeto
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col justify-center mt-4">
          <div className="w-full h-[.5px] bg-[#373737]/40 rounded-lg mb-8" />

          <div className="flex flex-col gap-6 max-w-[none]">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold tracking-wide text-white flex items-center gap-2">
                <span className="w-1 h-5 bg-[#60A5FA] rounded-full" />
                Minhas contribuições
              </h2>
              <p className="text-sm leading-relaxed text-zinc-300 font-light text-justify pl-3 border-l border-[#373737]/60">
                {state?.data?.contribuicao}
              </p>
            </div>

            {state?.data?.lista_contribuicao && state.data.lista_contribuicao.length > 0 && (
              <div className="flex flex-col gap-3 pl-3">
                <h3 className="text-sm font-medium tracking-wide text-[#94A3B8]">
                  Principais pontos da contribuição
                </h3>
                <ul className="flex flex-col gap-3 text-sm font-light text-zinc-300">
                  {state.data.lista_contribuicao.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 leading-relaxed text-justify">
                      <span className="text-[#60A5FA] mt-1.5 flex-shrink-0 text-[6px]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}