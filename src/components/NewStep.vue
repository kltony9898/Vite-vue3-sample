<template>
  <p>目前的項目有{{chSteps}}</p>
  <input type="text" v-model="pageData.itemName" />
  <button type="button" @click="addItem()"> 新增選項 </button>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { userStep } from '../store/step'
  import { reactive , ref } from 'vue'
  //--------------------------------------
  const { chSteps } = storeToRefs(userStep());
  const actionStep = userStep();
  const pageData = reactive({
    itemName: ""
  });

  function addItem() {
    if(pageData.itemName === "") return;
    actionStep.addNewStep(pageData.itemName);
    pageData.itemName = "";
  }
 
  // 解构
</script>