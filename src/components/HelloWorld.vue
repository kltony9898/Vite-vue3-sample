<template>
  <p>本地的step</p>
  <div>{{ pageData.step }}</div>
  <button @click="addLocaleClick()" type="button"> + </button>
  <button @click="minLocaleClick()" type="button"> - </button>
  <p>==========================================================</p>
  <p>pinia的step</p>
  <p>直接在component內修改store（不建議）</p>
  <div>{{ step }}</div>
  <button @click="addPiniaClick()" type="button"> + </button>
  <button @click="minPiniaClick()" type="button"> - </button>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import { storeToRefs } from 'pinia'
  import { userStep } from '../store/step'

  const { step , text } = storeToRefs(userStep())

  const pageData = reactive({
    step: 0
  });

  //--------------------------------------
  const addLocaleClick =()=> {
    pageData.step += 1;
  }
  const minLocaleClick =()=> {
    pageData.step -= 1;
  }
  function addPiniaClick() {
    this.step += 1;
  }

  function minPiniaClick() {
    this.step -= 1;
  }
</script>