import Vue from 'vue'
import App from './Pages/PipelinePage.vue'
import ElementUI from 'element-ui'  

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
