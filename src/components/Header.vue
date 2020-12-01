<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a href="#" class="navbar-brand">知乎专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="'你好 ' + user.name + '  '">
          <DropdownItem
            v-for="item in dropdownItems"
            :key="item.name"
            :disable="item.disable"
          >
            <a href="#" class="dropdown-item">
              {{ item.name }}
            </a>
          </DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./dropDown.vue";
import DropdownItem from "./dropdownItem.vue";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
    },
  },
  data() {
    return {
      dropdownItems: [
        {
          name: "新建文章",
        },
        {
          name: "编辑资料",
          disable: true,
        },
        {
          name: "退出登录",
        },
      ],
    };
  },
});
</script>

<style>
</style>