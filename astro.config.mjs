import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    output: 'static',
    trailingSlash: 'ignore',
    site: 'https://portfolio.dmlorenzo.it',

    // Prefetch tab links on hover so page-to-page nav feels instant
    prefetch: true,

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [
        sitemap(),
        compress({
            CSS: true,
            SVG: false,
            Image: false,
            HTML: {
                "html-minifier-terser": {
                    collapseWhitespace: true,
                    // collapseInlineTagWhitespace: true, // It breaks display-inline / flex-inline text
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    // removeEmptyElements: true, // It removes sometimes SVGs
                    removeRedundantAttributes: true
                },
            },
            JavaScript: {
                'terser': {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    }
                }
            }
        })
    ]
});