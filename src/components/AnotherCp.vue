<template>
  <p>透過action觸發</p>
  <button @click="addPiniaClick()" type="button"> + </button>
  <button @click="minPiniaClick()" type="button"> - </button>
  <p>透過getter取得轉譯後第{{actionStep.chineseTranslate}}步</p>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { userStep } from '../store/step'

  //--------------------------------------
  const { step , text } = storeToRefs(userStep())
  const actionStep = userStep();
  
  function addPiniaClick() {
    actionStep.nextStep()
  }

  function minPiniaClick() {
    actionStep.backStep()
  }
  // 解构
</script>