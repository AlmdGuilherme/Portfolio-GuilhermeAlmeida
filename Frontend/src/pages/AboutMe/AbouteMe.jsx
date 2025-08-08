import ProfileCard from "../../components/ProfileCard/ProfileCard";
import GradientText from "../../components/GradientText/GradientText";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import OneBitCodeLogo from '../../assets/OneBitCode-Logo.png'
import DataReturn from "../../components/DataReturn/DataReturn";
import CertificadoCard from "../../components/CertificadoCard/CertificadoCard";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://portfolio-backend-omega-woad.vercel.app/api/aboutMePage`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP erro! Status: ${res.status}`);
        }
        return res.json();
      }).then((data) => {
        setDados(data);
        setLoading(false);
      }).catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader/>
  }
  if (error) {
    return (
      <DataReturn text={`Erro ao carregar dados - Error: ${error.message}`} />
    );
  }

  return (
    <>
      <div className="w-full h-auto flex">
        <div className="w-[35%] h-screen flex justify-center">
          <ProfileCard />
        </div>
        <div className="w-[65%] flex flex-col text-center items-center gap-4">
          <GradientText
            animationSpeed={9}
            colors={["#566573", "#fff", "#566573", "#fff", "#566573"]}>
            Sobre Mim
          </GradientText>
          <div className="flex flex-col w-full h-auto items-center">
            <div className="h-auto w-[95%]">
              <p className="flex items-center text-justify text-lg">
                Começei minha jornada na área da programação durante o Ensino Médio integrado ao Técninco em Informática, 
                no Colégio Joseense, onde tive contato com o básico, porém, desenvoli um interesse enorme pela área e oportunidades. 
                Após concluir o Ensino Médio, busquei cursos para aprender e desenvolver minhas habilidades como desenvolvedor, 
                até conhecer a One Bit Code, onde tive e tenho a oportunidade de estudar e aprimorar minhas habilidades para me
                tornar um desenvolvedor Full Stack e Python. Atualmente, estou cursando Desenvolvimento de Softwatre Multiplataforma na
                Fatec-SJC, onde busco uma formação mais completa e abrangente, além de conhecer mais tecnologias, 
                poder aprofundar o conhecimento já adquirido, desenvolver projetos práticos e ter contato com pessoas que atuam na área, 
                me ajudando a trilhar meu caminho como desenvolvedor!
              </p>
            </div>
            <hr className={styles.divisory} />
            <GradientText
              animationSpeed={9}
              colors={["#566573", "#fff", "#566573", "#fff", "#566573"]}
            >
              Outras informações
            </GradientText>
            <div className="w-[95%] flex flex-col items-center justify-center gap-6">
              <h1 className="text-xl font-bold">Projeto(s)</h1>
              {dados && (
                <div className="w-[100%] h-[12rem] flex gap-2" key={dados.projeto.id}>
                  <div className="w-[50%] h-full">
                    <img src={`https://portfolio-backend-omega-woad.vercel.app${dados.projeto.image}`} 
                      alt="" className={styles.proj_image}/>
                  </div>
                  <div className="w-[50%] flex flex-col gap-4 text-justify items-center">
                    <p className="text-lg font-bold cursor-pointer">{dados.projeto.name}</p>
                    <p>{dados.projeto.descricao}</p>
                    <a href={dados.projeto.link}
                      className="bg-black p-2 rounded-sm flex items-center w-[50%]
                    justify-center self-start text-sm font-bold duration-700
                    hover:bg-white hover:text-black">
                      Ver projeto &#129170;
                    </a>
                  </div>
                </div>
              )}
              <div className="w-full flex items-center">
                <a href="#"
                  className="bg-black p-3 rounded-sm flex items-center 
                justify-center self-center text-sm font-bold duration-700
                hover:bg-white hover:text-black">
                  Ver mais projetos
                  &#129170;
                </a>
              </div>

            </div>
            <div className="w-[95%] flex flex-col items-center justify-center gap-6">
              <h1 className="text-xl font-bold">Certificado(s)</h1>
              <div className="w-[100%] flex items-center justify-between flex-wrap gap-4">
                {dados && dados.certificados && dados.certificados.map(cert => (
                  <CertificadoCard 
                    id={cert.id}
                    img={OneBitCodeLogo}
                    tipo={cert.type}
                    local={cert.location}
                  />
                ))}
              </div>
              <div className="w-full flex items-center">
                <Link to="formacao-academica"
                  className="bg-black p-3 rounded-sm flex items-center 
                justify-center self-center text-sm font-bold duration-700
                hover:bg-white hover:text-black">
                  Ver certificados
                  &#129170;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
