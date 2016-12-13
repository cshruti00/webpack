var path = require('path');

module.exports = {
	entry : "./entry.es6",
	output : {
		path : __dirname,
        filename: "bundle.js",
    },
	module : {
		loaders : [
			{ test: /\.es6$/,
				exclude: /node_modules/,
               loader: 'babel-loader',
               preset : ['es2015'] 
            }
		]
	},
	watch:true
}