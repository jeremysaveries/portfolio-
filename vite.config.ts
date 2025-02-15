import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: "/jeremysaveries/portfolio-/", // Remplace bien par le nom de ton repo
  plugins: [svelte()],
});
