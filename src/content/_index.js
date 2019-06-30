import Vue from 'vue'

console.log('content-script!')

Vue.component('button-counter', {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  template: `
    <div v-if="text !==''">
    <span>{{text}}</span>
    </div>
  `
})

function addContainer () {
  var div = document.createElement('div')
  div.id = 'zh-ext-container'
  div.innerHTML = `
  <button-counter :text="selectedText"></button-counter>
  `
  document.getElementsByTagName('body')[0].appendChild(div)
}

window.onload = function () {
  addContainer()

  new Vue({ // eslint-disable-line no-new
    el: '#zh-ext-container',
    created: function () {
      // `this` points to the vm instance
      var self = this
      document.addEventListener('mouseup', function (e) {
        self.selectedText = self.getSelectedParagraphText()
      })
    },
    data: {
      selectedText: ''
    },
    computed: {
      currentComponent: function () {
        return 'button-counter'
      }
    },
    watch: {
      // whenever question changes, this function will run
      selectedText: function (newval, oldval) {
        if (newval.length > 0) {
          this.updateComponent(newval)
        } else {
          this.closeComponent()
        }
      }
    },
    methods: {
      getSelectedParagraphText: function () {
        var selection = ''
        if (window.getSelection) {
          selection = window.getSelection()
        } else if (document.selection) {
          selection = document.selection.createRange()
        }
        return selection.toString()
      },
      updateComponent: function (text) {
        console.log(text)
      },
      closeComponent: function () {
        console.log('close component')
      }
    }
  })
}
