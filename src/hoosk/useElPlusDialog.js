import { $DialogForm } from "@smallwei/avue";
import { getCurrentInstance } from "vue";
import { isEmptyObject, mergeWithDefaults } from "@/utils/toolFunctions.js";
import {aVueFormDefaultConfig} from "@/components/avue/aVueFormConfig.js";
import {ElMessage} from "element-plus";
export function useElPlusDialog() {
  const { appContext } = getCurrentInstance();

  // 默认配置
  let dialogOptions = {
    option: {
      submitText: "完成",
      column: [],
    },
    beforeClose: (done) => {
      ElMessage.success('关闭前方法')
      done()
    },
    callback:(res)=>{
      res.done()
      res.close()
    }
  };

  /**
   * 显示弹出框
   * @param columns form表单项
   * @param customDialogOptions 自定义弹出框配置
   */
  function showElPlusDialog(columns = [], customDialogOptions = {}) {
    // 合并自定义配置
    if (!isEmptyObject(customDialogOptions)) {
      dialogOptions = mergeWithDefaults(dialogOptions, customDialogOptions);
    }

    // 添加全局默认配置
    aVueFormDefaultConfig(columns)

    dialogOptions.option.column = columns;
    $DialogForm(appContext)(dialogOptions);
  }
  return {
    showElPlusDialog,
  };
}
