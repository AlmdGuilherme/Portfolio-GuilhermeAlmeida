import FormacaoCard from "../../Components/FormacaoCard/FormacaoCard"
import { fetchFormacaoAcademica, fetchHabilidades } from '../../Services/PortfolioServices'
import { useEffect, useReducer } from "react"
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage"
import SkeletonUI from '../../Components/SkeletonUI'
import SkillIcon from "../../Components/SkillIcon/SkillIcon"

const ACTIONS = {
  START: 'start',
  SUCCESS_FORMACAO: 'success_formacao',
  SUCCESS_HABILIDADES: 'success_habilidades',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS_FORMACAO:
      return { ...state, loading: false, formacoes: action.payload, error: null }
    case ACTIONS.SUCCESS_HABILIDADES:
      return { ...state, loading: false, habilidades: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, formacoes: [], error: action.payload }
    default:
      return state
  }
}


export default function FormacaoPage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    formacoes: [],
    habilidades: [],
    error: null
  })

  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const [res_formation, res_skills] = await Promise.all([
          fetchFormacaoAcademica(),
          fetchHabilidades()
        ])
        dispatch({ type: ACTIONS.SUCCESS_FORMACAO, payload: res_formation })
        dispatch({ type: ACTIONS.SUCCESS_HABILIDADES, payload: res_skills })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    }
    loadData()
  }, [])

  const frontendSkills = state.habilidades.filter(skill => skill.tipo === "Frontend")
  const backendSkills = state.habilidades.filter(skill => skill.tipo === "Backend")
  const databaseSkills = state.habilidades.filter(skill => skill.tipo === "Database")
  const softwareSkills = state.habilidades.filter(skill => skill.tipo === "Software")

  return (
    <>
      <div className="w-full h-auto bg-zinc-950 flex flex-col gap-4 items-center pb-4"
        id="formacao-academica"
      >
        <div className="w-[93%] h-auto flex flex-col flex-wrap gap-4 items-center justify-center relative">
          <h2 className="w-fit border-l-4 border-purple-950 text-4xl font-bold p-2 self-start">
            Formação e Habilidades
          </h2>
          <div className="flex flex w-full">
            <div className="flex flex-col gap-2 w-1/2 justify-center">
              {state.loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonUI height={"3.25rem"} width="26.25rem" key={index} />
                ))
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
            <div className="flex flex-wrap gap-2 w-1/2 justify-center items-center">
              {state.loading ? (
                Array.from({ length: 24 }).map((_, index) => (
                  <SkeletonUI height={"5.25rem"} width="5.5rem" key={index} variant="rect"/>
                ))
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
        </div>
      </div>
    </>
  )
}