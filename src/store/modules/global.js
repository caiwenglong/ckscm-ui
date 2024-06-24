import { getAllCountryByCondition } from "@/api/system/bdm/index.js";

const useGlobalStore = defineStore("globalStore", {
  state: () => {
    return {
      // 国家列表
      countryList: [],
    };
  },

  actions: {
    /**
     * 获取国家列表
     * @param params
     * @returns {Promise<unknown>}
     */
    getAllCountry(params = "") {
      return new Promise((resolve, reject) => {
        if (!this.countryList.length) {
          getAllCountryByCondition({ isCommonUse: params })
            .then((res) => {
              const data = res.data;
              console.log(data);
              this.countryList = data;
              resolve(data);
            })
            .catch(() => reject());
        } else {
          resolve(this.countryList);
        }
      });
    },
  },
});

export default useGlobalStore;
