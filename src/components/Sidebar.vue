<template>
  <div class="sidebar">
    <router-link to="/" class="logo">
      <img src="@/assets/images/logocloud.svg" alt="Jatheon Logo" />
    </router-link>
    <ul>
      <li>
        <router-link to="/audit"
          ><img src="@/assets/icons/icondashboard.svg" alt="" />
          <span>Audit</span></router-link
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  background-color: #e1e7e9;

  height: 100%;

  .logo {
    display: block;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 45px;
  }

  ul {
    padding-top: 47px;
    padding-left: 23px;
  }
  li {
    a {
      color: #00a88d;
      font-size: 14px;
      line-height: 18px;
      width: 180px;
      text-align: left;
      text-decoration: none;
      display: flex;
    }

    span {
      margin-left: 12px;
    }
  }
}
</style>
