const webpack = require("webpack");
module.exports = {
    entry: "/js/profile.js",
    output: {
        path: __dirname + "dist",
        filename: "app.js"
    }
}