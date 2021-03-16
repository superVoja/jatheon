<template>
  <div class="audit-page">
    <Actionbar />
    <div class="no-content">
      <img
        src="../assets/images/img-audit-noresults.png"
        alt="No content place holder"
      />
      <h1>Nothing to Show</h1>
      <span>
        To see audit logs, choose the filters and/or perform a search from the
        above menu.
      </span>
    </div>
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

  .no-content {
    width: 100%;
    height: calc(100% - 168px);
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3e4543;

    h1 {
      font-size: 16px;
      line-height: 24px;
      width: 300px;
    }
    span {
      font-size: 14px;
      line-height: 20px;
      width: 300px;
    }
  }
}
</style>
