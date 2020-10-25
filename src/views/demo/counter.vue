<template>
  <div>
    <h2>count:{{count}}</h2>
    <h2>double:{{double}}</h2>
    <button @click="increase">👍 &nbsp; +1</button>
  </div>
</template>

<script lang="ts">
// import { ref, computed } from "vue";
import {computed, reactive , toRefs} from 'vue';
interface DataProps{
    count: number;
    double: number;
    increase: () => void;
}
export default {
  name: "counter",
  //   setup() {
  //     const count = ref(0);
  //     const double = computed(() => {
  //       return count.value * 2;
  //     });
  //     const increase = () => {
  //       count.value++;
  //     };
  //     return {
  //       count,
  //       increase,
  //       double,
  //     };
  //   },
  setup() {
    const data: DataProps = reactive({
        count:0,
        increase:()=> {
            data.count++
        },
        double:computed(()=>data.count*2)
    })
    const refData = toRefs(data)
    return {
        ...refData
    };
  },
};
</script>

<style>
</style>