<!--
 * @FilePath     : /ckscm-ui/src/components/elementPlus/ElTabs/ElTabs.vue
 * @Description  :  tabs组件
 * @Author       : cwl 836472117@qq.com
-->
<template>
  <div>
    <el-tabs :type="tabType">
      <template v-for="tab in tabsArray">
        <el-tab-pane :label="tab.label">
          <Suspense>
            <template #default>
              <!-- 使用 :is 属性来指定动态组件的名称 -->
              <component :is="tab.component"></component>
            </template>
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script setup>
const props = defineProps({
  // tab信息
  tabsArray: {
    type: Array,
    default: () => [],
  },
  //   tab类型
  tabType: {
    type: String,
    default: "border-card",
  },
});
</script>

<style lang="scss" scoped></style>
