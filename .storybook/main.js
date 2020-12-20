module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-css-modules-preset'
  ],
  /*
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.module.rules.push({
        test: /\.css$/,
        loaders: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: {
                        mode: 'local',
                    },
                },
            },
        ],
    });

    // Return the altered config
    return config;
  },*/
}
