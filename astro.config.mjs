// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import fs from 'node:fs';
import rehypeImageAttrs from './rehype-image-attrs.mjs';

// Map each blog URL to its last-modified date (updatedDate, else pubDate) for the sitemap.
const lastmod = {};
for (const f of fs.readdirSync('./src/content/blog')) {
	if (!/\.mdx?$/.test(f)) continue;
	const fm = fs.readFileSync(`./src/content/blog/${f}`, 'utf8').split('---')[1] ?? '';
	const d = (fm.match(/^updatedDate:\s*'?([^'\n]+)'?/m) ?? fm.match(/^pubDate:\s*'?([^'\n]+)'?/m))?.[1];
	const date = d ? new Date(`${d.trim()} 12:00:00 UTC`) : null;
	if (date && !isNaN(date)) lastmod[`/blog/${f.replace(/\.mdx?$/, '')}/`] = date.toISOString();
}

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.contactdoublecheck.com',
	markdown: { rehypePlugins: [rehypeImageAttrs] },
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/blog/welcome/') && !page.includes('/learning/'),
			serialize(item) {
				const path = new URL(item.url).pathname;
				if (lastmod[path]) item.lastmod = lastmod[path];
				return item;
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
