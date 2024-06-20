import { useI18n } from "@/hoosk/useI18n.js";

/**
 * 判断对象是否是空对象
 * @param {*} obj 
 * @returns 
 */
export function isEmptyObject(obj) {
  // 使用 for...in 循环遍历对象的所有可枚举属性
  for (let key in obj) {
    // 如果找到任何属性，返回 false
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  // 如果没有找到任何属性，返回 true
  return true;
}

export function mergeWithDefaults(target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      // 检查目标对象中是否已经有这个属性
      if (!target.hasOwnProperty(key)) {
        // 如果目标对象中没有这个属性，直接复制
        target[key] = source[key];
      } else if(Array.isArray(source[key])) {
        target[key] = source[key];
      } else if (typeof source[key] === 'object' && source[key] !== null) {
        // 如果属性是对象，并且不是数组，递归合并
        mergeWithDefaults(target[key], source[key]);
      }
    }
  }
  return target;
}

/**
 * 根据列的prop属性值通过i18n拿到文本
 * @param {*} array 
 */
export function setPropToLabel(array) {
  array.forEach(item => {
    item.label = useI18n(item.prop); // 使用 prop 的值作为国际化键来获取新的 label
  });
  return array
}