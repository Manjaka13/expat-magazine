const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config
			.plugin("html")
			.tap(args => {
				args[0].title = "Read Expat.com latest news";
				args[0].description = "Browse through a list of the latest news on news.expat.com and stay up to date with the latest information from around the world.";
				return args;
			})
	},
	devServer: {
		proxy: {
			"/api": {
				target: "https://www.expat.com",
				pathRewrite: { '^/api': '' },
				changeOrigin: true,
				secure: false
			}
		}
	}
});
