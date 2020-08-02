import Vue from 'vue'
import App from './Pages/PipelinePage.vue'
import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios' //引入axios
Vue.prototype.$ajax=axios //修改Vue的原型属性

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
