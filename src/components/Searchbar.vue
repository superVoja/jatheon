<template>
  <div>
    <img src="../assets/icons/icn-search.svg" alt="" />
    <input
      type="text"
      v-model="input"
      placeholder="Search for a word or phrase"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    clearInput() {
      this.input = "";
    },
  },
};
</script>
