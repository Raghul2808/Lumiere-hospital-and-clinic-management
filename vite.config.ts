import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          patientPortal: path.resolve(__dirname, 'patient-portal.html'),
          doctorPortal: path.resolve(__dirname, 'doctor-portal.html'),
          philosophy: path.resolve(__dirname, 'philosophy.html'),
          checkups: path.resolve(__dirname, 'checkups.html'),
          facilities: path.resolve(__dirname, 'facilities.html'),
          centers: path.resolve(__dirname, 'centers.html'),
          care: path.resolve(__dirname, 'care.html'),
          specialists: path.resolve(__dirname, 'specialists.html'),
          booking: path.resolve(__dirname, 'booking.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
