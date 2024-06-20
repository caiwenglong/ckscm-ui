<template>
  <div>
    <avue-crud
      v-model="form"
      :option="tableOptions"
      :data="data"
      v-model:page="pageOptions"
      @search-change="searchChange"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @row-del="rowDel"
      @on-load="getDataList"
    >
      <template #effectiveStartDate-datetimerange="{ item }">
        <span>{{ item.text }}日</span>
      </template>
    </avue-crud>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { getList } from "./apiTable.js";
import { isEmptyObject } from "@/utils/toolFunctions.js";
const props = defineProps({
  // 表格配置项
  tableOptions: {
    type: Object,
    default: () => {},
  },

  // 表格数据
  tableDataList: {
    type: Array,
    default: () => [],
  },

  // 分页设置
  pageOptions: {
    type: Object,
    default: () => {},
  },

  // 后端获取地址
  getUrl: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["searchChange", "rowSave", "rowUpdate", "rowDel"]);

// 表格搜索项

// 编辑保存时单行的数据
const form = ref({});

// 表格头配置项默认配置
const tableOptions = ref({
  index: true, // 	是否有序号
  searchIndex: 3, // 配置收缩展示的个数,默认为2个
  searchIcon: true, // 开始展开功能
  searchMenuSpan: 8, // 搜索按钮长度
  border: true, // 表格边框
  align: "center", // 表格对齐方式
  headerAlign: "center", // 表头对齐方式
  searchLabelWidth: 100, // 搜索框的label宽度 默认100
  showOverflowTooltip: true, // 超出隐藏
  column: [], // 数据列
});

watch(
  () => props.tableOptions,
  (newTableOptions) => {
    if (!isEmptyObject(newTableOptions)) {
      tableOptions.value = { ...tableOptions.value, ...newTableOptions };
    }
  },
  { immediate: true }
);

// 默认分页配置
const pageOptions = ref({
  currentPage: 1, // 当前页码
  pageSize: 20, // 每页显示的条数
  total: 0, // 总条数
});
watch(
  () => props.pageOptions,
  (newPageOptions) => {
    if (!isEmptyObject(newPageOptions)) {
      pageOptions.value = { ...pageOptions.value, ...newPageOptions };
    }
  },
  { immediate: true }
);

const data = computed(() => {
  return props.tableDataList.length ? props.tableDataList : dataList.value;
});

/**
 * 通过URL获取数据
 */
const dataList = ref([]);
async function getDataList() {
  if (props.getUrl) {
    pageOptions.value.pageNum = pageOptions.value.currentPage;
    const result = await getList(props.getUrl, pageOptions.value);
    dataList.value = result?.data?.list;
    pageOptions.value.total = result?.data?.total;
  }
}

/**
 * 搜索事件
 */
function searchChange(params, done) {
  emit("searchChange", params);
  done();
}

/**
 * 保存行
 * @param row 当前行对象
 * @param done 关闭弹出框
 * @param loading 加载中
 */
function rowSave(row, done, loading) {
  emit("rowSave", params);
  done(row);
}
/**
 * 删除
 * @param row 当前行对象
 * @param index 当前行的索引
 * @param done 关闭弹出框
 */
function rowDel(row, index, done) {
  emit("rowDel", params);
  done(row);
}

/**
 * 保存行
 * @param row 当前行对象
 * @param index 当前行的索引
 * @param done 关闭弹出框
 * @param loading 加载中
 */
function rowUpdate(row, index, done, loading) {
  emit("rowUpdate", params);
  done(row);
}
</script>

<style lang="scss" scoped></style>
