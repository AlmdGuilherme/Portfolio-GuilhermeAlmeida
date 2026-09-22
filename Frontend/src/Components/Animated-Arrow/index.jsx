import { FaArrowDown } from "react-icons/fa6";
import styles from "./styles.module.css"


export default function AnimatedArrow({scrollTo}) {
  return (
    <>
      <a href={scrollTo} className={styles["animated-arrow"]}>
        <FaArrowDown/>
      </a>
    </>
  )
}