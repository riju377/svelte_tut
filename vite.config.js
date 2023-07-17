import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

// module.exports = {
// 	server: {
// 	  hmr: {
// 		overlay: false,
// 	  },
// 	},
//   };


// export default defineConfig({
//   plugins: [
//     polyfillNode({
//       method: 'usage-pure',
//       corejs: 3,
//       features: ['promise', 'fetch'],
//     }),
//     VitePWA(),
//   ],
// });
