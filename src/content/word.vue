<template>
  <span>
  <span class="tooltip" v-on:click="toggle"> 
    {{ word.text }}</span>
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
// import Vue from 'vue';

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

<style scoped>
p {
  color: blue;
}
span:hover {
  background-color: yellow;
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

</style>