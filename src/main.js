// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*vue-easyTable 组件全局引入*/
// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'
// 表格注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

/*导入 全局jquery*/
import $ from "jquery";

/*
引入 bootStrap 包，
注意：引入 bootstrap 需要引入 jquery
*/
import "./assert/css/bootstrap.css"
import "./assert/css/font-awesome.min.css"
import "./assert/css/ace.min.css"

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
