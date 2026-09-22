export class StackService {
  baseUrl = "https://portfolio-backend-omega-woad.vercel.app/"

  async FetchStack() {
    try {
      const response = await fetch(`${this.baseUrl}my-stack`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || "Ocorreu um erro ao buscar a stack.")

      return data
    } catch (error) {
      console.error("Erro ao buscar stack:", error);
      throw error;
    }
  }
}