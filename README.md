# vue2Test
#vue-loader版本升级到15.*之后，导致编译失败，在webpack添加const VueLoaderPlugin = require('vue-loader/lib/plugin')，并在plugins中添加new VueLoaderPlugin();

#v-if与v-show的区别
v-if为false时，不渲染整个元素
v-show为false时，渲染元素，但是会把样式置为display:none
v-if对当前元素的事件进行监听，置为false时销毁，为true时重新添加；v-show则不会,v-show 则只是简单地基于 CSS 切换。
区别：
v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换使用 v-show 较好，如果在运行时条件不大可能改变则使用 v-if 较好。