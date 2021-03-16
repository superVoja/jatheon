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
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
}

.header {
  grid-area: header;
}
.sidebar {
  grid-row: sidebar;
}
.main {
  grid-column: main;
}
</style>
