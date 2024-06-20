<template>
  <ElPlusTable
    :tableOptions="tableOptions"
    getUrl="/bdm/goods/license/pageList"
  ></ElPlusTable>
</template>

<script setup>
import { useGetDicts } from "@/hoosk/useGetDicts";
import { DICT_LICENSE_STATUS } from "@/constants/sys/dictsName.js";
import { setPropToLabel } from "@/utils/toolFunctions.js";
const tableOptions = ref({
  searchLabelWidth: 140,
  column: [
    {
      prop: "nameCn",
      search: true,
    },
    {
      prop: "nameLatin",
      search: true,
    },
    {
      prop: "goodsCountryName",
      search: true,
    },
    {
      prop: "licenseNo",
      search: true,
    },
    {
      prop: "portName",
      search: true,
    },
    {
      prop: "factoryNo",
      search: true,
    },
    {
      prop: "effectiveStartDate",
      type: "datetimerange",
    },
    {
      prop: "applyCompanyName",
      align: "left",
    },
    {
      prop: "createBy",
    },
    {
      prop: "createTime",
    },
    {
      prop: "licenseStatus",
      type: "select",
      dicData: useGetDicts(DICT_LICENSE_STATUS),
    },
  ],
});

setPropToLabel(tableOptions.value.column);
</script>
