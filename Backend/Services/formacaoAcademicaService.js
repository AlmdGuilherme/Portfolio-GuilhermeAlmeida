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

    return formacoesFormatadas
    
  } catch (error) {
    console.error('Erro inesperado em formAcadPage:', error)
    throw error
  }
}