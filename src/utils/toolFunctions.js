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