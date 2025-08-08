import profilePicture from '../../assets/profile-pic.jpg'
import './Profile.css'

export default function ProfileCard() {
  return (
    <div className='profile-card'>
      <div className='profile-infos'>
        <img src={profilePicture} alt="" className='profile-picture'/>
        <h1>Guilherme Almeida</h1>
      </div>
      <div className='profile-links'>
        <a href="https://www.linkedin.com/in/guilherme-almeida-profile/">
          <i className={`icon devicon-linkedin-plain`}></i>
          <span>LinkedIn</span>
        </a>  
        <a href="https://github.com/AlmdGuilherme">
          <i className={`icon devicon-github-original`}></i>
          <span>GitHub</span>
        </a>  
        <a href="mailto:guilhermecamargo_@outlook.com">
          <ion-icon className={`icon devicon-email`} name="mail-outline"></ion-icon>
          <span>Email</span>
        </a>  
      </div>
      <button className='profile-button'>Download CV</button>
    </div>
  );
}
