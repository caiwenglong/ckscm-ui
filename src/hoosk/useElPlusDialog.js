
import { $DialogForm } from '@smallwei/avue';
import { getCurrentInstance } from 'vue';
import { isEmptyObject, mergeWithDefaults } from "@/utils/toolFunctions.js";
export function useElPlusDialog() {
  
  const { appContext } = getCurrentInstance()

  // 默认配置
  let dialogOptions = {
    option: {
      submitText: '完成',
      column: []
    }
  }


  // 显示弹出框
  function showElPlusDialog(column = [], customDialogOptions = {}) {
    console.log(column);
    // 合并自定义配置
    if(!isEmptyObject(customDialogOptions)) {
      dialogOptions = mergeWithDefaults(dialogOptions, customDialogOptions)
      
    }
    dialogOptions.option.column = column
    console.log(dialogOptions);
    $DialogForm(appContext)(dialogOptions)
  }
  return {
    showElPlusDialog
  }
}