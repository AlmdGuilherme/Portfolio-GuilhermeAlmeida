import { useEffect, useReducer, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import BackgroundEffect from "../../Components/Background-Effect"
import AnimatedButton from "../../Components/Animatesd-Button"
import SocialMediaButton from "../../Components/Social-Media-Button"
import LandingCard from "../../Components/Landing-Card"
import AnimatedIcon from "../../Components/Animated-Icon"
import ResumeCard from '../../Components/Resume-Card'
import { FiSearch } from "react-icons/fi";
import AnimatedArrow from "../../Components/Animated-Arrow"
import SideNavbar from "../../Components/Side-Navbar"
import { StackService } from "../../Services/StackService"
import StackIcon from "../../Components/Stack-Icon"
import ProjectCarousel from "../../Components/Project-Carousel"

const initialState = {
  loading: true,
  stacks: [],
  error: null
}

const actions = {
  START: 'start',
  STACK_SUCCESS: 'success',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case actions.START:
      return { ...state, loading: true }
    case actions.STACK_SUCCESS:
      return { ...state, stacks: action.payload, loading: false }
    case actions.ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function Portfolio() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loadStack = async () => {
    dispatch({ type: actions.START })
    try {
      const stackService = new StackService()
      const response = await stackService.FetchStack()
      dispatch({ type: actions.STACK_SUCCESS, payload: response })
    } catch (error) {
      dispatch({ type: actions.ERROR, payload: error.message })
    }
  }

  useEffect(() => {
    loadStack()
  }, [])

  const frontendStack = state.stacks?.filter(stack => stack.categoria === "Frontend")
  const backendStack = state.stacks?.filter(stack => stack.categoria === "Backend")
  const databaseAndSoftwareStack = state.stacks?.filter(stack => stack.categoria !== "Backend" && stack.categoria !== "Frontend")

  return (
    <>
      <div className="flex flex-col items-center justify-center h-auto gap-20">
        <div className="w-full min-h-dvh h-dvh flex items-center justify-center gap-4 relative">
          <BackgroundEffect
            center
            left="50%"
            top="50%"
          />
          <div className="flex flex-col w-[37%] gap-4 z-10">
            <p className="text-sm font-semibold tracking-widest text-[#CAC2B5] uppercase">
              Guilherme Almeida - Software Developer
            </p>
            <h1 className="text-8xl text-[#640D14]">FULL STACK DEVELOPER</h1>
            <div className="w-full flex items-center justify-between">
              <span className="h-1 w-[47%] bg-[#CAC2B5] rounded-sm" />
              <span className="h-3 w-3 rounded-full bg-[#800E13]" />
              <span className="h-1 w-[47%] bg-[#CAC2B5] rounded-sm" />
            </div>
            <p className="text-base font-[Lexend] text-justify text-[#CAC2B5]">
              Conectando a lógica do back-end com a precisão do design de interfaces.
              Desenvolvendo sistemas modernos pensados para oferecer a melhor experiência ao usuário.
            </p>
            <div className="flex items-center justify-start gap-4">
              <SocialMediaButton
                link={"https://github.com/AlmdGuilherme"}
                icon={
                  <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.35804 2.14505C8.13569 1.86069 6.86438 1.86069 5.64204 2.14505C4.93604 1.71205 4.39704 1.51305 4.00504 1.42905C3.83769 1.39156 3.66652 1.37378 3.49504 1.37605C3.41702 1.3784 3.33937 1.38777 3.26304 1.40405L3.25304 1.40605L3.24904 1.40805H3.24604L3.38304 1.88905L3.24604 1.40905C3.17578 1.4289 3.11073 1.4639 3.05545 1.51158C3.00016 1.55926 2.95599 1.61847 2.92604 1.68505C2.63101 2.34575 2.5748 3.08846 2.76704 3.78605C2.26888 4.38924 1.99752 5.14775 2.00004 5.93005C2.00004 7.48305 2.45804 8.52705 3.23904 9.19805C3.78604 9.66805 4.45004 9.91805 5.11604 10.061C5.01006 10.3686 4.97053 10.6951 5.00004 11.019V11.617C4.59304 11.702 4.31104 11.675 4.11004 11.609C3.85904 11.526 3.66604 11.359 3.48104 11.119C3.3846 10.9895 3.29449 10.8553 3.21104 10.717L3.15404 10.624C3.08213 10.5043 3.00744 10.3863 2.93004 10.27C2.74004 9.98905 2.45804 9.63705 2.00204 9.51705L1.51804 9.39005L1.26404 10.358L1.74804 10.485C1.82804 10.505 1.93204 10.58 2.10304 10.831C2.16893 10.9301 2.23228 11.0308 2.29304 11.133L2.36104 11.243C2.45504 11.395 2.56304 11.563 2.68804 11.727C2.94104 12.057 3.28604 12.39 3.79804 12.559C4.14804 12.675 4.54604 12.703 5.00004 12.633V14.5C5.00004 14.6327 5.05272 14.7598 5.14648 14.8536C5.24025 14.9474 5.36743 15 5.50004 15H9.50004C9.63265 15 9.75982 14.9474 9.85359 14.8536C9.94736 14.7598 10 14.6327 10 14.5V10.938C10 10.622 9.98604 10.333 9.89704 10.064C10.56 9.92405 11.219 9.67405 11.763 9.20405C12.543 8.52805 13 7.47405 13 5.91205V5.91105C12.9979 5.13515 12.7264 4.38407 12.232 3.78605C12.424 3.08878 12.3678 2.34646 12.073 1.68605C12.0433 1.61939 11.9993 1.56005 11.9442 1.5122C11.8891 1.46435 11.8242 1.42914 11.754 1.40905L11.617 1.88905C11.754 1.40905 11.753 1.40905 11.752 1.40905L11.75 1.40805L11.746 1.40605L11.737 1.40405L11.662 1.38905C11.6098 1.38054 11.557 1.37619 11.504 1.37605C11.3326 1.37378 11.1614 1.39156 10.994 1.42905C10.603 1.51305 10.064 1.71205 9.35804 2.14505Z" />
                  </svg>
                }
              />
              <SocialMediaButton
                link={"https://gitlab.com/AlmdGuilherme"}
                icon={
                  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.18748 13.0313L2.8281 9.75001C2.29685 9.35417 1.94268 8.83334 1.7656 8.18751C1.58852 7.54167 1.61977 6.90626 1.85935 6.28126L3.4531 2.14063C3.48435 2.0573 3.53643 1.9923 3.60935 1.94563C3.68227 1.89896 3.76039 1.87542 3.84373 1.87501C3.92706 1.87459 4.00789 1.89813 4.08623 1.94563C4.16456 1.99313 4.21914 2.06855 4.24998 2.17188L5.3281 5.46876H9.67185L10.75 2.17188C10.7812 2.06771 10.836 1.99209 10.9144 1.94501C10.9927 1.89792 11.0733 1.87459 11.1562 1.87501C11.2391 1.87542 11.3173 1.89896 11.3906 1.94563C11.4639 1.9923 11.516 2.0573 11.5469 2.14063L13.125 6.28126C13.3646 6.90626 13.3958 7.54167 13.2187 8.18751C13.0416 8.83334 12.6875 9.35417 12.1562 9.75001L7.78123 13.0313C7.69789 13.0938 7.59893 13.125 7.48435 13.125C7.36977 13.125 7.27081 13.0938 7.18748 13.0313Z" />
                  </svg>

                }
              />
              <SocialMediaButton
                link={"https://www.linkedin.com/in/guilherme-almeida-profile/"}
                icon={
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.63 13.6355H11.2635V9.922C11.2635 9.0365 11.245 7.8985 10.026 7.8985C8.792 7.8985 8.604 8.859 8.604 9.8565V13.635H6.2345V5.9995H8.5105V7.041H8.541C8.859 6.4395 9.6325 5.807 10.7865 5.807C13.187 5.807 13.6325 7.3875 13.6325 9.4425V13.635L13.63 13.6355ZM3.5575 4.956C3.37664 4.95607 3.19754 4.92045 3.03046 4.85119C2.86339 4.78193 2.71162 4.68039 2.58384 4.55239C2.45607 4.42438 2.35481 4.27243 2.28585 4.10523C2.2169 3.93802 2.18161 3.75886 2.182 3.578C2.1823 3.30578 2.2633 3.03975 2.41478 2.81356C2.56626 2.58737 2.7814 2.41118 3.03301 2.30725C3.28461 2.20333 3.56138 2.17634 3.82833 2.22971C4.09527 2.28307 4.3404 2.41439 4.53271 2.60705C4.72503 2.79972 4.8559 3.04508 4.90878 3.31212C4.96166 3.57916 4.93417 3.85589 4.82979 4.1073C4.72541 4.35872 4.54882 4.57354 4.32236 4.72461C4.0959 4.87567 3.82972 4.9562 3.5575 4.956ZM4.7445 13.6355H2.37V6H4.7445V13.6355ZM14.818 0H1.18C0.5285 0 0 0.5155 0 1.1535V14.847C0 15.485 0.5285 16.0005 1.18 16.0005H14.8155C15.466 16.0005 16 15.485 16 14.847V1.1535C16 0.5155 15.466 0 14.8155 0H14.818Z" />
                  </svg>
                }
              />
              <SocialMediaButton
                link={"mailto:guilhermecamargo@outlook.com"}
                icon={
                  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 5L7.5 8.125L2.5 5V3.75L7.5 6.875L12.5 3.75M12.5 2.5H2.5C1.80625 2.5 1.25 3.05625 1.25 3.75V11.25C1.25 11.5815 1.3817 11.8995 1.61612 12.1339C1.85054 12.3683 2.16848 12.5 2.5 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995 13.75 11.5815 13.75 11.25V3.75C13.75 3.41848 13.6183 3.10054 13.3839 2.86612C13.1495 2.6317 12.8315 2.5 12.5 2.5Z" />
                  </svg>
                }
              />
              <AnimatedButton scroll_to={"#about-me"}>
                <FiSearch size={18} strokeWidth={3} />
                <span>Explorar portfólio</span>
              </AnimatedButton>
            </div>
          </div>
          <div className="w-[55%] z-10 flex flex-col gap-2 items-end justify-center justify-end h-1/2">
            <SideNavbar />
          </div>
          <AnimatedArrow scrollTo={"#about-me"} />
          <span className="w-full h-[.5px] bg-[#242424] bottom-0 absolute" />
        </div>
        <div className="w-full flex flex-col px-14 scroll-mt-20" id="about-me">
          <p className="text-3xl font-[PramukhRounded-Bold] tracking-widest text-[#640D14] uppercase">
            01 - Sobre mim
          </p>
          <div className="h-auto w-full flex items-stretch justify-between gap-8">
            <div className="flex flex-col items-start w-1/2 gap-4">
              <h1 className="text-6xl text-[#CAC2B5]">Minha trajetória</h1>
              <p className="text-base font-[Lexend] text-justify text-[#CAC2B5]">
                Minha trajetória começou no ensino técnico em informática, onde me apaixonei pelo desenvolvimento de software.
                Atualmente, curso Desenvolvimento de Software Multiplataforma na FATEC SJC e atuo como Engenheiro de Dados na Dataside.
                Combinando aprendizado acadêmico com especializações constantes em Full Stack, Python e Java, focando em transformar problemas complexos em sistemas eficientes e escaláveis.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-[PramukhRounded-Bold] tracking-widest text-[#808080] uppercase w-fit">
                  Tecnologias
                </p>
                {state.loading ? (
                  <>
                    <p>Carregando...</p>
                  </>
                ) : state.error ? (
                  <>
                    <p>Erro</p>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col w-full gap-2">
                      <p className="text-[1.75rem] font-[PramukhRounded-Bold] tracking-widest text-[#640D14] uppercase w-fit">
                        Frontend
                      </p>
                      <div className="flex w-full flex-wrap gap-y-4 gap-x-2">
                        {state.stacks && frontendStack.map((stack) => (
                          <StackIcon key={stack.id} nome={stack.nome} icone={stack.icone} />
                        ))}
                      </div>
                      <p className="text-[1.75rem] font-[PramukhRounded-Bold] tracking-widest text-[#640D14] uppercase w-fit">
                        Backend
                      </p>
                      <div className="flex w-full flex-wrap gap-y-4 gap-x-2">
                        {state.stacks && backendStack.map((stack) => (
                          <StackIcon key={stack.id} nome={stack.nome} icone={stack.icone} />
                        ))}
                      </div>
                      <p className="text-[1.75rem] font-[PramukhRounded-Bold] tracking-widest text-[#640D14] uppercase w-fit">
                        Database & Software
                      </p>
                      <div className="flex w-full flex-wrap gap-y-4 gap-x-2">
                        {state.stacks && databaseAndSoftwareStack.map((stack) => (
                          <StackIcon key={stack.id} nome={stack.nome} icone={stack.icone} />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-[42%] flex items-center justify-center">
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 px-14 pb-10">
          <p className="text-3xl font-[PramukhRounded-Bold] tracking-widest text-[#640D14] uppercase">
            02 - Projetos
          </p>
          <div className="w-full flex flex-col">
            <div className="flex flex-col items-start w-full gap-4" id="projects">
              <h1 className="text-6xl text-[#CAC2B5]">Código em ação</h1>
              <ProjectCarousel /> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}