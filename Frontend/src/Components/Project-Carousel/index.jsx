import { useEffect, useReducer, useState } from 'react';
import { ProjectService } from '../../Services/ProjectService'
import styles from './styles.module.css';
import ProjectCard from '../Project-Card';
import ProjectPanel from '../Project-Panel';

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

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % state?.projects.length ?? 0)
  }

  const previousProject = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? state?.projects.length - 1 : prevIndex - 1)
  }


  return (
    <>
      <div className={styles["project-carousel"]}>
        <div className={styles["left-wrapper"]}>
          <ProjectCard
            year={state?.projects[activeIndex]?.ano}
            name={state?.projects[activeIndex]?.nome}
            description={state?.projects[activeIndex]?.descricao}
            situation={state?.projects[activeIndex]?.situacao}
            team={state?.projects[activeIndex]?.time}
            my_role={state?.projects[activeIndex]?.funcao}
            advance_func={nextProject}
            back_func={previousProject}
            active_project={activeIndex}
            total_projects={state?.projects.length ?? 0}
          />
        </div>
        <div className={styles['right-wrapper']}>
          <ProjectPanel />
        </div>
      </div>
    </>
  )
}
