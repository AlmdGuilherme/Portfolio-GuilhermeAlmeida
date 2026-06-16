import styles from './styles.module.css'

export default function BackgroundEffect({ rotation = 0, top, right, left, bottom, gsap_class}) {
  return (
    <span
      className={`${styles.bg_effect} ${gsap_class}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        top: top ? `${top}rem` : undefined,
        right: right ? `${right}rem` : undefined,
        left: left ? `${left}rem` : undefined,
        bottom: bottom ? `${bottom}rem` : undefined,
        opacity: 0,
        zIndex: 0
      }}
    />
  )
}