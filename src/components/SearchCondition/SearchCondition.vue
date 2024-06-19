<template>
  <div>
    <ElPlusForm
        ref="formRef"
        :formOption="options"
        :formProps="formProps"
        v-model="model"
        @submit="handleSubmit"
        @reset="handleReset"
    ></ElPlusForm>
  </div>
</template>

<script setup>
import { avueFormEnum } from "@/constants/enum/avueFormEnum.js";
const model = defineModel();
// 表单配置项
const searchDefaultOption = ref({
  // 是否显示操作按钮
  menuBtn: true,
  enter: true,
  menuPosition: avueFormEnum.menuPosition.right,
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

const options = computed(() => {
  return Object.assign(props.formOption, searchDefaultOption)
})

/**
 * 提交事件
 */
function handleSubmit() {
  emits("submit");
}

/**
 * 重置事件
 */
function handleReset() {
  emits("reset");
}
</script>

<style lang="scss" scoped></style>
