const path = require("path");

module.exports = {
    entry: { electron: './src/electron/electron.ts', ui: './src/index.ts' },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, "public")
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: 'electron-main',
}
