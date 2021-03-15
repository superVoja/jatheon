<template>
  <div class="action-bar">
    <div>
      <div class="dropdown-btn" @click="showDropdown = !showDropdown">
        <span>Select</span>
      </div>
      <div class="dropdown" v-if="showDropdown">
        <ul>
          <input type="text" placeholder="search" v-model="search" />
          <input type="checkbox" @click="selectAll" v-model="allSelected" />
          <li v-for="(user, i) in filteredList" :key="i">
            <input
              type="checkbox"
              :value="user.value"
              id=""
              v-model="userIds"
            />
            <label :for="i">{{ user.text }}</label>
          </li>
        </ul>
      </div>
      {{ userIds }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Actionbar",

  data() {
    return {
      showDropdown: false,
      search: "",
      selected: [],
      allSelected: false,
      userIds: [],
      users: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
  methods: {
    selectAll() {
      this.userIds = [];
      if (!this.allSelected) {
        console.log("all selected");
        for (this.user in this.users) {
          this.userIds.push(this.users[this.user].value.toString());
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
.action-bar {
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #cfcfcf;
}
</style>
