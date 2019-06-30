<template lang="html">
    <div id="zh-ext-container">
      <!-- {{selectedText}} -->
      <li v-for="(word, index) in textmatch">
        {{ word.text }} {{ word.matches[0]['pinyinPretty'] }} - {{word.matches[0]['english']}}
      </li>
      <!-- <el-row v-for="(word, index) in textmatch" key="word.text">
        <el-col :span="24"><div class="grid-content bg-purple-dark">
          {{ word.text }} {{ word.matches[0]['pinyinPretty'] }} - {{word.matches[0]['english']}}
        </div>
        </el-col>
      </el-row> -->
      <!-- <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <!-- {{textmatch}} -->
    </div>
</template>
<script>
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
  padding: 10px;
  position: fixed;
  bottom: 0%;
  width: 100vw;
  background-color: rgb(230, 230, 230);
  opacity: 1;
  z-index: 2147483643;
}
</style>
