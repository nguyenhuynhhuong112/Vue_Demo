<template>
  <div class="min-h-screen">
    <NavBar />
    <div>
      <a-button
        type="primary"
        class="fixed bottom-10 right-10"
        @click="open = true"
      >
        Upload
      </a-button>
    </div>
    <div class="w-full flex mt-2 post-detail justify-center">
      <Post :posts="posts"/>
    </div>
  </div>
  <a-modal v-model:open="open" title="Upload" @ok="handleOk">
    <a-input
      v-model:value="newPost.content"
      placeholder="Caption"
      class="mt-2"
    />
  </a-modal>
</template>
<script>
import NavBar from "../components/navbar/NavBar.vue";
import Post from "../components/post/Post.vue";
import { Button, Modal } from "ant-design-vue";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    NavBar,
    Post,
    "a-button": Button,
    "a-modal": Modal,
  },
  data() {
    return {
      open: ref(false),
      posts: [],
      username: "",
      newPost: {
        id: "123654",
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
        this.fetchData()
      } catch (error) {}
    },
    fetchData: async function () {
      try {
        const response = await axios.get(
          "https://65dd7c93e7edadead7ee0a54.mockapi.io/user"
        );
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
<style>
.post-detail {
  min-height: 70vh;
}
</style>