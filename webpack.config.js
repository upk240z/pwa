const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    watch: false,
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].js"
    },
    entry: {
        app: {
            import: './js/app.ts',
            filename: 'assets/js/app.js'
        },
        worker: {
            import: './js/service-worker.ts',
            filename: 'service-worker.js'
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        ie: '11',
                                        esmodules: true,
                                    },
                                    useBuiltIns: 'usage',
                                    corejs: { version: 3, proposals: true }
                                }
                            ],
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    },
    target: ["web", "es5"]
};
