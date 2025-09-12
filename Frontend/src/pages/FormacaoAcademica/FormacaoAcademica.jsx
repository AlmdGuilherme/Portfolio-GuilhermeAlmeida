import { useLoaderData } from "react-router-dom"
import FormacaoCard from "../../Componentes/FormacaoCard/FormacaoCard"
import PageCard from '../../Componentes/PageCard/PageCard'
import Particles from '../../Componentes/Backgrounds/Particles/Particles'
import Reveal from '../../Componentes/Reveal/Reveal'
import { useState } from "react"

export default function FormacaoAcademica(){
  const [loading, setLoading] = useState(true)

  const data = useLoaderData()
  const certificados = data.certificados
  const formacoes = data.formacao

  const colors = ["#255d00ff"]


  return(
    <>
      <div className="w-full h-auto flex flex-col overflow-hidden">
        <div className="w-full h-[100dvh] relative">
          <Particles
            particleCount={1000}
            particleColors={colors}
            particleSpread={7}
            particleBaseSize={200}
            alphaParticles={true}
          />
        </div>
        <div className="w-full h-auto flex items-center justify-center absolute top-[40%]">
          <PageCard
            title = "Formação Acadêmica e Certificados"
            descricao = "Veja um pouco mais da minha trajetória e conhecimentos adquiridos até o momento"
            link="formacao-academica"
          />
        </div>
        <div className="w-full min-h-[100dvh] h-auto pb-4 bg-gradient-to-b from-zinc-gray-900 to-zinc-800
            flex flex-col items-center justify-evenly gap-20 max-md:pb-[8rem]">
          <Reveal>
            <div className="w-[90%] flex flex-col items-center justify-center gap-4" id="formacao-academica">
              <p className="text-4xl font-bold self-baseline">Formação Acadêmica</p>
              <div className="flex flex-wrap gap-6 w-full items-center justify-center">
                {data && formacoes && formacoes.map(form => (
                  <FormacaoCard
                    title={form.nome}
                    descricao={form.descricao}
                    periodo={form.periodo}
                    local={form.local}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}