import styles from './styles.module.css';
import profilePic from "../../assets/profile-pic.jpg";
import SplitText from '../TextAnimations/SplitText/SplitText'
import RedirectButton from '../RedirectButton';

export default function ProfileCard() {
  return (
    <div className={styles.profile_card}>
      <img src={profilePic} alt="" />
      <span>

      </span>
      <div className={styles.card_infos}>
        <SplitText
          text="Guilherme Almeida"
          className={styles.card_title}
          delay={100}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className={styles.card_description}>
          Programador com uma jornada que une a lógica do código com a paixão por
          aprender e aprimorar cada detalhe, do front-end ao back-end.
        </p>
        <div className={styles.card_links}>
          <a
            href="https://www.linkedin.com/in/guilherme-almeida-profile/"
            className={styles.card_link_buttons}
          >
            <i className={`icon devicon-linkedin-plain`}></i>
          </a>
          <a href="https://github.com/AlmdGuilherme" className={styles.card_link_buttons}>
            <i className={`icon devicon-github-original`}></i>
          </a>
          <a href="mailto:guilhermecamargo_@outlook.com" className={styles.card_link_buttons}>
            <ion-icon
              className={`icon devicon-email`}
              name="mail-outline"
            ></ion-icon>
          </a>
        </div>
        <RedirectButton redirectId={"about-me"}>
          Ver mais
          <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </RedirectButton>
      </div>
    </div>
  );
}
