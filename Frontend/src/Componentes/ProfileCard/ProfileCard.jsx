import "./ProfileCard.css";
import profilePic from "../../assets/profile-pic.jpg";
import SplitText from '../TextAnimations/SplitText/SplitText'

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={profilePic} alt="" />
      <SplitText
        text="Guilherme Almeida"
        className="profile-name"
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
      <p className="profile-description">
        Programador com uma jornada que une a lógica do código com a paixão por
        aprender e aprimorar cada detalhe, do front-end ao back-end.
      </p>
      <div className="profile-links">
        <a
          href="https://www.linkedin.com/in/guilherme-almeida-profile/"
          className="link"
        >
          <i className={`icon devicon-linkedin-plain`}></i>
        </a>
        <a href="https://github.com/AlmdGuilherme" className="link">
          <i className={`icon devicon-github-original`}></i>
        </a>
        <a href="mailto:guilhermecamargo_@outlook.com" className="link">
          <ion-icon
            className={`icon devicon-email`}
            name="mail-outline"
          ></ion-icon>
        </a>
      </div>
      <a href="#about-me" className="more-button">
        Ver mais
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
      </a>
    </div>
  );
}
