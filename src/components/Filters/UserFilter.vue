<template> </template>
<script>
export default {
  props: ["users", "user"],
  data() {
    return {
      showDropdown: false,
      selected: [],
      allSelected: false,
      userIds: [],
    };
  },
  methods: {
    selectAll() {
      this.userIds = [];

      if (this.allSelected) {
        for (this.user in this.users) {
          this.userIds.push(this.users[this.user].id.toString());
        }
      }
    },
  },
};
</script>
