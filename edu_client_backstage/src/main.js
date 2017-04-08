import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import resource from 'vue-resource'
import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-default/index.css'
import routerConfig from "./router.config.js"
Vue.config.debug=true;
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
