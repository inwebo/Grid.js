const path = require('path');
const glob = require('glob');

module.exports = {
    entry: {
        main: './src/index.js',
        app: './docs/assets/js/app.js',
        demos: glob.sync('./docs/assets/js/demos/*')
    },
    output: {
        filename: (pathData) => {
            switch (pathData.chunk.name) {
                case 'app':
                    return 'docs/assets/js/[name].min.js';
                case 'demos':
                    return 'docs/assets/js/demos/[name].min.js';
                case 'main':
                    return 'dist/[name].min.js';
            }
        },
        path: path.resolve(__dirname, '.'),
    },
};