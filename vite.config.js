import { glob } from 'glob';
import { resolve, relative } from 'path';

/**
 * Output path to accomodate deployment on Github Pages using 'docs` branch.
 * Update 'prebuild' script in `package.json if this value is changed 
 */
const outputPath = '../docs';

export default {
    base: './',
    root: 'src',
    build: {
        outDir: outputPath,
        emptyOutDir: true,
        rollupOptions: {
			input: glob
				.sync(resolve(__dirname, '**/*.html'))
				.filter((path) => !path.startsWith(resolve(__dirname, outputPath)))
				.reduce((entries, path) => {
					entries[relative(__dirname, path).replace(/\.[^/.]+$/, '')] = path;
					return entries;
				}, {}),
			output: {
				chunkFileNames: '[name]-[hash].js',
				entryFileNames: '[name]-[hash].js',
				assetFileNames: '[name]-[hash][extname]'
			},
		},
    },
    server: {
        open: "/index.html",
    }
}