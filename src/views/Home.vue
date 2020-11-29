<template>
  <div class="container">
    <Header :user="currentUser"></Header>
    <h1>home view</h1>
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
// import logoImg from "@/assets/logo.png";
// @ is an alias to /src
import { defineComponent } from "vue";

import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import Header, { UserProps } from "@/components/Header.vue";
const currentUser: UserProps = {
  isLogin: true,
  name: "MirrorXu",
};
const testData: ColumnProps[] = new Array(10).fill({
  id: 1,
  title: "test1的专栏",
  description: "test1的专栏-description",
  // avatar: logoImg,
  avatar: require("@/assets/logo.png"),
});
export default defineComponent({
  name: "Home",
  components: { Header, ColumnList },
  setup() {
    return {
      list: testData,
      currentUser,
    };
  },
});
</script>
