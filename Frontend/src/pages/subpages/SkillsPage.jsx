import { useEffect, useReducer } from "react"
import { fetchHabilidades } from "../../Services/PortfolioServices"
import Loader from '../../Componentes/Loader/Loader'
import ErrorMessage from '../../Componentes/ErrorMessage/ErrorMessage'
import SkillIcon from "../../Componentes/SkillIcon/SkillIcon"

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
      return { loading: false, habilidades: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, habilidades: [], error: action.payload }
    default:
      return state
  }
}

export default function SkillsPage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    habilidades: [],
    error: null
  })

  useEffect(() => {
    const carregarDados = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const res = await fetchHabilidades()
        dispatch({ type: ACTIONS.SUCCESS, payload: res })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    }
    carregarDados();
  }, [])

  const frontendSkills = state.habilidades.filter(skill => skill.tipo === "Frontend")
  const backendSkills = state.habilidades.filter(skill => skill.tipo === "Backend")
  const databaseSkills = state.habilidades.filter(skill => skill.tipo === "Database")
  const softwareSkills = state.habilidades.filter(skill => skill.tipo === "Software")

  return (
    <>
      <div className="w-full min-h-[65dvh] h-auto bg-gradient-to-b from-zinc-950 to-black
        flex flex-col gap-4 items-center justify-center max-md:pb-[8rem]"
        id="habilidades"
      >
        <div className="w-full p-[2rem]">
          <h2 className="text-3xl font-bold font-[Roboto]">Habilidades</h2>
        </div>
        <div className="w-full h-auto flex flex-wrap gap-4 items-center justify-center relative">
          {state.loading ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <Loader />
              <h2 className="text-xl font-bold">Carregando certificados</h2>
            </div>
          ) : state.error ? (
            <ErrorMessage message={state.error} />
          ) : state.habilidades && (
            <>
              {frontendSkills.map((skill) => (
                <SkillIcon 
                  skillClass={skill.icon}
                  skillName={skill.nome}
                  skillType={skill.tipo}
                />
              ))}
              {backendSkills.map((skill) => (
                <SkillIcon 
                  skillClass={skill.icon}
                  skillName={skill.nome}
                  skillType={skill.tipo}
                />
              ))}
              {databaseSkills.map((skill) => (
                <SkillIcon 
                  skillClass={skill.icon}
                  skillName={skill.nome}
                  skillType={skill.tipo}
                />
              ))}
              {softwareSkills.map((skill) => (
                <SkillIcon 
                  skillClass={skill.icon}
                  skillName={skill.nome}
                  skillType={skill.tipo}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}