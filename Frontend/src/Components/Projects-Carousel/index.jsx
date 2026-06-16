import { act, useEffect, useReducer, useState } from 'react'
import styles from './styles.module.css'
import { ProjectService } from '../../Services/ProjectService'
import AnimatedButton from '../Animatesd-Button'


const initialState = {
  loading: true,
  data: [],
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


export default function ProjectsCarousel() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const loadProjects = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const projectService = new ProjectService();
        const response = await projectService.LandingPageProjects()
        dispatch({ type: ACTIONS.SUCCESS, payload: response })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    };

    loadProjects();
  }, [])

  useEffect(() => {
    if (state.data.length === 0 || state.loading) return;

    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % state.data.length)
    }, 15000);
    return () => {
      clearInterval(timer);
    };
  }, [state.data, state.loading])

  const activeProject = state.data[currentProject]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.project_infos}>
          <h2 className={styles.project_title}>
            {activeProject?.nome}
          </h2>
          <div className={styles.project_basic_infos}>
            <p className={styles.team}>
              {activeProject?.time}
            </p>
            <p className={styles.function}>
              {activeProject?.funcao}
            </p>
            <p className={styles.situation}>
              {activeProject?.situacao}
            </p>
          </div>
          <p className={styles.project_description}>
            {activeProject?.descricao}
          </p>
          {activeProject?.link && (
            <AnimatedButton
              scroll_to={activeProject?.link}
              text={"Ver projeto"}
            />
          )}
        </div>
        <img src={activeProject?.imagem} alt="" className={styles.project_image} />
      </div>
    </>
  )
}