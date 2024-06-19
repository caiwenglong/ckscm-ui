<template>
  <div class="p-2">
    <SearchCondition
      v-model="searchFormValue"
      :formProps="searchCondition"
      :formOption="formOption"
      @submit="handleSubmitSearch"
      @reset="handleResetForm"
    ></SearchCondition>
  </div>
</template>

<script setup>
import SearchCondition from "@/components/SearchCondition/SearchCondition";
import { searchConditionFields } from "@/components/SearchCondition/searchConditionFields.js";
import { pick, values } from "lodash";
import { messageCenter } from "@/constants/sys/frontendFields";
// 搜索字段
const searchCondition = computed(() => {
  return values(
    pick(searchConditionFields, [
      messageCenter["templateCode"],
      messageCenter["sendChannel"],
    ])
  );
});

// 搜索条件项对象
const searchFormValue = ref({});

// 自定义配置
const formOption = ref({
  span: 6,
});

// 搜索
function handleSubmitSearch() {
  console.log(searchFormValue.value);
}

// 重置
function handleResetForm() {
  console.log("重置");
  console.log(searchFormValue.value);
}
</script>

<style lang="scss" scoped></style>
