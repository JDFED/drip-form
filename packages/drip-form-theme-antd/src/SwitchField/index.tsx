/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-14 13:33:14
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-03-13 12:29:35
 */
import React, { memo, FC } from 'react'
import { Switch } from 'antd'
import { useField } from '@jdfed/hooks'
import { CommonProps } from '../global'

const SwitchField: FC<CommonProps> = ({
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  style,
  asyncValidate,
  getKey,
  ...restProps
}) => {
  const _onChange = useField(
    { fieldKey, getKey, onChange, asyncValidate, fieldData: !fieldData },
    dispatch
  )
  return (
    <Switch
      disabled={disabled}
      onChange={_onChange}
      checked={!!fieldData}
      style={style}
      {...restProps}
    />
  )
}

export const switchField = memo(SwitchField)
export { default as config } from './config'
