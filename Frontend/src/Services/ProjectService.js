export class ProjectService {
  baseUrl = "https://portfolio-backend-omega-woad.vercel.app"

  async fetchProjects(){
    try {
      const response = await fetch(`${this.baseUrl}/projects-background`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || "Ocorreu um erro ao buscar os projetos.")

      return data
    } catch (error) {
      console.error("Erro ao buscar projetos:", error)
      throw error;
    }
  }

  async FetchProjectById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || "Erro ao buscar informações do projeto.");

      return data;
    } catch (error) {
      console.error("Erro ao buscar informações do projeto:", error)
      throw error;
    }
  }
}