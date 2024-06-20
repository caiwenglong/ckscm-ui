<template>
  <ElPlusTable
    :tableOptions="tableOptions"
    getUrl="/bdm/goods/license/pageList"
  ></ElPlusTable>
</template>

<script setup>
import { useGetDicts } from "@/hoosk/useGetDicts";
import { DICT_LICENSE_STATUS } from "@/constants/sys/dictsName.js";
const tableOptions = ref({
  searchLabelWidth: 140,
  column: [
    {
      label: "中文品名",
      prop: "nameCn",
      search: true,
    },
    {
      label: "拉丁学名",
      prop: "nameLatin",
      search: true,
    },
    {
      label: "原产国",
      prop: "goodsCountryName",
      search: true,
    },
    {
      label: "许可证编号",
      prop: "licenseNo",
      search: true,
    },
    {
      label: "港口",
      prop: "portName",
      search: true,
    },
    {
      label: "厂号",
      prop: "factoryNo",
      search: true,
    },
    {
      label: "有效期限",
      prop: "effectiveStartDate",
      type: "datetimerange",
    },
    {
      label: "申请单位名称",
      prop: "applyCompanyName",
      align: "left",
    },
    {
      label: "创建人",
      prop: "createBy",
    },
    {
      label: "创建日期",
      prop: "createTime",
    },
    {
      label: "状态",
      prop: "licenseStatus",
      type: "select",
      dicData: useGetDicts(DICT_LICENSE_STATUS),
    },
  ],
});
</script>
