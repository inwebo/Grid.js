const path = require('path');
const glob = require('glob');

module.exports = {
    entry: {
        main: './src/index.js',
        app: './docs/assets/js/app.js',
        demos: glob.sync('./docs/assets/js/demos/demo-*')
    },
    output: {
        filename: (pathData) => {
            switch (pathData.chunk.name) {
                case 'main':
                    return 'dist/[name].min.js';
                case 'app':
                    return 'docs/assets/js/[name].min.js';
                case 'demos':
                    return 'docs/assets/js/demos/[name].min.js';
            }
        },
        path: path.resolve(__dirname, '.'),
    },
};