import { supabase } from "../Database/SupabaseClient.js"

export class AcademicService {
  async fetchTrainingHistory() {
    try {
      const { data, error } = await supabase.from('Education')
        .select('*')
        .order('start_date', { ascending: true })

      if (error) {
        console.log("Erro ao buscar histórico de formação.")
        throw error
      }

      const formatedDegree = data.map(degree => ({
        id: degree.id,
        nome: degree.name,
        local: degree.local,
        inicio: degree.start_date,
        prazo: degree.end_date
      }))

      return formatedDegree;
    } catch (error: any) {
      throw error
    }
  }
}