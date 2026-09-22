import styles from './styles.module.css'

export default function BackgroundEffect({ rotation = 0, top, right, left, bottom, gsap_class, center = true }) {
  const transformValues = []

  if (center) {
    transformValues.push("translate(-50%, -50%)")
  }
  if (rotation !== undefined) {
    transformValues.push(`rotate(${rotation}deg)`)
  }

  return (
    <span
      className={`${styles.bg_effect} ${gsap_class}`}
      style={{
        transform: transformValues.length > 0 ? transformValues.join(" ") : undefined,
        top: top !== undefined ? `${top}` : undefined,
        right: right !== undefined ? `${right}` : undefined,
        left: left !== undefined ? `${left}` : undefined,
        bottom: bottom !== undefined ? `${bottom}` : undefined,
        opacity: 1,
        zIndex: 0
      }}
    />
  )
}