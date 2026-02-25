require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const supabase = require('./supabaseClient.js');
const { formAcadPage } = require('./Services/formacaoAcademicaService.js');
const { fetchSkills } = require('./Services/habilidadesServices.js');
const { fetchCertification } = require('./Services/certificationService.js');
const { fetchProjects } = require('./Services/projectSevice.js')

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

app.get('/api/formacao-academica', async (req, res) => {
    try {
        const data = await formAcadPage()

        if (!data) {
            return res.status(404).json({ error: 'Dados não encontrados' })
        }

        res.status(200).json(data)
    } catch (error) {
        console.error('Erro inesperado ao buscar formações:', error)
        res.status(500).json({ error: 'Erro no servidor interno!' })
    }
});

app.get('/api/certificados', async (req, res) => {
    try {
        const data = await fetchCertification()
        if (!data) {
            return res.status(404).json({ error: 'Dados não encontrados' })
        }

        res.status(200).json(data)
    } catch (error) {
        console.error('Erro inesperado ao buscar certificados:', error)
        res.status(500).json({ error: 'Erro no servidor interno!' })
    }
})

app.get('/api/habilidades', async (req, res) => {
    try {
        const data = await fetchSkills()
        if (!data) return res.status(404).json({ error: 'Dados não encontrados' })
        res.status(200).json(data)

    } catch (error) {
        console.error('Erro inesperado ao buscar habilidades: ', error)
        res.status(500).json({ error: 'Erro no servidor interno!' })
    }
})

app.get('/api/projetos', async (req, res) => {
    try {
        const data = await fetchProjectsb()
        if (!data) return res.status(404).json({ error: "Dados não encontrados" })
        res.status(200).json(data)
    } catch (error) {
        console.error("Erro inesperado ao buscar projetos!")
        res.status(500).json({ error: 'Erro no servidor interno' })
    }
});