import FormacaoCard from "../../Componentes/FormacaoCard/FormacaoCard"
import { fetchFormacaoAcademica } from '../../Services/PortfolioServices'
import Loader from '../../Componentes/Loader/Loader'
import { useEffect, useReducer } from "react"
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
      return { loading: false, formacoes: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, formacoes: [], error: action.payload }
    default:
      return state
  }
}


export default function FormacaoPage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    certificados: [],
    error: null
  })

  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const res = await fetchFormacaoAcademica();
        dispatch({ type: ACTIONS.SUCCESS, payload: res })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    }
    loadData()
  }, [])

  return (
    <>
      <div className="w-full min-h-dvh h-auto bg-zinc-950 
        flex flex-col gap-4 items-center max-md:pb-[8rem]"
        id="formacao-academica"
      >
        <div className="w-full p-[2rem]">
          <h2 className="text-3xl font-bold font-[Roboto]">Formação Acadêmica</h2>
        </div>
        <div className="w-full h-auto flex flex-1 flex-wrap gap-4 gap-y-14 items-center justify-center relative">
          { state.loading ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <Loader />
              <h2 className="text-xl font-bold">Carregando formações acadêmicas</h2>
            </div>
          ) : state.error ? (
            <ErrorMessage message={state.error} />
          ) : state.formacoes.map((form) => (
            <>
              <FormacaoCard
                key={form.id}
                id={form.id}
                title={form.nome}
                description={form.descricao}
                period={form.periodo}
                local={form.local}
                area={form.area}
              />
            </>
          ))}
        </div>
      </div>
    </>
  )
}