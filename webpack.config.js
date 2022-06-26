const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode:"development",
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/src/public/js',
    filename: 'bundle.js'
  },
     module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        exclude:/node_modules/,
        loader: 'vue-loader'
      },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
