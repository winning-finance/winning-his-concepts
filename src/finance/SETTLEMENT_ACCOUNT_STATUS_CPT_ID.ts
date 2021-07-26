/**
 * 结算单会计状态
 */
const enum SETTLEMENT_ACCOUNT_STATUS_CPT_ID {
  /**
   * 正常 390182503
   */
  NORMAL = '390182503',
  /**
   * 退费 399202223
   */
  REFUND_SETTLEMENT = '399202223',
  /**
   * 红冲 399202265
   */
  RED_CHARGE = '399202265',
}

export default SETTLEMENT_ACCOUNT_STATUS_CPT_ID
