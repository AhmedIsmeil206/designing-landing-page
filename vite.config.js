import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@shared': path.resolve(__dirname, 'src/components/shared'),
            '@body': path.resolve(__dirname, 'src/components/body-content'),
            '@header': path.resolve(__dirname, 'src/components/header-content'),
            '@footer': path.resolve(__dirname, 'src/components/footer-content'),
        },
    },
})
