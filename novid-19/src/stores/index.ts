
import { defineStore } from 'pinia'
import { getApiList } from "../server/index";
import type {RootObject, Children, Today, Total} from './type'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    today: <Today>{},
    total: <Total>{},
  }),
  actions: {
    async getList() {
      const res = await getApiList()
      
      this.list = res
      this.today = res.areaTree.today
      this.total = res.areaTree.total
    }
  }
})
