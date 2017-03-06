const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(png|jpg)$/i,
            loader: 'file-loader?name=[path][hash].[ext]',
            include: path.join(__dirname, 'assets/images')
        }]
    },
};
