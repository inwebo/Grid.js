const path = require('path');
const glob = require('glob');

module.exports = {
    entry: {
        main: './src/index.js',
        app: './docs/assets/js/app.js',
        demo1: glob.sync('./docs/assets/js/demos/demo-1.js'),
        demo2: glob.sync('./docs/assets/js/demos/demo-2.js'),
        test: './test/tests.js',
    },
    output: {
        filename: (pathData) => {
            switch (pathData.chunk.name) {
                case 'test':
                case 'main':
                    return 'dist/[name].min.js';
                case 'app':
                    return 'docs/assets/js/[name].min.js';
                case 'demo1':
                case 'demo2':
                    return 'docs/assets/js/demos/[name].min.js';
                default:
                    break;
            }
        },
        path: path.resolve(__dirname, '.'),
    },
};