import adapter from '@sveltejs/adapter-static';
import path from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      base: '/help'
    }),
    alias: {
      $lib: path.resolve('./src/lib'),
      $styles: path.resolve('./src/styles')
  }
	}
};

export default config;
