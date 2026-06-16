export class ProjectService {
  baseUrl = "https://portfolio-backend-omega-woad.vercel.app/projetos"

  async LandingPageProjects(){
    try {
      const response = await fetch(`${this.baseUrl}/landing-page`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || "Erro ao buscar projetos para a Landing Page.")

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