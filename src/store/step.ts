import { defineStore } from 'pinia'
export const userStep = defineStore('steps', {
  state: () => {
    return { 
      step: 1,
      chSteps: ["一","二","三","四"]
    }
  },
  getters: { 
    // 取得state內特定結果
    chineseTranslate(state):string {
      return state.chSteps[state.step - 1]
    },
  },
  actions: {
    // 更改state內值
    nextStep() {
      if(this.step > this.chSteps.length - 1) return;
      this.step += 1
    },
    backStep() {
      if(this.step < 2) return;
      this.step -= 1
    },
    addNewStep(stepName: string) {
      this.chSteps.push(stepName);
    },
    removeStep(index: number) {
      this.chSteps.splice(index ,1);
      const stepsLength = this.chSteps.length;
      if(this.step > stepsLength) {
        this.step = stepsLength
      }
    }
  },

})