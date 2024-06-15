<template>
  <div class="min-h-screen">
    <NavBar />
    <div class="w-full flex mt-2 post-detail justify-center">
      <Post />
    </div>
  </div>
</template>
<script>
import NavBar from "../components/navbar/NavBar.vue";
import Post from "../components/post/Post.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Post,
  },
};
</script>
<style>
.post-detail {
  min-height: 70vh;
}
</style>