import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-theme-default';
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/reset.css'
Vue.use(Element)
// import Popover from 'vue-js-popover'
// Vue.use(Popover)
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.config.productionTip = false
global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser



function addContainer () {
  var div = document.createElement('div')
  div.id = 'zh-ext-container'
  // div.innerHTML = `
  // <button-counter :text="selectedText"></button-counter>
  // `
  document.getElementsByTagName('body')[0].appendChild(div)
}

addContainer()

new Vue({ // eslint-disable-line no-new
  el: '#zh-ext-container',
  render: h => h(App)
})
