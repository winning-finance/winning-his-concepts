/**
 * 住院账单生成方式
 */
const enum BILL_CREATED_MODE_CPT_ID {
  /**
   * 自动生成 399296142
   */
  AUTO_GENERATE = '399296142',
  /**
   * 中途结算生成 399313640
   */
  MIDWAY_SETTLEMENT_GENERATE = '399313640',
}
export default BILL_CREATED_MODE_CPT_ID
