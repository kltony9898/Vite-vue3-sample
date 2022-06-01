<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import AnotherCp from './components/AnotherCp.vue'
import NewStep from './components/NewStep.vue'
import Tag from './components/Tag.vue'
import RefVsReactive from './components/RefVsReactive.vue'
import { userStep } from './store/step'

const stepsName = userStep().chSteps; 
const actionStep = userStep();
const CloseTag = (index:number) => {
  actionStep.removeStep(index);    
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld />
  <AnotherCp />
  <NewStep />
  <div class="tag-group">
    <Tag 
      v-for="(name,index) in stepsName"
      @onClose="CloseTag(index)"
      :name="name"
      :num="index"
      :key="index"
      :beChoose="userStep().step - 1 === index"
    />
  </div>
  <RefVsReactive />
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tag-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 200px;
}
</style>
