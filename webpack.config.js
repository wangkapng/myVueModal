var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(dir){
	return path.resolve(__dirname,dir);
}

module.exports = {
	entry:{
		app:'./src/main.js',
	},
	output:{
		path:resolve('dist'),
		filename:'bundle.js',
		publicPath:'/dist/'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				// include:resolve('src'),
				exclude:/node_modules/
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				loader:'file-loader',
				options:{
					name:'[name].[ext]?[hash]'
				}
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.scss$/,
				loader:'sass-loader'
			},
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve:{
		extensions:[".vue",".js",".json",".jsx",".css",".scss"],
		alias:{
			'vue$':'vue/dist/vue.esm.js',
		},
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		// new HtmlWebpackPlugin({
		// 	title:'Output Management',
		// 	filename:'index.html',
		// 	template:'index.html',
		// 	inject:true
		// }),
	],
	devtool:'#eval-source-map',
	devServer:{
		historyApiFallback:true,
		noInfo:true
	}
}