import { supabase } from "../Database/SupabaseClient.js"

export class StackService {
  async FetchStack() {
    try {
      const {data, error} = await supabase.from('Stack')
      .select('*')

      if (error) {
        console.log("Erro ao buscar informações da Stack")
        throw error
      }

      const formattedStack = data.map(stack => ({
        id: stack.id,
        nome: stack.tech_name,
        categoria: stack.category,
        icone: stack.tech_icon
      }))

      return formattedStack
    } catch (error: any) {
      throw error
    }
  }
}