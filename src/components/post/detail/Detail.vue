<template>
  <a-card class="card-detail w-1/2 mt-2">
    <div class="flex flex-row items-center">
      <a-avatar>
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <div class="ml-2">
        <p class="font-bold">{{ username }}</p>
      </div>
    </div>
    <p>{{ content }}</p>
    <img alt="example" class="w-52 h-52" :src="image" />
    <a-input v-model:value="value" placeholder="Basic usage"  class="mt-2" v-if="comment"/>
    <template #actions>
      <like-outlined key="like" @click="toggleLike" :style="{color: liked ? '#1890ff' : 'inherit' }"/>
      <span>{{ likes }}</span>
      <comment-outlined key="comment" @click="checkComment" />
      <ellipsis-outlined key="ellipsis" />
    </template>
  </a-card>
</template>

<script>
import { Avatar, Card, Input } from "ant-design-vue";
import {
  UserOutlined,
  LikeOutlined,
  CommentOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "PostDetail",
  components: {
    "a-avatar": Avatar,
    "a-card": Card,
    UserOutlined,
    "like-outlined": LikeOutlined,
    "comment-outlined": CommentOutlined,
    "ellipsis-outlined": EllipsisOutlined,
    "a-input": Input,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      likes: 0,
      liked: false,
      comment:false
    };
  },
  created() {
    this.likes = this.like;
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
      if (this.liked) {
        this.likes += 1;
      } else {
        this.likes -= 1;
      }
    },
    checkComment(){
      this.comment = !this.comment
    }
  },
};
</script>

<style scoped>
.card-detail {
  box-shadow: none !important;
}
</style>
