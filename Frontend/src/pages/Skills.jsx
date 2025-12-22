import PageCard from "../Componentes/PageCard/PageCard"
import LetterGlitch from "../Componentes/Backgrounds/LetterGlitch/LetterGlitch"

export default function Skills() {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-6 overflow-hidden">
        <div className="w-full h-[100dvh] relative">
          <LetterGlitch
            glitchColors={['#202020', '#07001A', '#2A0075']}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
          />
        </div>
        <div className="w-full h-auto flex items-center justify-center absolute top-[40%]">
          <PageCard
            cardTitle="Competências técnicas"
            cardDescription="Veja um pouco mais das habilidades desenvolvidas e aprimoradas ao longo do caminho"
            cardLink="formacao-academica"
          />
        </div>
      </div>
    </>
  )
}