<template>
  <div class="action-bar">
    <!-- USER DROPDOWN MENU -->
    <div class="user-dropdown">
      <button
        class="dropdown-btn"
        @click="showUserDropdown = !showUserDropdown"
        :class="{ active: showUserDropdown, selected: !userIds.length < 1 }"
      >
        <p v-if="!userIds.length">No user selected</p>
        <p v-else>{{ userIds[0] }}</p>

        <div class="btn-arrow" :class="{ active: showUserDropdown }">
          <img src="../assets/icons/icn-arrow-down.svg" alt="" />
        </div>
      </button>
      <div class="dropdown" v-if="showUserDropdown">
        <ul>
          <div class="search-user">
            <img src="../assets/icons/icn-search.svg" alt="" />
            <input
              type="text"
              placeholder="Search for a user..."
              v-model="search"
              v-if="showUserDropdown"
              v-on:input="showSelectAll = !showSelectAll"
            />
            <button v-show="search" @click="clearInput">
              <svg
                width="10px"
                height="10px"
                class="icon"
                viewBox="0 0 10 10"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>2F2A954F-914B-485B-86A0-E11BD1A04710</title>
                <defs>
                  <path
                    d="M11.8954545,10 L14.7383523,7.15710227 C15.0872159,6.80823864 15.0872159,6.24261364 14.7383523,5.89346591 L14.1065341,5.26164773 C13.7576705,4.91278409 13.1920455,4.91278409 12.8428977,5.26164773 L10,8.10454545 L7.15710227,5.26164773 C6.80823864,4.91278409 6.24261364,4.91278409 5.89346591,5.26164773 L5.26164773,5.89346591 C4.91278409,6.24232955 4.91278409,6.80795455 5.26164773,7.15710227 L8.10454545,10 L5.26164773,12.8428977 C4.91278409,13.1917614 4.91278409,13.7573864 5.26164773,14.1065341 L5.89346591,14.7383523 C6.24232955,15.0872159 6.80823864,15.0872159 7.15710227,14.7383523 L10,11.8954545 L12.8428977,14.7383523 C13.1917614,15.0872159 13.7576705,15.0872159 14.1065341,14.7383523 L14.7383523,14.1065341 C15.0872159,13.7576705 15.0872159,13.1920455 14.7383523,12.8428977 L11.8954545,10 Z"
                    id="path-1"
                  ></path>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="123-FE-TASK-Audit-list"
                    transform="translate(-505.000000, -152.000000)"
                  >
                    <g
                      id="drop/checkbox-search"
                      transform="translate(270.000000, 125.000000)"
                    >
                      <g id="drop-w-search">
                        <g
                          id="search/inactive"
                          transform="translate(12.000000, 13.000000)"
                        >
                          <g
                            id="icon/close"
                            transform="translate(218.000000, 9.000000)"
                          >
                            <mask id="mask-2" fill="white">
                              <use xlink:href="#path-1"></use>
                            </mask>
                            <use
                              id="icn-close"
                              fill-rule="evenodd"
                              xlink:href="#path-1"
                            ></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>

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
    <div class="action-dropdown ">
      <button
        class="dropdown-btn"
        @click="showActionDropdown = !showActionDropdown"
        :class="{
          active: showActionDropdown,
          selected: !userIds.length < 1,
          disabled: !userIds.length < 1,
        }"
        :disabled="userIds.length < 1"
      >
        <p v-if="!actionIds.length">No actions selected</p>

        <p v-else-if="actionIds.length > 0">{{ actionIds.length }} selected</p>

        <div class="btn-arrow" :class="{ active: showActionDropdown }">
          <img src="../assets/icons/icn-arrow-down.svg" alt="" />
        </div>
      </button>
      <div class="dropdown" v-if="showActionDropdown">
        <ul>
          <li>
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
    <div class="search-results" :class="{ active: !userIds.length < 1 }">
      <input
        type="text"
        placeholder="Filter results..."
        v-model="searchResults"
        :disabled="userIds.length < 1"
      />
      <button v-show="searchResults" @click="clearSearchInput">
        <svg
          width="10px"
          height="10px"
          class="icon"
          viewBox="0 0 10 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>2F2A954F-914B-485B-86A0-E11BD1A04710</title>
          <defs>
            <path
              d="M11.8954545,10 L14.7383523,7.15710227 C15.0872159,6.80823864 15.0872159,6.24261364 14.7383523,5.89346591 L14.1065341,5.26164773 C13.7576705,4.91278409 13.1920455,4.91278409 12.8428977,5.26164773 L10,8.10454545 L7.15710227,5.26164773 C6.80823864,4.91278409 6.24261364,4.91278409 5.89346591,5.26164773 L5.26164773,5.89346591 C4.91278409,6.24232955 4.91278409,6.80795455 5.26164773,7.15710227 L8.10454545,10 L5.26164773,12.8428977 C4.91278409,13.1917614 4.91278409,13.7573864 5.26164773,14.1065341 L5.89346591,14.7383523 C6.24232955,15.0872159 6.80823864,15.0872159 7.15710227,14.7383523 L10,11.8954545 L12.8428977,14.7383523 C13.1917614,15.0872159 13.7576705,15.0872159 14.1065341,14.7383523 L14.7383523,14.1065341 C15.0872159,13.7576705 15.0872159,13.1920455 14.7383523,12.8428977 L11.8954545,10 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
            <g
              id="123-FE-TASK-Audit-list"
              transform="translate(-505.000000, -152.000000)"
            >
              <g
                id="drop/checkbox-search"
                transform="translate(270.000000, 125.000000)"
              >
                <g id="drop-w-search">
                  <g
                    id="search/inactive"
                    transform="translate(12.000000, 13.000000)"
                  >
                    <g
                      id="icon/close"
                      transform="translate(218.000000, 9.000000)"
                    >
                      <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                      </mask>
                      <use
                        id="icn-close"
                        fill-rule="evenodd"
                        xlink:href="#path-1"
                      ></use>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
    <div>
      <button
        class="search-btn"
        :disabled="userIds.length < 1"
        :class="{ active: userIds.length > 0 }"
      >
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
      searchResults: "",
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
    clearInput() {
      this.search = "";
    },
    clearSearchInput() {
      this.searchResults = "";
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
$small: 300px;
$medium: 900px;
$large: 1300px;

/* Scrollbar Style */
::-webkit-scrollbar {
  width: 6px;
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
/* SVG Style */
.icon {
  fill: #9b9b9b;
  &:hover {
    fill: #00a88d;
  }
}

/* Checkbox Style */
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
/* Actionbar Style */
.action-bar {
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid #cfcfcf;
  padding: 16px 0px 16px 20px;
  @media screen and (min-width: $medium) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: $large) {
    grid-template-columns: repeat(6, 1fr);
  }
}
.dropdown-btn {
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  color: #9b9b9b;
  border-radius: 4px;
  min-width: 267px;
  height: 38px;
  padding-right: 14px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .disabled {
    background-color: #f4f4f4;
  }

  &.selected {
    background-color: #ffffff;
    //border: 1px solid #00a88d;
    color: #3e4543;
  }
  .btn-arrow {
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
    font-size: 14px;
    line-height: 18px;
    width: 215px;
    text-align: left;
  }
}
.dropdown {
  z-index: 10;
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
  width: 267px;
  height: 331px;
  margin-top: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 13px;
  position: absolute;

  ul {
    .search-user {
      background-color: #f4f4f4;
      border-radius: 4px;
      height: 38px;
      display: flex;
      align-items: center;
      padding-left: 10px;

      input {
        margin-left: 7px;
        color: #3e4543;
        font-size: 14px;
        line-height: 18px;
      }
    }

    li {
      color: #3e4543;
      display: flex;
      align-items: center;
      justify-content: left;
      font-size: 14px;
      line-height: 18px;
      padding-top: 10px;

      &:nth-child(2) {
        margin-top: 5px;
      }

      label {
        color: #3e4543;
        font-size: 14px;
        line-height: 18px;
        width: 100%;
        margin: 0;
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

  &::placeholder {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
  &.search-input {
    background-color: #ffffff;
    border: 1px solid #9b9b9b;
    border-radius: 4px;
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
  padding: 9px 15px;
  color: #9b9b9b;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  &.active {
    background-color: #00a88d;
    color: #ffffff;
  }
  &:hover:enabled {
    background-color: #67c8c7;
  }
}

.search-results {
  background-color: #f4f4f4;
  border-radius: 4px;
  border: 1px solid #9b9b9b;
  width: 267px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;

  &.active {
    background-color: #ffffff;
    border: 1px solid #9b9b9b;
    &:hover {
      border-color: #00a88d;
    }
  }
  button {
    padding-right: 15px;
    background-color: inherit;
  }

  input {
    color: #3e4543;
    font-size: 14px;
    line-height: 20px;
    background-color: inherit;
    margin-left: 7px;
    cursor: pointer;
  }
}
</style>
