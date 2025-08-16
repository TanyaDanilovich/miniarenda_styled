import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
           // 'swiper/css': 'swiper/swiper-bundle.css',
        },
    },
})
