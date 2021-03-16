<template>
  <div class="audit-page">
    <Actionbar />
  </div>
</template>
<script>
import Actionbar from "../components/Actionbar.vue";
export default {
  name: "Audit",
  components: { Actionbar },
};
</script>
<style lang="scss" scoped>
.audit-page {
  background-color: #f4f4f4;
  width: 100%;
  height: 100vh;
}
</style>
