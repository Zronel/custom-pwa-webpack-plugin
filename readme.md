# [wip] custom-pwa-webpack-plugin

### webpack plugin for development and customization service worker

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
    entry: path.join(__dirname__, './src/index.js'),
    output: {
        filename: 'bundle.js'
    },
    // ...

    plugins: [
        new CustomPwaWebpackPlugin({
            entry: path.join(__dirname__, 'my-service-worker.js'),
            dist: path.join(__dirname__, 'dist'), 
            version: require('package').version,
            name: 'service-worker.js',
            file_patterns: /\.(js|css|html)$/
        })
    ]
}



```

| Parameters    | Required      | Default               | Description  |
|---------------|:-------------:|:----------------------|--------------|
| entry         | true          |                       | The file from which to start the build script (absolute path)
| dist          | true          |                       | The folder to save the script (absolute path)
| version       | false         |                       | Version to create the cache
| name          | false         | 'service-worker.js'   | File name
| file_patterns | false         | /\\.(js\|css\|html)$/ | Regular expression for file caching
