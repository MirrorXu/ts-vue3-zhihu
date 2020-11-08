<template>
  <div class="container">
    <h1>home view</h1>
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import logoImg from "@/assets/logo.png";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue"; // @ is an alias to /src
const testData: ColumnProps[] = new Array(10).fill({
  id: 1,
  title: "test1的专栏",
  description: "test1的专栏-description",
  // avatar: logoImg,
  avatar: require("@/assets/logo.png"),
});
export default defineComponent({
  name: "Home",
  components: {
    ColumnList,
  },
  setup() {
    return {
      list: testData,
    };
  },
});
</script>
