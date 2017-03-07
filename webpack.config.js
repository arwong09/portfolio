const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [{
            test: /\.jsx$|\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env','react']
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg)$/i,
            loader: 'file-loader?name=[hash].[ext]',
            include: /components/,
            exclude: /node_modules/
        }]
    }
};
