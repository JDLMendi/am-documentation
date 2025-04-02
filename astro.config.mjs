// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Adaptive Metronome',
			logo: {
				src: './src/assets/ARME.png',
			},
			social: {
				github: 'https://github.com/arme-project/AdaptiveMetronome',
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
								{ label: 'About', slug: 'get-started/about' },
								{ label: 'Installation', slug: 'get-started/installation' },
								{ label: 'How to use', slug: 'get-started/how-to-use' },

							],
				},

				{
					label: 'User Interface',
					items: [
						{ label: 'Plugin Editor', slug: '' },
					],
				},

				{
					label: 'Processor',
					items: [
						{ label: 'Plugin Processor', slug: '' },
					],
				},

				{
					label: 'Ensemble Model',
					items: [
						{ label: 'Ensemble Model', slug: '' },
						{
							label: 'Players',
							collapsed: true,
							items: [
								{ label: 'Player', slug: '' },
								{ label: 'User Player', slug: '' },
							]
						},
					],
				},

				{
					label: 'Open Sound Control (OSC)',
					items: [
						{ label: 'How it works', slug: '' },
						{ label: 'Listening Messages', slug: '' },
						{ label: 'Sending Messages', slug: '' },
						{ label: 'Making your own messages', slug: '' },
					],
				},


				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/root.css',
			  ],
		}),
	],
});
