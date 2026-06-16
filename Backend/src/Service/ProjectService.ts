import { supabase } from "../Database/SupabaseClient.js";

export class ProjectService {
  async landingPageProjects() {
    try {
      const { data, error } = await supabase.from('ProjetosInfos')
        .select('proj_id, proj_situation, proj_image, proj_team, proj_name, proj_descricao, my_role, proj_link')
        .order('proj_id', { ascending: true })

      if (error) {
        console.log('Erro ao buscar informações do projeto.')
        throw error
      }

      const formattedProjects = data.map(project => ({
        id: project.proj_id,
        nome: project.proj_name,
        descricao: project.proj_descricao,
        situacao: project.proj_situation,
        imagem: project.proj_image,
        funcao: project.my_role,
        time: project.proj_team,
        link: project.proj_link
      }));

      return formattedProjects;
    } catch (error: any) {
      throw error
    }
  }

  async fetchProjectById(id: number) {
    try {
      const { data, error } = await supabase.from('ProjetosInfos')
        .select('*').eq('proj_id', id).single()
      if (error) {
        console.error("Erro ao buscar projetos para a lista de projetos")
        throw error
      }

      const formattedProject = {
        id: data.proj_id,
        situacao: data.proj_situation,
        image: data.proj_image,
        time: data.proj_team,
        nome: data.proj_name,
        descricao: data.proj_descricao,
        funcao: data.my_role,
        contribuicao: data.main_contributions,
        lista_contribuicao: data.contribution_list,
        parceiro: data.partner_company,
        link: data.proj_link
      }
      
      return formattedProject
    } catch (error: any) {
      throw error;
    }
  }
}