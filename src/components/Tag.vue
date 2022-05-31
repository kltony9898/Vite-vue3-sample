<template>
  <div class="tag">
    <span :class="beChoose ? `redone` : `blackone`"> {{`${num + 1}、${name}`}}</span>
    <span class="x" @click="emit('onClose')">x</span>
  </div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
const props = defineProps<{
  name?: String
  num?: String
  beChoose: Boolean
}>()

const emit = defineEmits<{
  ["onClose"]
}>()
</script>
<style>
  .tag {
    background-color: #001CFF; 
    color: #fff;
    border-radius: 50px;
    position: relative;
    padding: 6px 20px;
  }
  .redone {
    color: red;
  }
  .x {
    font-size: 28px;
    position: absolute;
    top: -6px;
    right: 20px;
  }
</style>