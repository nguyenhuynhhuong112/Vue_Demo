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
<script lang="ts">
import PostDetail from "./detail/Detail.vue";
import { PropType } from "vue";
import { IPost } from "../../common/types";
export default {
  name: "Post",
  components: {
    PostDetail,
  },
  props:{
     posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  }
};
</script>
