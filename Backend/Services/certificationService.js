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

export const fetchCertification = async () => {
   const {data: certData, error: certError} = await supabase
    .from('CertificadosInfos')
    .select('*')
    .order('cert_id', {ascending: true})

    if (certError){
      console.log('Erro ao buscar certificados no Supabase:', certError)
      throw certError
    }

    const certificadosFormatados = certData.map(cert => ({
      id: cert.cert_id,
      imagem: cert.cert_image,
      titulo: cert.cert_title,
      local: cert.cert_location,
      tempo: cert.carga_horaria,
      conteudo: cert.conteudo, 
      local_image: cert.location_image
    }))

    return certificadosFormatados
}