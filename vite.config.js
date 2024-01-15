/**
 * author: Gabriel Diaconu
 * date: January 2024
 * purpose: setting up a Vite configuration for a React application. It imports the 'defineConfig' function from 'vite' and the 'react' plugin from '@vitejs/plugin-react'. The configuration object is defined using 'defineConfig', specifying the 'react' plugin in the 'plugins' array. This code is part of the Vite configuration file ('vite.config.js') and is essential for enabling React support and configuring other aspects of the development environment. The configuration is extensible, allowing for additional customization based on project requirements.
 * **/

import { defineConfig } from 'vite'; // Importing 'defineConfig' function from 'vite'

import react from '@vitejs/plugin-react'; // Importing the 'react' plugin from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Configuring the Vite plugins array with the 'react' plugin
});