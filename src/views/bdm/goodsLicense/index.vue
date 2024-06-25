<template>
  <ElPlusTable
    :tableOptions="tableOptions"
    getUrl="/bdm/goods/license/pageList"
  >
    <template v-slot:tableMenuLeft>
      <el-button
        v-hasPermi="['bdm:goodsLicense:apply']"
        icon="el-icon-plus"
        plain
        size="small"
        type="primary"
        @click="handleOpenApplyLicenseDialog"
      >
        申请许可证
      </el-button>
      <el-button
        v-hasPermi="['bdm:goodsLicense:add']"
        icon="el-icon-plus"
        plain
        size="small"
        type="primary"
        @click="handleOpenEntryLicenseDialog"
      >
        录入许可证
      </el-button>
    </template>
  </ElPlusTable>
</template>

<script setup>
import { useGetDicts } from "@/hoosk/useGetDicts";
import { DICT_LICENSE_STATUS } from "@/constants/sys/dictsName.js";
import {handleGetTargetField, setPropToLabel} from "@/utils/toolFunctions.js";
import { useElPlusDialog } from "@/hoosk/useElPlusDialog.js";
import useGlobalStore from "@/store/modules/global";
import {ElMessage} from "element-plus";

const { showElPlusDialog } = useElPlusDialog();
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

/**
 * 显示申请许可证弹出框
 */
async function handleOpenApplyLicenseDialog() {
  const applyLicenseDialogFormProps = setPropToLabel([
    {
      prop: "goodsCountryId",
      type: "select",
      virtualize: true,
      props: {
        label: "countryName",
        value: "id",
      },
      control: (val, form) => {
        console.log(val, form)

      },
      change: ({ value, column }) => {
        console.log(column.dicData)
        const label = handleGetTargetField(column.dicData, value, 'countryName', 'id')
        console.log(label)
      },
      dicData: await useGlobalStore().getAllCountry(),
    },
    {
      prop: "nameLatin",
      disabled: true,
    },
  ]);
  showElPlusDialog(applyLicenseDialogFormProps);
}
</script>
