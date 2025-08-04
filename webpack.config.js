const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const isProd = process.env.NODE_ENV === "production"

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: isProd ? "/to-do-list/" : "/",
		clean: true,
	},

	devtool: "eval-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		port: 8081,
		watchFiles: ["./src/template.html"],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},

	resolve: {
		alias: {
			"@js": path.resolve(__dirname, "src/js/"),
			"@styles": path.resolve(__dirname, "src/styles/"),
		},
		extensions: [".js", ".css"],
	},
}
