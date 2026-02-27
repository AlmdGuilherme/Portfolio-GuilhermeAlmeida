import { useEffect, useReducer } from "react";
import ProjectCard from "../../components/ProjectCard";
import { fetchProjetos } from "../../Services/PortfolioServices";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SkeletonUI from "../../components/SkeletonUI";

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
      return { ...state, loading: false, projetos: action.payload, error: null }
    case ACTIONS.ERROR:
      return {loading: false, projetos: [], error: action.payload}
    default:
      return state
  }
}

export default function ProjectsPage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    projetos: [],
    error: null
  })

  const positions = ["left", "right"]

  useEffect(() => {
    const loadData = async () => {
      dispatch({type: ACTIONS.START})
      try {
        const res = await fetchProjetos()
        dispatch({ type: ACTIONS.SUCCESS, payload: res})
      } catch (error) {
        dispatch({type: ACTIONS.ERROR, payload: error.message})
      }
    }
    loadData()
  }, [])
  return (
    <>
      <div
        className="w-full h-auto bg-zinc-950 flex flex-col gap-4 items-center pb-8 max-[900px]:pb-[9rem]"
        id="projetos"
      >
        <div className="w-[93%] h-auto flex flex-col flex-wrap gap-6 items-center justify-center relative">
          <h2 className="w-fit border-l-4 border-purple-950 text-4xl font-bold p-2 self-start">
            Projetos
          </h2>
        </div>
        <div className="w-[93%] flex flex-col gap-4 justify-center items-center">
          {state.loading ? (
            Array.from({ length: 4}).map((_, index) => (
              <SkeletonUI width="100%" height="15rem"/>
            ))
          ) : state.error ? (
            <ErrorMessage message={state.error} />
          ) : state.projetos.map((proj, index) => (
            <ProjectCard 
              project_id={proj.id}
              project_title={proj.name}
              project_description={proj.description}
              project_situation={proj.situation}
              project_image={proj.image}
              project_team={proj.team}
              project_link={proj.link}
              position={positions[index % 2]}
              key={proj.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}