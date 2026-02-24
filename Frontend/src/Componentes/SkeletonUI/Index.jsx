import styles from './styles.module.css'

export default function SkeletonUI({width = '100%', height, variant = 'rect'|'circle'|'text'}) {

  const dynamicStyles = {
    width: width,
    height: height
  }

  return(
    <div
      style={dynamicStyles}
      className={`${styles.skeleton} ${styles[variant]}`}
      aria-hidden="true"
    />
  )
}