# Starter AlpineJS
Starter kit for AlpineJS and TailwindCSS projects.

## Description
This barebone starter kit serves as starting point when developing web applications or sites. It eliminates the need for base configuration for AlpineJS and Tailwind. By default, this project is utilizing [Vite](https://vitejs.dev/) for source code bundling.

## Installation
Clone this repository to get started.

Run the following command in project directory to install dependencies.
```bash
npm install
```

Run one of the following commands to execute, build or preview site using Vite server:
```bash
npm run dev
npm run build
npm run preview
```

## Vite Configuration

Vite has been preconfigured in `vite.config.ts` to optimize the development workflow for AlpineJS and TailwindCSS projects:
```typescript
export default defineConfig({
    base: '/starter-alpinejs/',
    root: './src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: glob.sync(resolve(__dirname, 'src/**/*.html'))
        }
    },
    plugins: [
        tailwindcss(),
    ],
})
```

- **`base`**: Sets the base public path for deployment, configured for GitHub Pages hosting
- **`root`**: Defines the source directory as `./src` where your development files are located  
- **`publicDir`**: Points to the `../public` directory for static assets that should be copied as-is
- **`build.outDir`**: Specifies the output directory `../dist` for production builds
- **`build.emptyOutDir`**: Automatically cleans the output directory before each build
- **`rollupOptions.input`**: Uses glob pattern to automatically detect and build all HTML files in the src directory
- **`plugins`**: Includes TailwindCSS plugin for processing utility classes during build

This configuration supports multi webpages by dynamically build all HTML files in `./src` into `./dist` and ensures proper asset handling in `./public`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/mkfizi/starter-alpinejs/blob/main/LICENSE)
