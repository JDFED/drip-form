/*
 * 联动配置相关状态
 * @Author: jiangxiaowei
 * @Date: 2022-07-11 15:20:24
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-07-22 19:33:56
 */
import { atom, selector, selectorFamily, atomFamily } from 'recoil'
import { parseUnitedSchema, generateReg } from '@jdfed/utils'
import type { Flow, TypePathItem } from '@jdfed/utils'
import { schemaAtom } from '../unclassified'
// 联动配置抽屉是否展示
export const controlVisibleAtom = atom<boolean>({
  key: 'controlVisibleAtom',
  default: false,
})

export const flowSchemaAtom = atom<Flow|null>({
  key: 'flowSchemaAtom',
  default:null
})

// 联动配置schema
export const flowSchemaSelector = selector<Flow>({
  key: 'flowSchemaSelector',
  get:({get})=>{
    return get(flowSchemaAtom) || get(schemaAtom)?.ui?.flow || {}
  },
  set:({set},newValue)=>{
    set(flowSchemaAtom,newValue)
  }
})


type ComponentTreeData = Array<TypePathItem&{value:string}>

// 所有表单的treeselect数据
export const componentsTreeSelectDataSelector = selector<ComponentTreeData>({
  key: 'componentsTreeSelectDataSelector',
  get: ({ get }) => {
    const unitedSchema = get(schemaAtom)
    const { typePath } = parseUnitedSchema(unitedSchema)
    // TODO 未按照组件顺序排列，优化parseUnitedSchema，使用Map代替，Map遍历按照插入顺序
    const newTreeData: ComponentTreeData = []
    Object.entries(typePath).map(([key, value]) => {
      newTreeData.push({
        value: key,
        ...value,
      })
    })
    return newTreeData
  },
})

// 根据输入单词过滤可选的表单treeselect数据
export const componentsFilterData = atomFamily<ComponentTreeData,string>({
  key: 'componentsFilterData',
  default: selectorFamily({
    key: 'componentsFilterData/default',
    get:
      (filterValue) =>
      ({ get }) => {
        const data = get(componentsTreeSelectDataSelector)
        return data.filter(
          (item) => {
            return (
              item.title.startsWith(filterValue) ||
              generateReg(filterValue.split('.')).test(item.value)
            )
          }
        )
      },
  }),
})


const operatorMap = {
  string: [
    {label:'等于',value:'==='},
    {label:'不等于',value:'!=='},
    {label:'包含',value:'includes'},
    {label:'不包含',value:'-includes'},
  ],
  number:[
    {label:'大于等于',value:'>='},
    {label:'小于等于',value:'<='},
    {label:'小于',value:'<'},
    {label:'大于',value:'>'},
    {label:'等于',value:'==='},
    {label:'不等于',value:'!=='},
  ],
  boolean:[
    {label:'真',value:'true'},
    {label:'假',value:'false'},
  ],
  object:[
    {label:'包含',value:'includes'},
    {label:'不包含',value:'-includes'},
  ],
  array:[
    {label:'包含',value:'includes'},
    {label:'不包含',value:'-includes'},
  ]
}

// 比较操作符 根据比较值1动态更改比较操作符
export const operatorOptions = atomFamily<Array<{label:string,value:string}>,keyof typeof operatorMap>({
  key: 'operationOptions',
  default: (dataType) => {
    return operatorMap[dataType]
  },
})
