import { Link } from 'react-router-dom'
import styles from './style.module.css'

export default function ProjectCard({ project_id, project_title, project_description, project_situation, project_image, project_team, project_link, position }) {
  
  const current_situation = {
    "Não Iniciado": styles.not_started,
    "Em Andamento": styles.on_going,
    "Concluído": styles.concluded
  }
  
  return (
    <div className={`${styles.project_card} ${position === "left" ? "min-[640px]:self-start" : "min-[640px]:self-end flex-row-reverse"}`} id={project_id}>
      <div className={styles.project_header}>
        <img src={`https://portfolio-backend-omega-woad.vercel.app/${project_image}`} alt="" />
        <p className={`${styles.situation} ${current_situation[project_situation]}`}>{project_situation}</p>
      </div>
      <div className={styles.project_infos}>
        <h3>{project_title}</h3>
        <h5>{project_team}</h5>
        <p>{project_description}</p>
        <div className={styles.buttons_section}>
          <Link className={styles.details_button}>
            Ver detalhes
            <ion-icon name="caret-forward-outline"></ion-icon>
          </Link>
          {project_link != "#" && (
            <a href={project_link} className={styles.github_link}>
              <i className={`icon devicon-github-original`}></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}