export default async function loadFormation() {
  const dados = await fetch("https://portfolio-backend-omega-woad.vercel.app/api/formacao-academica")
  .then((res) => {
    if (!res.ok){
      throw new Error("HTTP Erro! Status: ", res.status)
    }

    return res.json()
  })
  .catch((error) => {
    throw error
  })

  return dados

}