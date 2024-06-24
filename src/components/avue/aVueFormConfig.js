//  @description: avue 表单全局配置

import {formPropsType} from "@/components/avue/aVueEnum.js";

/**
 * avue 表单全局配置
 * @param columns 表单项
 */
export function aVueFormDefaultConfig(columns) {
  columns.forEach(item => {
    if(item.type === formPropsType.select) {
      item.clearable = true
      item.filterable = true
    }
  })

  return columns
}

