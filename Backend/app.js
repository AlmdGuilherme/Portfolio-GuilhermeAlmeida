require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const supabase = require('./supabaseClient.js');
const { aboubtPage } = require('./Services/aboutMeService.js');
const { formAcadPage, allAcademicFormation } = require('./Services/formacaoAcademicaService.js');
const { habilidadesPage } = require('./Services/habilidadesServices.js');
const { fetchCertificationById } = require('./Services/certificationService.js');

let allowedOrigins = [
    'https://almdguilherme.github.io',
    'http://localhost:5173',
    'https://dev-guilherme-almeida.vercel.app'
];

const corsOptions = {
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});

app.get('/api/aboutMePage', async (req, res) => {
    try {
        const data = await aboubtPage()

        if (!data || !data.projeto || !data.certificados) {
            return res.status(404).json({error: 'Dados não encontrados'})
        }

        res.status(200).json(data)
    } catch (error) {
        console.error('Erro inesperado ao buscar projetos e certificados:', error)
        res.status(500).json({error: 'Erro no servidor interno!'})
    }
})

app.get('/api/formacao-academica', async (req, res) => {
    try {
        const data = await formAcadPage()

        if (!data || !data.formacao || !data.certificados) {
            return res.status(404).json({error: 'Dados não encontrados'})
        }

        res.status(200).json(data)
    } catch (error) {
        console.error('Erro inesperado ao buscar formações e certificados:', error)
        res.status(500).json({error: 'Erro no servidor interno!'})
    }
});

app.get('/api/formacao-academica/todas-formacoes', async (req, res)=> {
    try {
        const data = await allAcademicFormation()
        if (!data) {
            return res.status(404).json({error: 'Dados não encontrados'})
        }
        res.status(200).json(data)
    } catch (error) {
        console.error("Erro inesperado ao buscar formação acadêmica:", error)
        res.status(500).json({error: 'Erro no servidor interno!'})
    }
})

app.get('/api/certificado/:certId', async(req, res) => {
    const certId = parseInt(req.params.certId);
    try {
        const data = await fetchCertificationById(certId)
        if (!data) {
            return res.status(404).json({error: 'Dados não econtrados'})
        }

        return res.status(200).json(data)
    } catch (error) {
        console.error('Erro inesperado ao buscar certificado:', error)
        res.status(500).json({error: 'Erro inesperado no servidor interno!'})
    }
})

app.get('/api/habilidades', async (req, res) => {
    try {
        const data = await habilidadesPage()

        if (!data) {
            return res.status(404).json({error: 'Dados não encontrados'})
        }

        res.status(200).json(data)
    } catch (error) {
        console.error('Erro inesperado ao buscar habilidades:', error)
        res.status(500).json({error: 'Erro inesperado no servidor interno!'})
    }
});


app.get('/api/projetos', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('ProjetosInfos')
            .select(`
                proj_id,
                proj_situation,
                proj_name,
                proj_image,
                proj_team,
                proj_descricao,
                proj_link,
                TecnologiasProjetos (
                    TecnologiasInfos (
                        tech_id,
                        tech_name,
                        tech_icon
                    )
                )
            `);

        if (error) {
            console.error('Erro ao buscar projetos do Supabase:', error);
            return res.status(500).json({ error: error.message });
        }
        const projetosFormatados = data.map(projeto => ({
            id: projeto.proj_id,
            situation: projeto.proj_situation,
            name: projeto.proj_name,
            image: projeto.proj_image,
            team: projeto.proj_team,
            description: projeto.proj_descricao,
            link: projeto.proj_link,
            technologies: projeto.TecnologiasProjetos.map(tp => ({
                id: tp.TecnologiasInfos.tech_id,
                name: tp.TecnologiasInfos.tech_name,
                icon: tp.TecnologiasInfos.tech_icon
            }))
        }));
        res.status(200).json(projetosFormatados);
    } catch (error) {
        console.error('Erro inesperado na rota /api/projetos:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});