import AnimatedContent from "../../Componentes/Animations/AnimatedContent/AnimatedContent"
import InformationCard from "../../Componentes/InformationCard/InformationCard"
import MoreInfosCard from "../../Componentes/MoreInfosCard/MoreInfosCard"
import Folder from "../../Componentes/Components/Folder/Folder"
import Carousel from "../../Componentes/Components/Carousel/Carousel"
import gsw from '../../assets/gsw.png'
import pw from '../../assets/pw.png'
import hp from '../../assets/helpnei.png'
import { ScreenWidth } from "../../hooks/ScreenWidth";

export default function AboutMePage() {

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
        flex flex-col items-center justify-evenly gap-20 max-md:pb-[8rem]"
        id="about-me"
      >
        <div className="w-full h-auto flex items-center justify-center">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={true}
            duration={1.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={.2}
            delay={.5}
          >
            <InformationCard
              title="Sobre Mim"
              information="Comecei minha jornada na área da programação durante o Ensino Médio integrado ao Técnico em Informática, no Colégio Joseense, onde tive contato com o básico, porém, desenvolvi um interesse enorme pela área e oportunidades. Após concluir o Ensino Médio, busquei cursos para aprender e desenvolver minhas habilidades como desenvolvedor, até conhecer a One Bit Code, onde tive e tenho a oportunidade de estudar e aprimorar minhas habilidades para me tornar um desenvolvedor Full Stack e Python. Atualmente, estou cursando Desenvolvimento de Software Multiplataforma na Fatec-SJC, onde busco uma formação mais completa e abrangente, além de conhecer mais tecnologias, poder aprofundar o conhecimento já adquirido, desenvolver projetos práticos e ter contato com pessoas que atuam na área, me ajudando a trilhar meu caminho como desenvolvedor!"
            />
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={.2}
          delay={.3}
        >
          <div className="w-full h-auto flex flex items-center justify-center max-[950px]:flex-col gap-10">
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
                    conhecimento em diversas áreas."
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
        </AnimatedContent>
      </div>
    </>
  )
}