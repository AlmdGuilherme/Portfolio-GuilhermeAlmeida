const supabase = require('../supabaseClient.js');

export const fetchCertificationById = async (id) => {
  try {
    const {data, error} = await supabase
    .from('CertificadosInfos')
    .select('*')
    .eq('cert_id', id)
    .single()

    if (error) {
      console.error("Erro ao buscar certificado no Supabase: ", error)
      throw error
    }

    const formatedCertification = {
      id: data.cert_id,
      image: data.cert_image,
      title: data.cert_title,
      location: data.cert_location,
      time: data.carga_horaria,
      content: data.conteudo,
      img_local: data.location_image
    }

    return formatedCertification
  } catch (error) {
    console.error("Erro inesperado na página do certificado:", error)
    throw error
  }
}