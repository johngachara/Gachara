import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff2,ttf}'],
                clientsClaim: true,
                skipWaiting: true,
                cleanupOutdatedCaches : true,
            },
            manifest: {
                name: 'GACHARA',
                short_name: 'GACHARA',
                description: 'PORTFOLIO',
                theme_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                background_color: '#ffffff',
                icons: [
                    {
                        src: 'logo192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: 'logo512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ]
            },
            injectRegister: 'auto',
        })
    ],
    server: {
        open: false,
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            screens: path.resolve(__dirname, './src/screens'),
            components: path.resolve(__dirname, './src/components')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    build: {
        outDir: 'build',
    }
});