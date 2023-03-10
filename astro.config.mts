import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import searchIndexes from './src/integrations/searchIndexes/searchIndexes';

export default defineConfig({
  integrations: [mdx(), svelte(), sitemap(), critters(), searchIndexes()]
});