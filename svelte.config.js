import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;


// import adapter from '@sveltejs/adapter-auto';
// import injectProcessEnv from 'rollup-plugin-inject-process-env';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter(),

// 		// Add the "rollup-plugin-inject-process-env" plugin to the "vite" field.
// 		vite: {
// 			plugins: [
// 				injectProcessEnv({
// 					self: '{}',
// 				}),
// 			],
// 		},
// 	},
// };

// export default config;


// import adapter from '@sveltejs/adapter-auto';
// import { preprocess } from 'svelte/compiler';
// import injectProcessEnv from 'rollup-plugin-inject-process-env';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
// 	},

// 	preprocess: [
// 		{
// 			// Use preprocess to inject 'self' object during build process
// 			script: ({ content }) => {
// 				const result = preprocess(content, {
// 					script: ({ content }) => {
// 						return {
// 							code: `${content}\n\nconst self = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};`,
// 						};
// 					},
// 				});
// 				return result;
// 			},
// 		},
// 	],

// 	// Use the 'rollup-plugin-inject-process-env' plugin for server-side rendering
// 	rollupOptions: {
// 		plugins: [
// 			injectProcessEnv({
// 				self: '{}',
// 			}),
// 		],
// 	},
// };

// export default config;




