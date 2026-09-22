import { useEffect, useReducer, useState } from 'react';
import { ProjectService } from '../../Services/ProjectService'
import styles from './styles.module.css';

const initalState = {
  loading: true,
  projects: [],
  error: null
}

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
      return { ...state, loading: false, projects: action.payload }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function ProjectsCarousel() {
  const [state, dispatch] = useReducer(reducer, initalState)
  const [activeIndex, setActiveIndex] = useState(0)

  const loadProjects = async () => {
    dispatch({ type: ACTIONS.START })
    try {
      const projectService = new ProjectService();
      const response = await projectService.fetchProjects();
      dispatch({ type: ACTIONS.SUCCESS, payload: response })
    } catch (error) {
      dispatch({ type: ACTIONS.ERROR, payload: error.message })
    }
  }

  useEffect(() => {
    loadProjects()
  }, [])

  return (
    <>
      <div className={styles["project-carousel"]}>
        <div className={styles["carousel-wrapper"]}>
          <span className={styles["blur-effect"]}/>
          <div className={styles["project-list"]}>
            {state?.projects.map((proj, index) => (
              <div className={styles["project-card"]} style={{ backgroundImage: `url(${proj.capa})` }}>

              </div>
            ))}
          </div>
        </div>
        <div>
          {/* Canto direito */}
        </div>
      </div>
    </>
  )
}
