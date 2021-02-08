const path = require('path')

module.exports = {
    mode: 'development',

    module: {
        rules: [  
            {
                test: /\.js$/,
                loader: 'babelLoader',
                options: {
                    
                }
            }
        ]
    },

    //  配置loader解析规则
    resolveLoader: {
        //  loader默认去node_modules下面去找，找不到再去自定义路径找loader
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders')
        ]
    }
}