const supabase = require('../supabaseClient.js');

export const aboubtPage = async () => {
    try {
        const { data: projetoData, error: projetoError } = await supabase
            .from('ProjetosInfos')
            .select(`
                proj_id,
                proj_situation,
                proj_name,
                proj_image,
                proj_team,
                proj_descricao,
                proj_link
            `)
            .eq('proj_id', 2)
            .single();

        if (projetoError) {
            console.error('Erro ao buscar projeto do Supabase:', projetoError);
            throw projetoError;
        }

        const projetoFormatado = {
            id: projetoData.proj_id,
            situation: projetoData.proj_situation,
            name: projetoData.proj_name,
            image: projetoData.proj_image,
            team: projetoData.proj_team,
            descricao: projetoData.proj_descricao,
            link: projetoData.proj_link,
        };

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