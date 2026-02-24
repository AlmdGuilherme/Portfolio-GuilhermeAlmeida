const supabase = require("../supabaseClient.js")

export const fetchProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('ProjetosInfos')
      .select('proj_id, proj_situation, proj_image, proj_team, proj_name, proj_descricao, proj_link')
      .order('proj_id', { ascending: true })

    if (error) {
      console.log("Erro ao buscar projetos do Supabase")
      throw error
    } 

    const formatedProjects = data.map(proj => ({
      id: proj.proj_id,
      name: proj.proj_name,
      description: proj.proj_descricao,
      situation: proj.proj_situation,
      image: proj.proj_image,
      team: proj.proj_team,
      link: proj.proj_link
    }))

    return formatedProjects
  } catch (error) {
    console.error("Erro inesperado na página de projetos: ", error)
    throw error
  }

}