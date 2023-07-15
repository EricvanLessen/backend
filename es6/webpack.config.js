/**
 * Created by Eric on 5/15/17.
 */
module.exports = {

  entry: './assets/js/scripts.js',
  output: {filename: './public/js/bundle.js'


  },


  module:{

      loaders: [


          {

              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {

                  presets:['es2015']

              }




          }



      ]


  }





};