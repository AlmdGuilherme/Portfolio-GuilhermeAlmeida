import PageCard from "../../Componentes/PageCard/PageCard"
import LetterGlitch from "../../Componentes/Backgrounds/LetterGlitch/LetterGlitch"
import { useEffect, useState } from "react"
import Loader from "../../Componentes/Loader/Loader"
import SkillsCard from "../../Componentes/SkillsCard/SkillsCard"

export default function SkillsPage() {
  const [loading, setLoading] = useState(true)
  const [skillList, setSkillList] = useState([])
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
    fetch("https://portfolio-backend-omega-woad.vercel.app/api/habilidades")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao buscar habilidades")
      }
      return response.json()
    }).then (data => {
      setSkillList(data)
      setLoading(false)
    }) .catch (error => {
      setIsError(true)
      setErrorMessage(error)
      setLoading(false)
    })
  }, [])

  const FrontendSkills = skillList.filter(skill => skill.tipo === "Frontend")
  const BackendSkills = skillList.filter(skill => skill.tipo === "Backend")
  const DatabaseSkills = skillList.filter(skill => skill.tipo === "Database")
  const SoftwareSkills = skillList.filter(skill => skill.tipo === "Software")
  if (loading) {
    return <Loader/>
  }

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
          <PageCard
            cardTitle="Competências técnicas"
            cardDescription="Veja um pouco mais das habilidades desenvolvidas e aprimoradas ao longo do caminho"
            cardLink="skills"
          />
        </div>
        <div className="w-full h-auto pt-8 pb-8 bg-gradient-to-b from-zinc-gray-900 to-zinc-800
            flex flex-col items-center justify-center gap-20 max-md:pb-[8rem]" id="skills">
          <div className="w-[90%] h-auto flex flex-col items-center justify-center gap-10">
            <p className="text-4xl font-bold self-baseline">Habilidades</p>
            <div className="w-full flex flex-wrap justify-center items-center gap-x-4 gap-y-8">
              <SkillsCard
                title={"Frontend"}
                skillsArray={FrontendSkills}
              />
              <SkillsCard
                title={"Backend"}
                skillsArray={BackendSkills}
              />
              <SkillsCard
                title={"Database"}
                skillsArray={DatabaseSkills}
              />
              <SkillsCard
                title={"Softwares"}
                skillsArray={SoftwareSkills}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}