import { supabase } from "../Database/SupabaseClient.js";

export class ProjectService {
  async landingPageProjects() {
    try {
      const { data, error } = await supabase.from('Project')
        .select('id, situation, image, team, name, description, my_role, link')
        .order('id', { ascending: true })

      if (error) {
        console.log('Erro ao buscar informações do projeto.')
        throw error
      }

      const formattedProjects = data.map(project => ({
        id: project.id,
        nome: project.name,
        descricao: project.description,
        situacao: project.situation,
        imagem: project.image,
        funcao: project.my_role,
        time: project.team,
        link: project.link
      }));

      return formattedProjects;
    } catch (error: any) {
      throw error
    }
  }

  async fetchProjectById(id: number) {
    try {
      const { data, error } = await supabase.from('Project')
        .select('*').eq('id', id).single()
      if (error) {
        console.error("Erro ao buscar projetos para a lista de projetos")
        throw error
      }

      const formattedProject = {
        id: data.id,
        situacao: data.situation,
        image: data.image,
        time: data.team,
        nome: data.name,
        descricao: data.description,
        funcao: data.my_role,
        contribuicao: data.main_contributions,
        lista_contribuicao: data.contribution_list,
        parceiro: data.partner_company,
        link: data.link,
        techs: data.techs
      }
      
      return formattedProject
    } catch (error: any) {
      throw error;
    }
  }
}