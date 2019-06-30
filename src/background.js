global.browser = require('webextension-polyfill');

console.log('background')
chrome.storage.local.get(['ccdict'], function (result) {
  console.log('Value currently is ' + Object.getOwnPropertyNames(result).length)
  if (Object.getOwnPropertyNames(result).length === 0) {
    fetch(chrome.runtime.getURL('static/data/cedict_ts.u8'))
      .then((response) => response.text()) // assuming file contains json
      .then((text) => {
        chrome.storage.local.set({ccdict: text}, function () {
          console.log('ccdict is set to ' + text)
        })
      })
  }
})
