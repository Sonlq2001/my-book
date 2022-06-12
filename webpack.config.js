module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"vue-style-loader",
					"css-loader",
					"sass-loader",
					{
						loader: "sass-loader",
						options: {
							indentedSyntax: true,
							// sass-loader version >= 8
							sassOptions: {
								indentedSyntax: true,
							},
						},
					},
				],
			},
		],
	},
};
