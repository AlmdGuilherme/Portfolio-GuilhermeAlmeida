import MoreInfosCard from "../../Components/MoreInfosCard/MoreInfosCard"
import Folder from "../../Components/Folder/Folder"
import Carousel from "../../Components/Carousel/Carousel"
import gsw from '../../assets/gsw.png'
import pw from '../../assets/pw.png'
import hp from '../../assets/helpnei.png'
import { ScreenWidth } from "../../hooks/ScreenWidth";
import { useReducer, useEffect } from "react"
import { fetchHabilidades } from "../../Services/PortfolioServices"
import DataPreview from "../../Components/DataPreview"

const ACTIONS = {
  START: 'start',
  SUCCESS: 'success',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { loading: false, habilidades: action.payload, error: null }
    case ACTIONS.ERROR:
      return { loading: false, habilidades: [], error: action.payload }
    default:
      return state
  }
}

export default function AboutMePage() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    habilidades: [],
    error: null
  })

  useEffect(() => {
      const carregarDados = async () => {
        dispatch({ type: ACTIONS.START })
        try {
          const res = await fetchHabilidades()
          dispatch({ type: ACTIONS.SUCCESS, payload: res })
        } catch (error) {
          dispatch({ type: ACTIONS.ERROR, payload: error.message })
        }
      }
      carregarDados();
    }, [])
  
    const frontendSkills = state.habilidades.filter(skill => skill.tipo === "Frontend")
    const backendSkills = state.habilidades.filter(skill => skill.tipo === "Backend")
    const databaseSkills = state.habilidades.filter(skill => skill.tipo === "Database")
    const softwareSkills = state.habilidades.filter(skill => skill.tipo === "Software")

  const screen = ScreenWidth()
  let folderSize = 1.7
  let carouselSize = 200


  if (screen <= 1024) {
    folderSize = 1.5
    carouselSize = 180
  } else if (screen <= 950) {
    folderSize = 2
  } else if (screen <= 540) {
    folderSize = 1.2
  }

  const items = [
    {
      title: "React - One Bit Code",
      id: 1,
      icon: <ion-icon name="code-outline"></ion-icon>,
    },
    {
      title: "Python - One Bit Code",
      id: 2,
      icon: <ion-icon name="code-outline"></ion-icon>,
    },
    {
      title: "Next.js - One Bit Code",
      id: 3,
      icon: <ion-icon name="code-outline"></ion-icon>,
    },
    {
      title: "TypeScript - One Bit Code",
      id: 4,
      icon: <ion-icon name="code-outline"></ion-icon>,
    },
  ];

  const images = [
    <img src={hp} alt="" className="w-full h-full rounded-lg" />,
    <img src={gsw} alt="" className="w-full h-full rounded-lg" />,
    <img src={pw} alt="" className="w-full h-full rounded-lg" />
  ]

  return (
    <>
      <div
        className="w-full min-h-dvh h-auto bg-gradient-to-b from-black to-zinc-950 
        flex flex-col items-center justify-evenly gap-6 max-md:pb-[8rem]"
        id="about-me"
      >
        <div className="w-full h-auto flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col justify-center gap-2 w-[93%]">
            <h2 className="w-fit border-l-4 border-purple-950 text-4xl font-bold p-2">
              Sobre mim
            </h2>
            <p className="text-justify">
              Comecei minha jornada na área da programação durante o Ensino Médio integrado ao Técnico em Informática, no Colégio Joseense, onde tive contato com o básico, porém, desenvolvi um interesse enorme pela área e oportunidades. Após concluir o Ensino Médio, busquei cursos para aprender e desenvolver minhas habilidades como desenvolvedor, até conhecer a One Bit Code, onde tive e tenho a oportunidade de estudar e aprimorar minhas habilidades para me tornar um desenvolvedor Full Stack e Python. Atualmente, estou cursando Desenvolvimento de Software Multiplataforma na Fatec-SJC, onde busco uma formação mais completa e abrangente, além de conhecer mais tecnologias, poder aprofundar o conhecimento já adquirido, desenvolver projetos práticos e ter contato com pessoas que atuam na área, me ajudando a trilhar meu caminho como desenvolvedor!
            </p>
          </div>
          <div className="flex flex-wrap gap-4 w-[93%] items-center justify-baseline max-[1000px]:justify-between max-[810px]:justify-center">
            <DataPreview 
              max={10}
              duration={.5}
              description={"Certificados"}
              condition={true}
            />
            <DataPreview 
              max={5}
              duration={.75}
              description={"Projetos"}
              condition={false}
            />
            <DataPreview 
              max={18}
              duration={.5}
              description={"Tecnologias"}
              condition={true}
            />
          </div>
        </div>
        <div className="w-full h-auto flex flex items-center justify-center max-[950px]:flex-col-reverse gap-10">
          <MoreInfosCard
            title="Confira meus projetos desenvolvidos até o momento!"
            description="Uma amostra das minhas habilidades, experiência e
                conhecimento em ação. Explore os detalhes de cada projeto."
            buttonText="Ver projetos"
            redirectId={"projetos"}
            component={<Folder
              size={folderSize}
              items={images}
            />
            }
          />
          <MoreInfosCard
            title="Veja os certificados que adquiri ao longo do caminho!"
            description="Registro dos meus cursos e especializações, reforçando meu
                    conhecimento em diversas áreas da tecnologia."
            redirectId="certificados"
            buttonText="Ver certificados"
            component={
              <Carousel
                items={items}
                autoplay={true}
                loop={true}
                round={true}
                baseWidth={carouselSize}
              />
            }
          />
        </div>
      </div>
    </>
  )
}