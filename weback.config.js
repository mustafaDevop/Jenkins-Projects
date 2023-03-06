const webpack = require("webpack")

module.exports={
    mode:"development",  // to specify the mode 
    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
    
  }
