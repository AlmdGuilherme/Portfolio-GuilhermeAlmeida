const supabase = require('../supabaseClient.js');

export const formAcadPage = async () => {
  try{
    const {data: formData, error: formError} = await supabase
    .from('FormacoesInfos')
    .select('*')
    .order('periodo_form', {ascending: true})

    if (formError) {
      console.log('Erro ao buscar formações acadêmicas do Supabase', formError)
    }

    const formacoesFormatadas = formData.map(form => ({
      id: form.form_id,
      nome: form.form_name,
      area: form.area_formacao,
      local: form.local_form,
      periodo: form.periodo_form,
      descricao: form.descricao_form
    }))

    const {data: certData, error: certError} = await supabase
    .from('CertificadosInfos')
    .select('*')
    .order('cert_id', {ascending: true})

    if (certError){
      console.log('Erro ao buscar certificados no Supabase:', certError)
      throw certError
    }

    const certifiacdosFormatados = certData.map(cert => ({
      id: cert.cert_id,
      imagem: cert.cert_image,
      titulo: cert.cert_title,
      local: cert.cert_location,
      tempo: cert.carga_horaria,
      conteudo: cert.conteudo, 
      local_image: cert.location_image
    }))

    return {
      formacao: formacoesFormatadas,
      certificados: certifiacdosFormatados
    }
    
  } catch (error) {
    console.error('Erro inesperado em formAcadPage:', error)
    throw error
  }
}

export const allAcademicFormation = async () => {
  try {
    const {data, error} = await supabase
    .from('FormacoesInfos')
    .select("*")

    if (error) {
      console.error("Erro ao buscar formação acadêmica no Supabase: ", error)
      throw error
    }
    const formatedData = data.map(form => ({
      id: form.form_id,
      nome: form.form_name,
      area: form.area_formacao,
      local: form.local_form,
      periodo: form.periodo_form,
      descricao: form.descricao_form
    }))
    
    return formatedData

  } catch (error) {
    console.error("Erro inesperado na página da formação:", error)
    throw error
  }
} 