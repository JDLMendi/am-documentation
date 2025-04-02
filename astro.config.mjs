// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jdlmendi.github.io',
	base: 'am-documentation',
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
						{ label: 'Plugin Editor', slug: 'user-interface/plugin-editor' },
					],
				},

				{
					label: 'Processor',
					items: [
						{ label: 'Plugin Processor', slug: 'processor/plugin-processor' },
					],
				},

				{
					label: 'Ensemble Model',
					items: [
						{ label: 'Ensemble Model', slug: 'ensemble-model/ensemble-model' },
						{
							label: 'Players',
							collapsed: true,
							items: [
								{ label: 'Player', slug: 'ensemble-model/players/player' },
								{ label: 'User Player', slug: 'ensemble-model/players/user-player' },
							]
						},
					],
				},

				{
					label: 'Open Sound Control (OSC)',
					items: [
						{ label: 'How it works', slug: 'osc-messaging/how-it-works' },
						{ label: 'Listening for Messages', slug: 'osc-messaging/listening' },
						{ label: 'Sending Messages', slug: 'osc-messaging/sending' },
						{ label: 'Making your own messages', slug: 'osc-messaging/making-messages' },
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
				'./src/styles/root.css',
			  ],
			lastUpdated: true,
		}),
	],
});
