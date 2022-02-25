<template>
  <div :id="id" :style="styles" :class="className">
    <div class="counter-row">
      <button class="counter-button" @click="minus">-</button>
        <span class="counter-num">{{count}}</span>
      <button class="counter-button" @click="add">+</button>
    </div>
    <div>
      <slot name="innerSlot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['init', 'styles', 'className', 'id'],
  methods: {
    add() {
        this.count++;
        this.$emit('add', this.count);
    },
    minus() {
        this.count--;
        this.$emit('minus', this.count);
    }
  },
  data() {
    return {
      count: this.init ?? 0,
    };
  },
  watch: {
    init: function(val) {
      this.count = val;
    }
  }
}
</script>

<style>
.counter-row {
    display: flex;
    align-items: center;
}
.counter-num {
    padding: 0 8px;
}
.counter-button {
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
    font-size: 14px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: rgb(239, 239, 239);

}
</style>
