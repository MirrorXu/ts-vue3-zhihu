<style lang="less">
.dropdown-option.is-disabled {
  color: red;
  // color: #6c757d;
  pointer-events: none;
  background: #ccc;
}
</style>
<template>
  <li :class="{ 'is-disabled': disable }" class="dropdown-option">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropdownItem",
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
</style>