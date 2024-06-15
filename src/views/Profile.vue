<template>
  <div>
    <NavBar />
    <div>
      <h1>Profile</h1>
      <p>Username: {{ username }}</p>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/navbar/NavBar.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.username = this.$route.params.username;
  },
};
</script>