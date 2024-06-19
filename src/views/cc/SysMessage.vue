<template>
  <div>
    <ElTabs :tabs-array="tabsArray"></ElTabs>
  </div>
</template>

<script setup>
import ElTabs from "../../components/elementPlus/ElTabs/ElTabs.vue";

const tabsArray = ref([
  {
    label: "全部业务类型",
    component: null,
  },
]);
</script>

<style lang="scss" scoped></style>
