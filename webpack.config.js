const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'es2015', 'stage-0']
                        }
                    }
                ],
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
    
}