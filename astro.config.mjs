import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import critters from 'astro-critters'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	site: 'https://truenorthpropertyservices.ca',
	integrations: [tailwind(), critters(), sitemap(), robotsTxt(), partytown()]
})
