import styles from './styles.module.css'

export default function SkillsCard({title, skillsArray}) {

  const isShort = title === 'Database' ? true : title === "Softwares" ? true : false

  return (
    <>
      <div className={isShort ? `${styles.short_skill_card}` : `${styles.skill_card}`}>
        <h1 className={`${styles.card_title}`}>{title}</h1>
        <div className={`${styles.skills_list}`}>
          {skillsArray.map(skill => (
            <div key={skill.id}>
              <i className={skill.icon}></i>
              <p>{skill.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}