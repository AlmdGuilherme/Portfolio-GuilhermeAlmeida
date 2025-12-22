import { defineConfig } from 'jsrepo';

export default defineConfig({
    registries: [
        "https://reactbits.dev/tailwind/registry.json"
    ],
    paths: {
		"Animations": './src/Componentes/Animations',
		"Backgrounds": './src/Componentes/Backgrounds',
		"Components": './src/Componentes/Components',
		"TextAnimations": './src/Componentes/TextAnimations',
		component: './src/blocks'
    },
});