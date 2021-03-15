<template>
  <div>
    <div class="container">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: { Sidebar },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
.container {
  display: flex;
  width: 100%;
}
</style>
