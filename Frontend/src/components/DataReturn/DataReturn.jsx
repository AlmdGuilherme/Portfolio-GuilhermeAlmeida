import styles from './styles.module.css'

export default function DataReturn(props) {
  return <div className={styles.data_return}>{props.text}</div>
}