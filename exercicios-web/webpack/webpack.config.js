const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: modoDev? "development": "production", //Define se iremos criar um arquivo em prod ou dev, caso seja omitido, será gerado em prod
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        static: {
            directory: "./public",
        },
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css' //define o nome do arquivo que conterá o css
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: { //Conjunto com a relação arquivo-loader
        rules: [{
            test: /\.s?[ac]ss/, //expressão regular que define o tipo do arquivo
            use:[ //array que define os plugins para o tratamento do arquivo
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //Interpreta @import, url()...
                "sass-loader"
            ]
        }, 
        // {
        //     test: /\.(png|svg|jpg|gif)$/,
        //     use: ['file-loader']
        // }
        ]
    }
}