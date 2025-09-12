const supabase = require('../supabaseClient.js');

export const habilidadesPage = async () =>{
  try{
    const {data, error} = await supabase
    .from('HabilidadesInfos')
    .select('*')
    .order('skill_id', {ascending: true})

    if (error) {
      console.log('Erro ao buscar habilidades do Supabase')
      throw error
    }

    const habilidadesFormatdas = data.map(hab => ({
      id: hab.skill_id,
      nome: hab.skill_name,
      rgba: hab.rgba,
      icon: hab.iconClass,
      tipo: hab.skill_type
    }))

    return habilidadesFormatdas

  } catch (error) {
    console.error('Erro inesperado na página de certificados!', error)
    throw error
  }
}