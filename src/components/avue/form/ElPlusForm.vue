<template>
  <div>
    <avue-form
      :option="option"
      v-model="model"
      @submit="handleSubmit"
      @reset-change="handleReset"
    ></avue-form>
  </div>
</template>

<script>
export const menuPosition = {
  left: 'left',
      center: 'center',
      right: 'right'
}
</script>
<script setup>
const model = defineModel();
// 表单配置项
const option = ref({
  // 是否显示操作按钮
  menuBtn: true,
  enter: true,
  menuPosition: menuPosition.right,
  menuSpan: 6,
});

const props = defineProps({
  // 字段集合
  formProps: {
    type: Object,
    default: () => {},
  },

  // 表单配置
  formOption: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(["submit", "reset"]);

// 设置每个搜索项的属性
option.value.column = computed(() => {
  const columns = [...props.formProps];
  // 设置一行显示几个
  columns.forEach((columns) => {
    Object.assign(columns, props.formOption);
  });
  return [...props.formProps];
});

/**
 * 提交事件
 * @param form
 * @param done
 */
function handleSubmit(form, done) {
  emits("submit");
  done();
}

/**
 * 重置事件
 */
function handleReset() {
  emits("reset");
}
</script>

<style lang="scss" scoped></style>
