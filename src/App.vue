<template>
  <div>
    <div class="container">
      <Header class="header" />
      <Sidebar class="sidebar" />
      <router-view class="main"></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Sidebar, Header },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
* {
  box-sizing: border-box;
}
button {
  outline: 0;
  border: 0;
  cursor: pointer;
}
input {
  outline: 0;
  border: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
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
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-areas:
    "sidebar header header"
    "sidebar main main"
    "sidebar main main";
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
</style>
