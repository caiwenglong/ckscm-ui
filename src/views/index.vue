<template>
  <avue-form :option="option"></avue-form>
</template>
<script>
export default {
  data() {
    return {
      option: {
        column: [
          {
            label: "输入框",
            prop: "input",
            type: "input",
          },
          {
            label: "输入框",
            prop: "input1",
          },
        ],
      },
    };
  },
};
</script>
