# vue2Test
#vue-loader版本升级到15.*之后，导致编译失败，在webpack添加const VueLoaderPlugin = require('vue-loader/lib/plugin')，并在plugins中添加new VueLoaderPlugin();