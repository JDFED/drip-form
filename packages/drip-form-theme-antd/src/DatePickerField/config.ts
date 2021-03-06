import type { OnChange } from '@jdfed/utils'

const formatList = {
  date: 'YYYY-MM-DD HH:mm:ss',
  week: 'YYYY-wo',
  month: 'YYYY-MM',
  quarter: 'YYYY-quarter',
  year: 'YYYY',
}

const changeShowTime: OnChange = ({ dispatch, getKey, val }) => {
  dispatch({
    type: 'setUi',
    action: {
      set: {
        [getKey('ui.default', 'uiSchema') + '.showTime']: val,
        [getKey('ui.default', 'uiSchema') + '.format']: val
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD',
        [getKey('ui.default__range.0', 'uiSchema') + '.showTime']: val,
        [getKey('ui.default__range.1', 'uiSchema') + '.showTime']: val,
        [getKey('ui.default__range.0', 'uiSchema') + '.format']: val
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD',
        [getKey('ui.default__range.1', 'uiSchema') + '.format']: val
          ? 'YYYY-MM-DD HH:mm:ss'
          : 'YYYY-MM-DD',
      },
    },
  })
  dispatch({
    type: 'setValidate',
    action: {
      set: {
        [getKey('ui.default', 'dataSchema') + '.default']: '',
      },
    },
  })
  dispatch({
    type: 'setData',
    action: {
      set: {
        'ui.default': '',
        'ui.default__range': [],
        'ui.format': val ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
      },
    },
  })
}

const changePicker: OnChange = ({ dispatch, getKey, val }) => {
  dispatch({
    type: 'setUi',
    action: {
      set: {
        [getKey('ui.default', 'uiSchema') + '.picker']: val,
        [getKey('ui.default', 'uiSchema') + '.format']:
          formatList[val as keyof typeof formatList],
        [getKey('ui.default__range.0', 'uiSchema') + '.picker']: val,
        [getKey('ui.default__range.1', 'uiSchema') + '.picker']: val,
        [getKey('ui.default__range.0', 'uiSchema') + '.format']:
          formatList[val as keyof typeof formatList],
        [getKey('ui.default__range.1', 'uiSchema') + '.format']:
          formatList[val as keyof typeof formatList],
      },
    },
  })
  dispatch({
    type: 'setValidate',
    action: {
      set: {
        [getKey('ui.default', 'dataSchema') + '.default']: '',
      },
    },
  })
  dispatch({
    type: 'setData',
    action: {
      set: {
        'ui.default': '',
        'ui.default__range': [],
        'ui.format': formatList[val as keyof typeof formatList],
      },
    },
  })
}

/**
 * ???????????????
 */
const config = {
  icon: 'iconfont icon-datepicker',
  title: '???????????????',
  unitedSchema: {
    type: 'string',
    title: '???????????????',
    ui: {
      type: 'datePicker',
      showTime: true,
      theme: 'antd',
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        type: 'string',
        title: '????????????',
        default: 'edit',
        ui: {
          type: 'radio',
          options: [
            {
              value: 'edit',
              label: '??????',
            },
            {
              value: 'view',
              label: '??????',
            },
          ],
        },
        fieldKey: 'formMode',
      },
      {
        fieldKey: 'range',
        type: 'boolean',
        title: '????????????????????????',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'disabled',
        type: 'boolean',
        title: '????????????',
        default: false,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'allowClear',
        type: 'boolean',
        title: '??????????????????',
        default: true,
        ui: { type: 'switch' },
      },
      {
        fieldKey: 'showTime',
        type: 'boolean',
        title: '??????????????????????????????',
        default: true,
        ui: {
          type: 'switch',
          onChange: changeShowTime,
          // eslint-disable-next-line quotes
          vcontrol: "return props.formData.ui.picker==='date'",
        },
      },
      {
        fieldKey: 'picker',
        type: 'string',
        title: '???????????????',
        default: 'date',
        ui: {
          type: 'select',
          style: { width: '50%' },
          onChange: changePicker,
          options: [
            { label: '???', value: 'date' },
            { label: '???', value: 'week' },
            { label: '???', value: 'month' },
            { label: '???', value: 'quarter' },
            { label: '???', value: 'year' },
          ],
        },
      },
      {
        fieldKey: 'placeholder',
        type: 'string',
        title: '?????????',
        ui: {
          type: 'text',
          placeholder: '???????????????',
          vcontrol: 'return !props.formData.ui.range',
        },
      },
      {
        fieldKey: 'default',
        type: 'string',
        title: '?????????',
        ui: {
          type: 'datePicker',
          picker: 'date',
          showTime: true,
          vcontrol: 'return !props.formData.ui.range',
        },
      },
      {
        fieldKey: 'default__range',
        type: 'array',
        title: '?????????',
        default: [],
        ui: {
          type: 'array',
          mode: 'tuple',
          vcontrol: 'return props.formData.ui.range',
        },
        maxItems: 2,
        minItems: 2,
        items: [
          {
            type: 'string',
            title: '????????????',
            ui: {
              type: 'datePicker',
              picker: 'date',
              showTime: true,
            },
          },
          {
            type: 'string',
            title: '????????????',
            ui: {
              type: 'datePicker',
              picker: 'date',
              showTime: true,
            },
          },
        ],
      },
      {
        fieldKey: 'placeholder__range',
        type: 'array',
        title: '?????????????????????????????????',
        default: [],
        ui: {
          type: 'array',
          mode: 'tuple',
          vcontrol: 'return props.formData.ui.range',
        },
        maxItems: 2,
        minItems: 2,
        items: [
          {
            type: 'string',
            title: '????????????',
            ui: {
              type: 'text',
              placeholder: '?????????????????????',
            },
          },
          {
            type: 'string',
            title: '????????????',
            ui: {
              type: 'text',
              placeholder: '?????????????????????',
            },
          },
        ],
      },
      {
        fieldKey: 'format',
        type: 'string',
        title: '????????????',
        default: 'YYYY-MM-DD HH:mm:ss',
        ui: {
          type: 'text',
          placeholder: 'YYYY-MM-DD HH:mm:ss',
        },
      },
    ],
  },
}

export default config
