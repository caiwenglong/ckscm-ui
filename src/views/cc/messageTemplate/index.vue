<template>
  <ElPlusTable
    :tableColumns="tableColumns"
    getUrl="/cc/message/template/pageList"
  ></ElPlusTable>
</template>

<script setup>
import ElPlusTable from "@/components/avue/table/ElplusTable.vue";
import { getSenderTypes } from "@/api/messageCenter/messageTemplate.js";
/////////////////////////// 表格开始 ////////////////////////////////
const tableColumns = ref([
  {
    label: "序号",
    prop: "id",
  },
  {
    label: "模板编码",
    prop: "code",
    search: true,
  },
  {
    label: "模板名称",
    prop: "name",
    search: true,
  },
  {
    label: "发送渠道",
    prop: "senderTypeList",
    dicData: [],
  },
  {
    label: "创建时间",
    prop: "createTime",
  },
]);

/////////////////////////// 表格结束 ////////////////////////////////

onMounted(async () => {
  const result = await getSenderTypes();
  console.log(result);
});
</script>

<style lang="scss" scoped></style>
