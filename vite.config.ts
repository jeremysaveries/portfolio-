import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: "/jeremysaveries/portfolio-/", // Remplace bien par le nom de ton repo
  plugins: [svelte()],
  build: {
    outDir: 'dist', // Répertoire où Vite mettra les fichiers construits
    emptyOutDir: true, // Assure-toi que le dossier 'dist' est vidé avant de reconstruire
  }
});
