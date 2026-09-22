export class AcademicService {
   baseUrl = "https://portfolio-backend-omega-woad.vercel.app"

   async FetchAcademicBackground() {
    try {
      const response = await fetch(`${this.baseUrl}/academic-background`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      
      if (!response.ok) throw new Error(data.message || "Ocorreu um erro ao buscar o histórico acadêmico.")

      return data
    } catch (error) {
      console.error("Erro ao buscar histórico acadêmico", error)
      throw error
    }
   }
}