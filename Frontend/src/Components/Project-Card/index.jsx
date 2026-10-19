import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function ProjectCard({ id, name, situation, team, description, image, my_role, back_func, advance_func, year, active_project, total_projects }) {
  const progressPercentage = ((active_project + 1) / total_projects) * 100;
  return (
    <>
      <div className={styles["project-card"]} key={id}>
        <div className='flex flex-col w-[95%] gap-1 items-start justify-center'>
          <p className={styles["project-year"]}>{year}</p>
          <h2 className={styles["project-title"]}>{name}</h2>
          <p className={styles["project-description"]}>{description}</p>
        </div>
        <hr className='border-1 border-[#3D292B] w-[95%] rounded-full' />
        <div className='flex w-[95%] items-start justify-center gap-2'>
          <div className={styles["project-data"]}>
            <label>Situação</label>
            <p>{situation}</p>
          </div>
          <div className={styles["project-data"]}>
            <label>Equipe</label>
            <p>{team}</p>
          </div>
          <div className={styles["project-data"]}>
            <label>Função</label>
            <p>{my_role}</p>
          </div>
        </div>
        <hr className='border-1 border-[#3D292B] w-[95%] rounded-full' />
        <div className='flex w-[95%] items-center justify-between h-[3rem] mt-auto gap-8'>
          <div className='flex gap-2'>
            <button className={styles["card-button"]} onClick={back_func}>
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49952 3.12451L3.12402 7.50001L7.49952 11.8755M3.12402 7.50001H11.875" strokeLinecap="round" />
              </svg>
            </button>
            <button className={styles["card-button"]} onClick={advance_func}>
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.12402 7.50001H11.875M7.49952 11.8755L11.875 7.50001L7.49952 3.12451" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className={styles['projects-progress']}>
            <p className='font-[PramukhRounded-Regular]'>
              {String(active_project + 1).padStart(2, "0")}
              {"/"}
              {String(total_projects).padStart(2, "0")}
            </p>
            <span className="w-full h-1 bg-[#3D292B] block overflow-hidden">
              <span
                className="h-full bg-[#E1535E] block transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}