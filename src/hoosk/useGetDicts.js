// 获取指定字典数组
export function useGetDicts(dictName) {
    const { proxy } = getCurrentInstance();
    let targetDict = []
    !!dictName && (targetDict = proxy.useDict(dictName));
    return targetDict[dictName]
}