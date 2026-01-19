const baseUrl = "https://portfolio-backend-omega-woad.vercel.app/api/"

export const fetchFormacaoAcademica = async () => {
  try {
    const response = await fetch(`${baseUrl}formacao-academica`);
    if (!response.ok) throw new Error("Erro ao buscar formação acadêmica");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const fetchCertification = async () => {
  try {
    const response = await fetch(`${baseUrl}certificados`);
    if (!response.ok) throw new Error("Erro ao buscar certificados");
    return await response.json();
  } catch (error) {
    throw error
  }
}

export const fetchHabilidades = async () => {
  try {
    const response = await fetch(`${baseUrl}habilidades`)
    if (!response.ok) throw new Error("Erro ao buscar habilidades")
    return await response.json();
  } catch (error) {
    throw error
  }
}