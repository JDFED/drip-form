import { flowCondintion,flowEffectTestData} from '../__testsdata__/controlFlow'
import {parseFlow} from '../src';

describe('parseFlow', () => {
  test('controlFlow', () => {
    expect(parseFlow(flowCondintion)).toBe(
      "if((get(b)!==get(c))){set(b,'uiSchema','');};"
    )
    expect(parseFlow(flowEffectTestData)).toBe(
      "if((get(b)!==get(c))){set(b,'uiSchema','');};"
    )
  })
})
