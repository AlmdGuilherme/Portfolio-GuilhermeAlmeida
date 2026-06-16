import { useNavigate } from 'react-router-dom'
import { wipeIn } from '../../Utils/animationTrigger'
import styles from './styles.module.css'

export default function ProjectCard({ id, name, situation, team, description, image }) {
  const navigate = useNavigate()

  const situation_class = {
    "Não iniciado": styles.not_started,
    "Em andamento": styles.on_going,
    "Concluído": styles.concluded
  }

  const current_class = situation_class[situation]

  const handleDetailsClick = () => {
    wipeIn(() => {
      navigate(`/projetos/${id}`)
    })
  }

  return (
    <>
      <div className={styles.project_card} key={id}>
        <span className='border-l-[2px] border-t-[2px] border-sky-600 absolute left-[-1px] top-[-1px] h-8 w-8' />
        <span className='border-r-[2px] border-t-[2px] border-sky-600 absolute right-[-1px] top-[-1px] h-8 w-8' />
        <div className={styles.project_data}>
          <div>
            <h2 className={styles.project_title}>
              {name}
            </h2>
          </div>
          <div className='flex w-full justify-between items-center'>
            <span className={styles.project_team}>
              {team}
            </span>
            <span className={`${current_class} ${styles.situation}`}>
              {situation}
            </span>
          </div>
          <p className={styles.project_description}>
            {description}
          </p>
        </div>
        <img src={image} alt="" className={styles.project_image} />
        <button onClick={handleDetailsClick} className={styles.card_button}>
          Ver mais detalhes
        </button>
        <span className='border-l-[2px] border-b-[2px] border-sky-600 absolute left-[-1px] bottom-[-1px] h-8 w-8' />
        <span className='border-r-[2px] border-b-[2px] border-sky-600 absolute right-[-1px] bottom-[-1px] h-8 w-8' />
      </div>
    </>
  )
}