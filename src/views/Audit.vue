<template>
  <div class="audit-page">
    <Header />
    <Actionbar />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Actionbar from "../components/Actionbar.vue";
export default {
  name: "Audit",
  components: { Header, Actionbar },
};
</script>
<style lang="scss" scoped>
.audit-page {
  background-color: #f4f4f4;
  width: 100%;
}
</style>
