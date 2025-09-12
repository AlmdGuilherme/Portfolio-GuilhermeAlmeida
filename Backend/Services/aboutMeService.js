const supabase = require('../supabaseClient.js');

export const aboubtPage = async () => {
    try {
        const { data: projetoData, error: projetoError } = await supabase
            .from('ProjetosInfos')
            .select(`
                proj_id,
                proj_image,
                proj_link
            `)
            .order('proj_id', {ascending: true})

        if (projetoError) {
            console.error('Erro ao buscar projeto do Supabase:', projetoError);
            throw projetoError;
        }

        const projetoFormatado = projetoData.map(proj => ({
            id: proj.proj_id,
            situation: proj.proj_situation,
            name: proj.proj_name,
            image: proj.proj_image,
            team: proj.proj_team,
            descricao: proj.proj_descricao,
            link: proj.proj_link,
        }))

        const { data: certificadosData, error: certificadosError } = await supabase
            .from('CertificadosInfos')
            .select('*')
            .in('cert_id', [6, 9, 11])
            .order('cert_id', {ascending: true})

        if (certificadosError) {
            console.error('Erro ao buscar certificados do Supabase:', certificadosError);
            throw certificadosError;
        }

        const certificadosFormatados = certificadosData.map(cert => ({
            id: cert.cert_id,
            image: cert.cert_image,
            type: cert.cert_type,
            description: cert.cert_descricao,
            location: cert.cert_location,
        }));

        return {
            projeto: projetoFormatado,
            certificados: certificadosFormatados
        };

    } catch (error) {
        console.error('Erro inesperado em aboubtPage:', error);
        throw error;
    }
};