<template>
  <input type="text" v-model="content" />
</template>

<script lang="ts" setup>
  // import { storeToRefs } from 'pinia'
  // import { userStep } from '../store/step'
  import { reactive , ref } from 'vue'
  //--------------------------------------
  interface Person {
    name: string;
    male: string;
    age?: number;
    height?: number;
  }
  const content = ref<Person>();

  const Ashe: Person = {
    name: "Ashe",
    male: "male",
    age: 231
  };
  // 解构
</script>