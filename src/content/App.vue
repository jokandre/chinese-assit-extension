<template lang="html">
    <div id="zh-ext-container" v-if="textmatch.length>0">
      <!-- {{selectedText}} -->
      <!-- <li v-for="(word, index) in textmatch">
        {{ word.text }} {{ word.matches[0]['pinyinPretty'] }} - {{word.matches[0]['english']}}
      </li> -->
      <word v-if="word.matches.length>0" v-for="(word, index) in textmatch" :word="word" :key="word.text+'-'+index"></word>
      <span v-else>{{word.text}}</span>
    </div>
</template>
<script>
import Vue from 'vue';

import Word from './word'
// var tokenize = null
// // console.log(JSON.stringify(tokenize('我是中国人。'), null, '  '))
// var res = ''
// chrome.storage.local.get(['ccdict'], function (file) {
//   // res = JSON.stringify(file)
//   // console.log(file)
//   tokenize = require('chinese-tokenizer').load(file['ccdict'])
//   console.log(tokenize('我是中国人。'))
// })
var prefixPunctuation = ['‘', '“', '《', '『', '【', '（']; // eslint-disable-line no-unused-vars
var suffixPunctuation = ['’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？']; //  eslint-disable-line no-unused-vars

export default {
  data: () => ({
    selectedText: '',
    textmatch: '',
    tokenizer: null,
  }),
  components:{
    'word':Word
  },
  computed: {},
  created() {
    // console.log('content')
    var self = this;
    document.addEventListener('mouseup', function(e) {
      self.selectedText = self.getSelectedParagraphText();
    });

    chrome.storage.local.get(['ccdict'], function(file) {
      // console.log(file)
      self.tokenizer = require('chinese-tokenizer').load(file['ccdict']);
      // console.log(JSON.stringify(self.tokenizer('我是中国人。'), null, '  '))
    });
  },
  watch: {
    // whenever question changes, this function will run
    selectedText: function(newval, oldval) {
      if (newval.length > 0) {
        this.updateComponent(newval);
      } else {
        this.closeComponent();
      }
    },
    // tokenizer: function (newval) {
    //   console.log(JSON.stringify(this.tokenizer(this.selectedText), null, '  '))
    // }
  },
  methods: {
    getSelectedParagraphText: function() {
      var selection = '';
      if (window.getSelection) {
        selection = window.getSelection();
      } else if (document.selection) {
        selection = document.selection.createRange();
      }
      return selection.toString();
    },
    updateComponent: function(text) {
      // console.log(text)
      console.log(this.tokenizer(this.selectedText));
      this.textmatch = this.tokenizer(text);
      // console.log(JSON.stringify(this.tokenizer('我是中国人。'), null, '  '))
    },
    closeComponent: function() {
      // this.textmatch = ''
    },
  },
};
</script>
<style scoped>
div {
  color: blue;
}
#zh-ext-container {
  /* height: 40px;  */
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
  position: fixed;
  bottom: 0%;
  /* margin: auto; */
  width: 100vw;
  background-color: rgb(230, 230, 230);
  opacity: 1;
  z-index: 214748343;
}
</style>
