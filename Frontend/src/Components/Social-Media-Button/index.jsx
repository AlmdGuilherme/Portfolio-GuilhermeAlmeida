import styles from './styles.module.css'

export default function SocialMediaButton({link, icon, gsap_class}) {
  return (
    <>
      <a href={link} className={`${styles.media_button} ${gsap_class}`}>
        {icon}
      </a>
    </>
  )
}