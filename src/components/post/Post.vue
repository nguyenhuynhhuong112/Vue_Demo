<template>
  <div class="w-full flex items-center flex-col">
    <PostDetail
      v-for="post in posts"
      :key="post.id"
      :username="post.username"
      :content="post.content"
      :image="post.image"
      :like="post.like"
    />
  </div>
</template>
<script>
import PostDetail from "./detail/Detail.vue";
import axios from "axios";
export default {
  name: "Post",
  components: {
    PostDetail,
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://65dd7c93e7edadead7ee0a54.mockapi.io/user"
      );
      this.posts = response.data; 
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>
