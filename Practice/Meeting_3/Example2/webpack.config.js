const webpack = require("webpack");
module.exports = {
    entry: "/js/profile.js",
    output:{
        path: __dirname+"/dist",
        filename: "app.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    }
}