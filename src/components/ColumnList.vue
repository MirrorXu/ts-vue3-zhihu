<template>
  <div class="row">
    <div
      v-for="column in columnList"
      :key="column.id"
      class="col-6 col-md-4 col-lg-3 mb-4"
    >
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-right w-25 h-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((column) => {
        // if (!column.avatar) {
        column.avatar = require("@/assets/nothing.png");
        // }
        return column;
      });
    });
    return {
      columnList,
    };
  },
});
</script>

<style>
</style>