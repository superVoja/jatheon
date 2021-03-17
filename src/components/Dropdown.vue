<template>
  <div class="menu">
    <ul>
      <li>administrator</li>
      <li>john.doe@jatheon.com</li>
      <li>Jatheon Technologies</li>
    </ul>
    <div class="menu-item" v-for="(item, i) in items" :key="i">
      <a :href="item.link">{{ item.title }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dropdown",
  props: ["items"],
};
</script>
<style lang="scss" scoped>
.menu {
  z-index: 10;
  width: 230px;
  padding: 10px 12px;
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);

  ul {
    border-bottom: 1px solid #cfcfcf;
  }

  li {
    color: #3e4543;
    font-size: 14px;
    text-align: left;
    padding-bottom: 5px;

    &:first-child {
      color: #9b9b9b;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.3px;
      line-height: 18px;
      text-transform: uppercase;
    }
    &:nth-child(2) {
      line-height: 18px;
      font-weight: 700;
    }
    &:last-child {
      padding-bottom: 10px;
      line-height: 18px;
    }
  }

  .menu-item {
    padding-top: 5px;

    a {
      text-decoration: none;
      color: #3e4543;
      font-size: 14px;
      line-height: 18px;
      width: 206px;
      text-align: left;
      transition: 0.1s ease-in;

      &:hover {
        color: #00a88d;
      }
    }
  }
}
</style>
