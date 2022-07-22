import React, { memo, useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { flowSchemaSelector, operatorOptions } from '@generator/store'
import { Button, Collapse, AutoComplete, Select } from 'antd'
import styles from './index.module.css';
import type {SetEffect} from '@jdfed/utils';
import DeleteIcon from '../DeleteIcon';
import { useFlow } from '@generator/hooks'
import SelectField from '../SelectFIeld';
import produce from 'immer';
const {Panel} = Collapse

const ControlFlow = () => {
  const [flowSchema, setFlowSchema] = useRecoilState(flowSchemaSelector)

  const {addControlFlow,deleteControlFlow,deleteCondintion,addCondintion,addEffect,deleteEffect} = useFlow()

  const controlFlowActions = useMemo(()=>{
    return (flowSchema?.actions||[]).filter(item=>item.type==='controlFlow')
  },[flowSchema?.actions])
console.log(flowSchema)



  return (
    <>
      {controlFlowActions.length>0&&(
      <Collapse>
        {controlFlowActions.map((action, index) => {
          return (
            <Panel
              key={index}
              header={`条件逻辑${index + 1}`}
              extra={
                <DeleteIcon onClick={deleteControlFlow.bind(this, index)} />
              }
            >
              <div className={styles.container}>
                <div className={styles.title}>条件</div>
                <div className={styles.content}>
                  {action.condintion.map((condintion, condintionIndex) => {
                    return (
                      <>
                        <div
                          className={styles.condintion}
                          key={condintionIndex + 1}
                        >
                          <div className={styles.subtitle}>{`条件${
                            condintionIndex + 1
                          }:`}</div>
                          <SelectField
                            style={{ width: 200 }}
                            value={condintion.value1}
                            onChange={(value) => {
                              console.log(value)
                              setFlowSchema((oldFlowSchema) => {
                                return produce(oldFlowSchema, (draft) => {
                                  draft.actions[index].condintion[
                                    condintionIndex
                                  ].value1 = value ? value + ' data' : ''
                                })
                              })
                            }}
                            placeholder="请输入需要比较的第一个表单"
                          ></SelectField>
                          {/* TODO 根据第一个值的类型自动修改options */}
                          <Select
                            disabled={!condintion.value1}
                            options={[]}
                            style={{ width: 100 }}
                            value={condintion.operator}
                            onChange={(value) => {
                              console.log('operator', value)
                            }}
                          ></Select>
                          {/* TODO 根据第一个值的类型，判断这个字段是否需要展示 */}
                          <SelectField
                            placeholder="请输入需要比较的第二个表单"
                            disabled={!condintion.value1}
                            style={{ width: 200 }}
                            value={condintion.value1}
                            onChange={(value) => {
                              console.log('value2', value)
                            }}
                          ></SelectField>
                          <DeleteIcon
                            className={styles.deleteicon}
                            onClick={deleteCondintion.bind(this, {
                              actionIndex: index,
                              condintionIndex,
                            })}
                          />
                          <Button
                            shape="circle"
                            className={styles.logicoperatorButton}
                            onClick={addCondintion.bind(this, {
                              actionIndex: index,
                              condintionIndex,
                              logicOperator: '||',
                            })}
                          >
                            或
                          </Button>
                          <Button
                            shape="circle"
                            className={styles.logicoperatorButton}
                            onClick={addCondintion.bind(this, {
                              actionIndex: index,
                              condintionIndex,
                              logicOperator: '&&',
                            })}
                          >
                            且
                          </Button>
                        </div>
                        {condintion.logicOperator === '||' && (
                          <div className={styles.logicoperator}>或</div>
                        )}
                      </>
                    )
                  })}
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.title}>结果</div>
                <div className={styles.content}>
                  {/* TODO 后续支持merge形式，交互待确定 */}
                  {(
                    (action?.effect || []).filter(
                      (item) => item.type !== 'subAction'
                    ) as SetEffect[]
                  ).map((effect, effectIndex) => {
                    // const [fieldKey,type,property] = effect.fieldKey.trim().split(' ')
                    return (
                      <div className={styles.action} key={effectIndex + 1}>
                        <div className={styles.subtitle}>{`动作${
                          effectIndex + 1
                        }:`}</div>
                        <AutoComplete
                          style={{ width: 200 }}
                          value={effect.fieldKey}
                          onChange={(value) => {
                            console.log('value1', value)
                          }}
                          placeholder="请输入需要比较的第一个表单"
                        ></AutoComplete>
                        {/* 根据fieldKey类型设置value */}
                        <DeleteIcon
                          className={styles.deleteicon}
                          onClick={deleteEffect.bind(this, {
                            actionIndex: index,
                            effectIndex,
                          })}
                        />
                      </div>
                    )
                  })}
                  <Button
                    className={styles.addeffectbutton}
                    shape="round"
                    onClick={addEffect.bind(this,index)}
                  >
                    新增动作
                  </Button>
                </div>
              </div>
            </Panel>
          )
        })}
      </Collapse>
      )}
      <Button className={styles.addbutton} shape='round' onClick={addControlFlow}>新增逻辑</Button>
    </>
  )
}

export default memo(ControlFlow)
