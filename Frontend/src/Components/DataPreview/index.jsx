import CountUp from "../CountUp/CountUp";
import styles from './styles.module.css'

export default function DataPreview({ max, duration, description, condition }) {
  return (
    <div className={styles.data_preview}>
      {condition ? (
        <>
          <div className="flex gap-1">
            <CountUp
              from={0}
              to={max}
              duration={duration}
            />
            <p>+</p>
          </div>
          <p>{description}</p>
        </>
      ) : (
        <>
          <CountUp
            from={0}
            to={max}
            duration={duration}
          />
          <p>{description}</p>
        </>
      )}
    </div>
  )
}