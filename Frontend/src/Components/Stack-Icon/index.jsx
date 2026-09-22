import styles from './styles.module.css'

export default function StackIcon({id, nome, icone}) {
  return (
    <>
      <div className={styles["stack-icon"]} key={id}>
        <i className={icone}> </i>
        <p>{nome}</p>
      </div>
    </>
  )
}