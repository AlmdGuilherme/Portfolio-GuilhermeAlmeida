import styles from './styles.module.css'

export default function SideNavbar() {
  return (
    <>
      <nav className={`${styles["side-navbar"]}`}>
        <ul>
          <a href='#about-me'>
            <span className={`font-[PramukhRounded-Regular]`}>
              01 - Sobre mim
            </span>
          </a>
          <a href='#projects'>
            <span className={`font-[PramukhRounded-Regular]`}>
              02 - Projetos
            </span>
          </a>
          <a>
            <span className={`font-[PramukhRounded-Regular]`}>
              03 - Experiência
            </span>
          </a>
        </ul>
      </nav>
    </>
  )
}