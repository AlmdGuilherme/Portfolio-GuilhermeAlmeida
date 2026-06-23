import AnimatedButton from "../../Components/Animatesd-Button"
import ProjectCard from "../../Components/Project-Card"
import BackgroundEffect from "../../Components/Background-Effect"
import { useEffect, useReducer, useRef } from "react"
import { ProjectService } from '../../Services/ProjectService'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import MagicBento from "../../Components/Magic-Bento"

const initialState = {
  loading: true,
  data: [],
  error: null
}

const ACTIONS = {
  START: 'start',
  SUCCESS: 'success',
  ERROR: 'error',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null }
    case ACTIONS.ERROR:
      return { ...state, loading: false, data: null, error: action.payload }
    default:
      return state
  }
}

export default function Projects() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const containerRef = useRef(null)

  useGSAP(() => {
    if (state.loading || !document.querySelector(".bg-effect")) return;

    gsap.fromTo(
      ".bg-effect",
      {
        opacity: 0,
        scale: 0.2,
        filter: "blur(120px)",
      },
      {
        opacity: 0.7,
        scale: 1,
        filter: "blur(100px)",
        duration: 1.8,
        ease: "power3.inOut",
        stagger: 0.3,
      },
      "-=1"
    );
  }, {
    dependencies: [state.loading],
    scope: containerRef
  });

  useEffect(() => {
    const loadProjects = async () => {
      dispatch({ type: ACTIONS.START })
      try {
        const projectService = new ProjectService();
        const response = await projectService.LandingPageProjects()
        dispatch({ type: ACTIONS.SUCCESS, payload: response })
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error.message })
      }
    };

    loadProjects();
  }, [])

  return (
    <>
      <div ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-evenly gap-4 pb-6 overflow-hidden">
        <BackgroundEffect
          left={-5}
          top={30}
          gsap_class={"bg-effect"}
        />
        <BackgroundEffect
          left={40}
          bottom={-10}
          rotation={-90}
          gsap_class={"bg-effect"}
        />

        <div className="flex flex-row w-full h-[95dvh] items-center justify-center">
          <div className="flex flex-col items-center justify-between gap-4 w-[40%] h-[300px]">
            <div className="relative overflow-hidden flex flex-col">
              <h2 className="text-5xl leading-[1.5] w-[28rem] tracking-widest">
                Projetos <span className="text-[#1E40AF]">Desenvolvidos</span>
              </h2>
            </div>
            <p className="w-[28rem] text-justify tracking-widest">
              Projetos construídos para consolidar novos aprendizados, explorar tecnologias e criar soluções eficientes.
            </p>
            <div className="w-[75%]">
              <AnimatedButton
                scroll_to={"#galery"}
                text="Ver projetos →"
                gsap_class="animated_btn"
              />
            </div>
          </div>
          <div className="w-[60%]">
            <MagicBento
              textAutoHide={true}
              glowColor="30, 64, 175"
              enableSpotlight={false}
            />
          </div>
        </div>
        <div className="w-[90%] mt-10 z-[1] flex flex-col justify-center gap-4" id="galery">
          <h2 className="text-4xl leading-[1.5] w-fit tracking-widest">
            Galeria de <span className="text-[#1E40AF]">projetos</span>
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center gap-20">

            {state.loading ? (
              <p className="text-white">Carregando...</p>
            ) : (
              <>
                {state.data && state.data.map(proj => (
                  <ProjectCard
                    key={proj.id}
                    id={proj.id}
                    name={proj.nome}
                    situation={proj.situacao}
                    team={proj.time}
                    description={proj.descricao}
                    image={proj.imagem}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}