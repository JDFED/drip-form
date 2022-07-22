/*
 * schema.flow 字段处理成联动语法
 * @Author: jiangxiaowei
 * @Date: 2022-07-12 15:13:44
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-07-22 18:14:21
 */

import type { Flow, ControlFlowAction } from './type'

// TODO else实现
// TODO effect subAction实现
// TODO 使用模板字符串的风险，${}中非字符都会被toString，回到值set的value或者property.split()错误
const parseControlFlow = (
  action: ControlFlowAction,
  flowStr: string
): string => {
  // if的条件语句
  let condintionStr = ''
  // if判断成功，执行的语句
  let effectStr = ''
  action.condintion.map((condintion,index,condintions) => {
    // 是否取反
    const non = condintion.operator.startsWith('-')
    // 去掉 - 之后的字符（例子：前 -includes 后：includes）
    let operator = non ? condintion.operator.slice(1) : condintion.operator
    if (['true', 'false'].includes(operator)) {
      operator = '==='
    }

    const getFn = (value?:string):string=>{
      if(!value) return '""'
      const [fieldKey,type,property] = value.trim().split(' ')
      if(!type) return `'${value}'`
      return property
        ? `get('${fieldKey}').${type}.${property}`
        : `get('${fieldKey}').${type}`
    }

    // 需要前面加.的操作符
    const isdotOperator = ['includes', 'in'].includes(operator)
    condintionStr += `(${getFn(condintion.value1)}${
      isdotOperator ? '.' : ''
    }${operator}${
      ['true', 'false'].includes(condintion.operator)
        ? condintion.operator
        : getFn(condintion.value2)
    })${condintion.logicOperator&&index!=condintions.length-1?condintion.logicOperator:''}`
  })
  action.effect.map((effect) => {
    if (effect.type === 'set') {
      const [fieldKey,subType,property] = effect.fieldKey.trim().split(' ')
      const setValue = typeof effect.value ==='string'?`'${effect.value}'`:effect.value
      // TODO effect.value支持自定义代码
      effectStr += `set('${fieldKey}','${subType}',${
        property
          ? `(oldValue)=>{
          setDeepProp(['${property.split('.')}'],oldValue,${setValue})
      })`
          : setValue || '""'
      };`
    }
  })

  if (condintionStr) {
    flowStr += `if(${condintionStr}){${effectStr}};`
  }
  return flowStr
}

export const parseFlow = (flow: Flow): string => {
  const commonStr = 'const {get,set,merge,setDeepProp}=props;'
  let flowStr = ''
  //TODO trigger.event支持其他类型后，需对一期默认的globalChange兼容
  // 解析flow.actions
  flow.actions.map((action) => {
    switch (action.type) {
      case 'controlFlow':
        flowStr += parseControlFlow(action, flowStr)
        break
      default:
        break
    }
  })
  return commonStr+flowStr
}
