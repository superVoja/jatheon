<template>
  <div class="action-bar">
    <!-- USER DROPDOWN MENU -->
    <div class="user-dropdown">
      <div
        class="dropdown-btn"
        @click="showUserDropdown = !showUserDropdown"
        :class="{ active: showUserDropdown }"
      >
        <p v-if="!userIds.length">No user selected</p>
        <p v-else>{{ userIds[0] }}</p>

        <div class="btn-arrow" :class="{ active: showUserDropdown }">
          <img src="../assets/icons/icn-arrow-down.svg" alt="" />
        </div>
      </div>
      <div class="dropdown" v-if="showUserDropdown">
        <ul>
          <input
            type="text"
            placeholder="Search for a user..."
            v-model="search"
            v-if="showUserDropdown"
            v-on:input="showSelectAll = !showSelectAll"
          />
          <li v-if="showSelectAll">
            <label class="checkbox-wrapp"
              >Select all
              <input
                type="checkbox"
                @click="selectAll"
                v-model="allSelected"
                v-if="showUserDropdown"
              />
              <span class="checkmark"></span>
            </label>
          </li>
          <li v-for="(user, i) in filteredList" :key="i">
            <label class="checkbox-wrapp"
              >{{ user.text }}

              <input
                type="checkbox"
                :value="user.text"
                v-model="userIds"
                @focus="selected == true"
              />
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <!-- ACTION DROPDOWN MENU -->
    <div class="action-dropdown">
      <div
        class="dropdown-btn"
        @click="showActionDropdown = !showActionDropdown"
        :class="{ active: showActionDropdown }"
      >
        <p v-if="!actionIds.length">All actions</p>
        <p v-else>{{ actionIds.length }} selected</p>

        <div class="btn-arrow" :class="{ active: showActionDropdown }">
          <img src="../assets/icons/icn-arrow-down.svg" alt="" />
        </div>
      </div>
      <div class="dropdown" v-if="showActionDropdown">
        <ul>
          <li v-if="showSelectAll">
            <label class="checkbox-wrapp"
              >Select all
              <input
                type="checkbox"
                @click="selectAllActions"
                v-model="allActionsSelected"
                v-if="showActionDropdown"
              />
              <span class="checkmark"></span>
            </label>
          </li>
          <li v-for="(action, i) in actions" :key="i">
            <label class="checkbox-wrapp"
              >{{ action.text }}

              <input
                type="checkbox"
                :value="action.text"
                v-model="actionIds"
                @focus="selected == true"
              />
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <!-- SEARCH -->
    <div>
      <input
        type="text"
        class="dropdown-btn search-input"
        placeholder="Filter results..."
      />
    </div>
    <div>
      <button class="search-btn" :class="{ active: userIds.length > 0 }">
        Search Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Actionbar",

  data() {
    return {
      showUserDropdown: false,
      showActionDropdown: false,
      search: "",
      selected: false,
      showSelectAll: true,
      allSelected: false,
      allActionsSelected: false,
      userIds: [],
      actionIds: [],
      users: [
        { text: "abraham.lincoln@company.com" },
        { text: "bonaparta.nap@company.com" },
        { text: "clark.kent@company.com" },
        { text: "dereck.trotter@company.com" },
        { text: "garry.oldman@company.com" },
        { text: "henk.azaria@company.com" },
        { text: "john@company.com" },
        { text: "lincoln@company.com" },
        { text: "ozzy.osborn@company.com" },
      ],
      actions: [
        { text: "Create Client" },
        { text: "Create User" },
        { text: "Edit Client" },
        { text: "Edit User" },
        { text: "Change Profile Info" },
        { text: "Delete User" },
        { text: "Delete Client" },
        { text: "Deactivate User" },
        { text: "Activate User" },
        { text: "Activate Client" },
        { text: "Log In" },
      ],
    };
  },
  methods: {
    selectAll() {
      this.userIds = [];
      if (!this.allSelected) {
        for (this.user in this.filteredList) {
          this.userIds.push(this.users[this.user].text.toString());
        }
      }
    },
    selectAllActions() {
      this.actionIds = [];
      if (!this.allActionsSelected) {
        for (this.action in this.actions) {
          this.actionIds.push(this.actions[this.action].text.toString());
        }
      }
    },
  },
  computed: {
    filteredList() {
      return this.users.filter((user) => {
        return user.text.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* Scrollbar Style */
::-webkit-scrollbar {
  width: 6px;
  margin-top: 60px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f4f4f4;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #cfcfcf;
  border-radius: 5px;
  width: 6px;
  height: 70px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00a88d;
}
.checkbox-wrapp {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover input ~ .checkmark {
    background-color: #ffffff;
    border: 1px solid #00a88d;
    border-radius: 4px;
    width: 17px;
    height: 17px;
  }

  input {
    box-sizing: border-box;
    position: absolute;
    opacity: 0;

    cursor: pointer;
  }

  input:checked ~ .checkmark {
    background-color: #00a88d;
    outline: 0;
    border: 0;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;

    background-color: #ffffff;
    border: 1px solid #9b9b9b;
    border-radius: 4px;
    width: 17px;
    height: 17px;

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 4px;
      top: 0;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
.action-bar {
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #cfcfcf;
  padding: 16px 0px 16px 20px;
}
.dropdown-btn {
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #9b9b9b;
  border-radius: 4px;
  width: 275px;
  height: 38px;
  display: flex;
  align-items: center;
  position: relative;
  .btn-arrow {
    border: 0;
    outline: 0;
    background-color: transparent;
    transition: 0.3s ease-in;
    position: relative;
    &.active {
      transform: rotate(180deg);
    }
  }

  &.active {
    border-color: #00a88d;
  }

  p {
    padding: 10px 12px;
    color: #3e4543;
    font-size: 14px;
    line-height: 18px;
    width: 215px;
    text-align: left;
  }
}
.dropdown {
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
  width: 249px;
  height: 331px;
  margin-top: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 12px 13px;
  position: absolute;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #3e4543;
      display: flex;
      align-items: center;
      justify-content: left;
      font-size: 14px;
      line-height: 18px;
      padding-top: 10px;

      &:first-child {
        margin-top: 10px;
      }
      label {
        color: #3e4543;

        font-size: 14px;
        line-height: 18px;
        width: 100%;
        text-align: left;

        &:hover {
          color: #00a88d;
        }
      }
    }
  }
}
/* Input Style */
input[type="text"] {
  background-color: #f4f4f4;
  border-radius: 4px;
  border: 0;
  outline: 0;
  width: 243px;
  height: 38px;

  &::placeholder {
    padding-top: 10px;
    padding-bottom: 10px;

    color: #9b9b9b;

    font-size: 14px;
    line-height: 18px;
    width: 173px;
    text-align: left;
  }
  &.search-input {
    background-color: #ffffff;
    border: 1px solid #9b9b9b;
    border-radius: 4px;
    width: 250px;
    height: 38px;
    &:hover {
      border-color: #00a88d;
    }
  }
}
/* Search Button Style */
.search-btn {
  background-color: #cfcfcf;
  border-radius: 4px;
  width: 113px;
  height: 38px;

  color: #9b9b9b;

  font-size: 14px;
  line-height: 20px;
  text-align: center;

  border: 0;
  outline: 0;

  &.active {
    background-color: #00a88d;
    color: #ffffff;
  }
}
</style>
