<template>
    <n-grid x-gap="20" :cols="2">
      <n-gi class="box">
        <p>本地的step data</p>
        <div>{{ pageData.step }}</div>
        <n-space>
          <n-button type="primary" @click="addLocaleClick()"> + </n-button>
          <n-button type="error" @click="minLocaleClick()"> - </n-button>
        </n-space>
      </n-gi>
      <n-gi class="box">
        <p>pinia的step</p> 
        <p>直接在component內修改store（不建議）</p>
        <div>{{ step }}</div>
        <n-space>
          <n-button 
            :disabled="maxStep"
            type="primary"
            @click="addPiniaClick()"
          > + 
          </n-button>
          <n-button 
            :disabled="minStep"
            type="error"
            @click="minPiniaClick()"
          > - 
          </n-button>
        </n-space>
      </n-gi>
    </n-grid>
  
</template>
<script lang="ts" setup>
  import { reactive , computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { userStep } from '../store/step'
  // import { NButton, NSpace, NGrid } from 'naive-ui'

  const { step, chSteps } = storeToRefs(userStep())

  const pageData = reactive({
    step: 0
  });

  // const b = chSteps
  const maxStep = computed(() => {
    return step.value >= chSteps.value.length
  })
  const minStep = computed(() => {
    return step.value < 2 && step.value <= chSteps.value.length
  })
  //--------------------------------------
  const addLocaleClick =()=> {
    pageData.step += 1;
  }
  const minLocaleClick =()=> {
    pageData.step -= 1;
  }
  function addPiniaClick() {
    step.value += 1;
  }

  function minPiniaClick(this: any) {
    step.value -= 1;
  }
</script>
<style scoped>
.box {
  margin: auto;
}
</style>