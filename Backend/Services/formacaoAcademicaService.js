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
      tipo: cert.cert_type,
      local: cert.cert_location,
      tempo: cert.carga_horaria,
      conteudo: cert.conteudo
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
