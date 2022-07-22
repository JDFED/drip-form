export default {
  type: 'object',
  validateTime: 'change',
  ui: {
    flow: {
      trigger: {
        event: 'globalChange',
      },
      actions: [
        {
          type: 'controlFlow',
          condintion: [
            {
              value1: 'b data',
              operator: '===',
              value2: '1',
            },
          ],
          effect: [
            {
              type: 'set',
              fieldKey: 'a uiSchema vcontrol',
              value: 'return false',
            },
          ],
        },
      ],
    },
  },
  theme: 'antd',
  schema: [
    {
      type: 'string',
      title: '单选',
      default: '1',
      ui: {
        type: 'radio',
        theme: 'antd',
        options: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '0',
          },
        ],
      },
      fieldKey: 'a',
    },
    {
      type: 'string',
      title: '输入框',
      ui: {
        type: 'text',
        style: {
          width: '100%',
        },
        theme: 'antd',
        vcontrol: 'return false',
      },
      fieldKey: 'b',
    },
    {
      type: 'object',
      title: '对象容器',
      ui: {
        type: 'object',
        mode: 'collapse',
        '$:dripStyle': true,
        ghost: true,
        containerStyle: {
          padding: 0,
          marginBottom: 5,
        },
        active: false,
        title: {
          verticalAlign: 'top',
        },
      },
      schema: [
        {
          type: 'string',
          title: '对象.输入框',
          ui: {
            type: 'text',
            style: {
              width: '100%',
            },
            theme: 'antd',
          },
          fieldKey: 'c1',
        },
        {
          type: 'string',
          title: '颜色选择框',
          format: 'color',
          ui: {
            type: 'colorPicker',
            theme: 'antd',
          },
          fieldKey: 'c2',
        },
      ],
      fieldKey: 'c',
    },
    {
      type: 'array',
      title: '数组容器',
      ui: {
        title: {
          verticalAlign: 'top',
        },
        type: 'array',
        mode: 'add',
        addTitle: '添加一行数据',
        hasConfirm: false,
        confirm: {
          confirmTitle: '确定删除这一项？',
          okText: '确定',
          cancelText: '取消',
        },
      },
      items: {
        type: 'string',
        title: '数组.单选',
        default: '1',
        ui: {
          type: 'radio',
          theme: 'antd',
          options: [
            {
              label: '是',
              value: '1',
            },
            {
              label: '否',
              value: '0',
            },
          ],
        },
      },
      fieldKey: 'd',
    },
  ],
}
