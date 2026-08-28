---
import { Image } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
import FormattedDate from '../components/FormattedDate.astro';
import Header from '../components/Header.astro';

type Props = CollectionEntry<'blog'>['data'];

const { title, description, pubDate, updatedDate, heroImage, authorName, authorImage, toc } =
	Astro.props;
---

<html lang="en">
	<head>
		<BaseHead title={title} description={description} />
		<style>
			main {
				width: calc(100% - 2em);
				max-width: 100%;
				margin: 0;
			}
			.hero-image {
				width: 100%;
			}
			.hero-image img {
				display: block;
				margin: 0 auto;
				border-radius: 12px;
				box-shadow: var(--box-shadow);
			}
			.prose {
				width: 720px;
				max-width: calc(100% - 2em);
				margin: auto;
				padding: 1em;
				color: rgb(var(--gray-dark));
			}
			.title {
				margin-bottom: 1em;
				padding: 1em 0;
				text-align: center;
				line-height: 1;
			}
			.title h1 {
				margin: 0 0 0.5em 0;
			}
			.date {
				margin-bottom: 0.5em;
				color: rgb(var(--gray));
			}
			.byline {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.6em;
				margin-bottom: 1em;
				text-align: left;
			}
			.byline img {
				width: 36px;
				height: 36px;
				border-radius: 50%;
				object-fit: cover;
				margin: 0;
				border: none;
			}
			.byline .byline-text {
				line-height: 1.3;
			}
			.byline .byline-label {
				display: block;
				font-size: 0.75em;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				color: rgb(var(--gray));
			}
			.byline .byline-name {
				display: block;
				font-weight: 600;
				color: rgb(var(--black));
			}
			.toc {
				border: 1px solid rgb(var(--gray-light));
				border-radius: 6px;
				padding: 1.2em 1.4em;
				margin: 0 0 2em 0;
				background: var(--card-bg);
			}
			.toc-label {
				display: block;
				font-size: 0.75em;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.06em;
				color: var(--accent);
				margin-bottom: 0.6em;
			}
			.toc ul {
				margin: 0;
				padding: 0;
				list-style: none;
				columns: 2;
				column-gap: 1.5em;
			}
			.toc li {
				margin-bottom: 0.5em;
				break-inside: avoid;
			}
			.toc a {
				text-decoration: none;
				font-size: 0.95em;
			}
			.toc a:hover {
				color: var(--accent-dark);
			}
			@media (max-width: 600px) {
				.toc ul {
					columns: 1;
				}
			}
			.last-updated-on {
				font-style: italic;
			}
		</style>
	</head>

	<body>
		<Header />
		<main>
			<article>
				<div class="hero-image">
					{heroImage && <Image width={1020} height={510} src={heroImage} alt="" />}
				</div>
				<div class="prose">
					<div class="title">
						<div class="date">
							<FormattedDate date={pubDate} />
							{
								updatedDate && (
									<div class="last-updated-on">
										Last updated on <FormattedDate date={updatedDate} />
									</div>
								)
							}
						</div>
						<h1>{title}</h1>
						{
							authorName && (
								<div class="byline">
									{authorImage && <img src={authorImage} alt={authorName} />}
									<span class="byline-text">
										<span class="byline-label">Written by</span>
										<span class="byline-name">{authorName}</span>
									</span>
								</div>
							)
						}
						<hr />
					</div>
					{
						toc && toc.length > 0 && (
							<nav class="toc">
								<span class="toc-label">In this report</span>
								<ul>
									{toc.map((item) => (
										<li>
											<a href={`#${item.anchor}`}>{item.label}</a>
										</li>
									))}
								</ul>
							</nav>
						)
					}
					<slot />
				</div>
			</article>
		</main>
		<Footer />
	</body>
</html>
