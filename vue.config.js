// const {
// 	defineConfig
// } = require('@vue/cli-service')
// const path = require('path')
// module.exports = defineConfig({
// 	transpileDependencies: true,
// 	pluginOptions: {
// 		'style-resources-loader': {
// 			preProcessor: 'less',
// 			patterns: [
// 				path.resolve(__dirname, './src/assets/style/common.less')
// 			]
// 		}
// 	}
// })
let publicPath = './'
const path = require('path')
module.exports = {
	devServer: {
		port: 11001
	},
	publicPath: publicPath,
	css: {
		extract: {
			ignoreOrder: true
		}
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, './src/assets/style/common.less')
			]
		}
	}
}
