/*
 * @Author: jun.fu<fujunchn@qq.com>
 * @LastEditors: jun.fu<fujunchn@qq.com>
 * @Description: file content
 * @Date: 2021-08-21 16:27:36
 * @LastEditTime: 2021-08-21 16:33:13
 * @FilePath: /winning-his-concepts/src/account/ABOVE_LIMIT_CONTROL_TYPE_CPT_ID.ts
 */
/**
 * 超限额的控制方式概念标识
 */
const enum ABOVE_LIMIT_CONTROL_TYPE_CPT_ID {
  /**
   * 不需要控制 399545070
   */
  NO_CONTORL = '399545070',
  /**
   * 控制 399545071
   */
  CONTORL = '399545071',
  /**
   * 提醒 399545072
   */
  TIPS = '399545072',
}

export default ABOVE_LIMIT_CONTROL_TYPE_CPT_ID;
