# custom-pwa-webpack-plugin

### webpack plugin for development and customization service worker

![webpack](img/custom-pwa-webpack-plugin.svg)

A plugin to help you create your Progressive Web Apps.

It will suit you if you know what you are doing, and you just need a tool for this.

#### Usage:


Add this code to the script of your service worker. It will be replaced by the same variables. Only with actual values.


`my-service-worker.js`
```JavaScript
// <version_template
const VERSION = '0.1';
const files = [];
// end_version_template>

// ...
```
You can use the files to create a query cache. They will be collected relative to the pattern specified in the options.

Next, connect the plugin and specify the desired options.

`webpack.config.js`
```JavaScript
var path = require('path');
var CustomPwaWebpackPlugin = require('custom-pwa-webpack-plugin');

module.exports = {
    // You config
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js'
    },
    // ...

    plugins: [
        new CustomPwaWebpackPlugin({
            entry: path.join(__dirname, 'my-service-worker.js'),
            dist: path.join(__dirname, 'dist'), 
            version: require('./package').version,
            name: 'service-worker.js',
            file_pattern: /\.(js|css|html)$/
        })
    ]
}



```

| Parameters    | Default                 | Required      | Description  |
|---------------|:------------------------|:-------------:|--------------|
| entry         |                         | true          | The file from which to start the build script (absolute path)
| dist          |                         | true          | The folder to save the script (absolute path)
| version       |                         | false         | Version to create the cache
| name          | 'service-worker.js'     | false         | File name
| file_pattern  | /\\.(js\|css\|html)$/i  | false         | Regular expression for file caching
| file_prefix   | '/'                     | false         | Prefix path for files
| num_runned    | 0                       | false         | HACK for webpack <4 and Nuxt

> `num_runned` - Need if you start multiple processes, and only one need to run. Then specify the number. For Nuxt is `1`.
