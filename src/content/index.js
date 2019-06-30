import Vue from 'vue'
import App from './App.vue'

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
