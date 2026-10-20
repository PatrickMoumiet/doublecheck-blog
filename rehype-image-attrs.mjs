// Adds width/height (prevents layout shift) and lazy loading to markdown images served from /public/images.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export default function rehypeImageAttrs() {
	return async (tree) => {
		const imgs = [];
		const walk = (node) => {
			if (node.type === 'element' && node.tagName === 'img') imgs.push(node);
			(node.children ?? []).forEach(walk);
		};
		walk(tree);
		let first = true;
		for (const node of imgs) {
			const src = node.properties?.src;
			if (typeof src !== 'string' || !src.startsWith('/images/')) continue;
			const file = path.join(process.cwd(), 'public', src);
			if (!fs.existsSync(file)) continue;
			try {
				const { width, height } = await sharp(file).metadata();
				if (width && height) {
					node.properties.width = width;
					node.properties.height = height;
				}
			} catch {}
			node.properties.decoding = 'async';
			// Keep the first image eager (likely above the fold); lazy-load the rest.
			if (!first) node.properties.loading = 'lazy';
			first = false;
		}
	};
}
