<template>
  <div>
    <avue-crud
      v-model="form"
      :option="option"
      :data="data"
      v-model:page="page"
      @search-change="searchChange"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @row-del="rowDel"
    ></avue-crud>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { getList } from "./apiTable.js";
const props = defineProps({
  // 表格列数据信息
  tableColumns: {
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
const option = ref({
  index: true, // 	是否有序号
  searchIndex: 1, // 配置收缩展示的个数,默认为2个
  searchIcon: true, // 开始展开功能
  searchMenuSpan: 8, // 搜索按钮长度
  column: [],
});
option.value.column = computed(() => {
  return props.tableColumns;
});

// 默认分页配置
const defaultPageOptions = {
  currentPage: 1, // 当前页码
  pageSize: 20, // 每页显示的条数
  total: 0, // 总条数
};
const page = computed(() => {
  return { ...defaultPageOptions, ...props.pageOptions };
});

const dataList = ref([]);
onMounted(async () => {
  if (!props.tableDataList.length && props.getUrl) {
    const result = await getList(props.getUrl);
    dataList.value = result?.data?.list;
  }
});
const data = computed(() => {
  return props.tableDataList.length ? props.tableDataList : dataList;
});
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
