module.exports = {
  entry: './Scripts/main.ts',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module:{
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  }
};

