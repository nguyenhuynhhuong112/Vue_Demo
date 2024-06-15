<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const username = localStorage.getItem('username');
    if (!username) {
      this.$router.push('/login');
    } else {
      this.$router.push('/home');
    }
  }
};
</script>
