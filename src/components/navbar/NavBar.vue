<template>
  <div class="border-b-2 shadow-md p-2">
    <a-menu class="flex justify-between items-center">
      <div class="w-4/5 justify-evenly flex items-center">
        <router-link to="/home" class="font-bold">Home</router-link>
        <a-button @click="showModal">Upload</a-button>
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
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </a-menu>
    <router-view />
    <a-modal v-model:open="open" title="Upload" @ok="handleOk">
      <a-input
        v-model:value="newPost.content"
        placeholder="Caption"
        class="mt-2"
      />
    </a-modal>
  </div>
</template>
<script>
import { Menu, MenuItem, Dropdown, Button, Modal, Input } from "ant-design-vue";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "NavBar",
  components: {
    "a-menu": Menu,
    "a-menu-item": MenuItem,
    "a-dropdown": Dropdown,
    "a-button": Button,
    "a-modal": Modal,
    "a-input": Input,
  },
  data() {
    return {
      open: ref(false),
      newPost: {
        id: "1512",
        username: "Chu Duc Nhien",
        content: "",
        image:
          "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/1/1211484/Large_1_Chu_Duc_Nhie.jpeg",
        like: 0,
      },
    };
  },
  methods: {
    showModal() {
      this.open = true;
    },
    async handleOk() {
      try {
        const response = await axios.post(
          "https://65dd7c93e7edadead7ee0a54.mockapi.io/user",
          this.newPost
        );
        this.open = false;
      } catch (error) {}
    },
  },
};
</script>