<template>
  <div class="header">
    <Searchbar class="search" />
    <div class="profile">
      <div class="avatar" :class="{ active: showMenu }">
        <span :class="{ active: showMenu }">JD</span>
      </div>
      <button
        class="menu-btn"
        @click="showMenu = !showMenu"
        :class="{ active: showMenu }"
      >
        <img src="../assets/icons/icn-arrow-down.svg" alt="" />
      </button>
      <Dropdown :items="links" v-if="showMenu" class="dropdown" />
    </div>
  </div>
</template>
<script>
import Dropdown from "./Dropdown.vue";
import Searchbar from "./Searchbar.vue";
export default {
  name: "Header",
  components: { Dropdown, Searchbar },
  data() {
    return {
      showMenu: false,
      links: [
        {
          title: "Account Settings",
          link: "#",
        },
        {
          title: "Company Settings",
          link: "#",
        },
        {
          title: "Help Center",
          link: "#",
        },
        {
          title: "Keyboard Shortcuts",
          link: "#",
        },
        {
          title: "Log Out",
          link: "#",
        },
      ],
    };
  },
  methods: {
    // clearInput() {
    //   console.log("clearinput");
    //   this.input = "";
    // },
  },
};
</script>
<style lang="scss">
$small: 300px;
$medium: 900px;
$large: 1300px;
.search {
  background-color: #f4f4f4;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .icon {
    fill: #9b9b9b;
  }
  img {
    padding: 10px;
  }
  input {
    background-color: inherit;
    border-radius: inherit;
    width: 237px;
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 18px;

    @media screen and (min-width: $medium) {
      width: 500px;
    }

    &::placeholder {
      color: #9b9b9b;
      font-size: 14px;
      line-height: 18px;
      width: 460px;
      text-align: left;
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #cfcfcf;

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
      background-color: #f4f4f4;
      border-radius: 100%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: 0.3s ease-in;

      &.active {
        background-color: rgba($color: #00a88d, $alpha: 0.2);
      }

      span {
        color: #9b9b9b;
        font-size: 12px;
        line-height: 18px;
        width: 32px;
        display: block;
        font-weight: 700;
        transition: 0.2s ease-in;

        &.active {
          color: #00a88d;
        }
      }
    }

    .menu-btn {
      background-color: transparent;
      transition: 0.2s ease-in;
      position: relative;
      &.active {
        transform: rotate(180deg);
      }
    }
    .dropdown {
      position: absolute;
      right: 20px;
      top: 56px;
    }
  }
}
</style>
