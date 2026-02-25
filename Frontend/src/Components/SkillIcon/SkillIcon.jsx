import styles from './styles.module.css'

export default function SkillIcon({skillClass, skillName, skillType}) {

  const classes = {
    'Frontend': styles.frontend_icon,
    'Backend': styles.backend_icon,
    'Database': styles.database_icon,
    'Software': styles.software_icon
  }

  return (
    <div className={`${styles.skill_icon} ${classes[skillType]}`}>
      <i className={skillClass}></i>
      <span>{skillName}</span>
    </div>
  )
}