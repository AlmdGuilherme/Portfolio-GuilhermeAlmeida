import LetterGlitch from "../Components/Backgrounds/LetterGlitch/LetterGlitch";
import ProfileCard from "../Components/ProfileCard";
import FormacaoPage from "./subpages/FormacaoPage";
import AboutMePage from "./subpages/AboutMePage";
import CertificationPage from "./subpages/CertificationPage";
import ProjectsPage from "./subpages/ProjectsPage";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-auto flex flex-col overflow-hidden">
        <div className="w-full h-[100dvh] relative">
          <LetterGlitch
            glitchColors={['#202020', '#07001A', '#2A0075']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
          />
          <ProfileCard />
        </div>
        <AboutMePage/>
        <FormacaoPage/>
        <CertificationPage/>
        <ProjectsPage/>
      </div>
    </>
  );
}