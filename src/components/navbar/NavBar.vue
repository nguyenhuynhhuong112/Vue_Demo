<template>
  <div class="border-b-2 shadow-md p-2">
    <a-menu class="flex justify-between items-center">
      <div class="w-4/5 justify-evenly flex items-center">
        <router-link to="/home" class="font-bold">Home</router-link>
      </div>
      <div class="w-1/6 flex justify-end">
        <a-dropdown class="flex">
          <a class="ant-dropdown-link w-1/2" @click.prevent>
            <img
              src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/1/1211484/Large_1_Chu_Duc_Nhie.jpeg"
              class="rounded-full w-14 h-14"
            />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <router-link to="/login">Logout</router-link>
              </a-menu-item>
              <a-menu-item key="1">
                <router-link :to="'/profile/' + username">Trang cá nhân</router-link>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-menu>
    <router-view />
  </div>
</template>
<script>
import { Menu, MenuItem, Dropdown, Input } from "ant-design-vue";

export default {
  name: "NavBar",
  components: {
    "a-menu": Menu,
    "a-menu-item": MenuItem,
    "a-dropdown": Dropdown,
    "a-input": Input,
  },
  mounted() {
    this.username = localStorage.getItem("username");
  },
};
</script>