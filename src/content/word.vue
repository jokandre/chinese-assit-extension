<template>
  <span>
  <!-- <span class="tooltip" v-on:click="toggle"> 
    {{ word.text }}</span> -->
    <!-- <button v-popover:foo.top>Toggle popover</button>
    <popover name="foo">
      Hello!
    </popover> -->
  <el-popover
    placement="top"
    trigger="click" >
    <p v-for="(item, index) in [word.matches[0]]" :key="item['english']+'-'+index">
      {{item['pinyinPretty']}}
      <!-- <ul class="example-1"> -->
        <span v-for="(meaning, idx) in item['english'].split('/')" :key="meaning+'-'+idx">
          <br/>&#10032; {{ meaning }}
        </span>
      <!-- </ul> -->
    </p>
    <!-- <el-button slot="reference">{{ word.text }}</el-button> -->
    <span slot="reference">{{ word.text }}</span>
  </el-popover>

    <!-- <span
      class="tooltiptext"
      :class="{tooltiptextshow:isActive}"
      v-if="word.matches.length>0"
    >{{ word.matches[0]['pinyinPretty'] }} - {{word.matches[0]['english']}}
    </span> -->
    <!-- <b-tooltip :show.sync="isActive" :target="word.text" placement="top">
      {{ word.matches[0]['pinyinPretty'] }} - {{word.matches[0]['english']}}
    </b-tooltip> -->
  </span> 
  <!-- <b-button id="tooltip1" variant="outline-success">Live chat</b-button>

    <b-tooltip :show.sync="isActive" target="tooltip1" placement="top">
      Hello <strong>World!</strong>
    </b-tooltip> -->
  <!-- <v-popover offset="16" :auto-hide="true">
      <span class="tooltip-target b1">{{ word.text }}</span>
      <template slot="popover">
        {{ word.matches[0]['pinyinPretty'] }} - {{word.matches[0]['english']}}
      </template>
    </v-popover>-->
  <!-- </span> -->
</template>

<script>

export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    word: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function() {
        return { text: '' };
      },
    },
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    },
    toggle: function() {
      this.isActive = !this.isActive;
      // this.$nextTick(function(){
      //   this.$refs.tooltip.focus()
      //   });
      console.log(this.isActive)
    },
  },
};
</script>

<style lang="scss" scoped>
// p {
//   color: blue;
// }
body{
  word-break: break-word;
}
span:hover {
  background-color: yellow;
}
.el-popover{
  z-index:214748343;
}
/* .tooltip {
  position: relative;
  display: inline-block;
}
.tooltiptextshow {
  visibility: visible;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip:focus .tooltiptext {
  visibility: visible;
} 
.tooltip:active .tooltiptext {
  visibility: visible;
}  */
// @import 'node_modules/bootstrap/scss/bootstrap';
// @import 'node_modules/bootstrap-vue/src/index.scss';

/* theme color */
// $--color-primary: teal;

/* icon font path, required */
// $--font-path: '~element-ui/lib/theme-chalk/fonts';
// @import 'element-theme-default';
// @import "~element-ui/packages/theme-chalk/src/index";
// @import 'element-ui/lib/theme-chalk/reset.css';
// @import '~element-ui/lib/theme-chalk/index.css';
</style>