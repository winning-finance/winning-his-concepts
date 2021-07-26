/**
 * 结算单结算状态
 */
const enum SETTLEMENT_STATUS_CPT_ID {
  /**
   * 生成 391004681
   */
  GENERATE = '391004681',
  /**
   * 预算中 391004682
   */
  PRE_SETTLED_ING = '391004682',
  /**
   * 预算成功 391004683
   */
  PRE_SETTLED_SUCCESS = '391004683',
  /**
   * 正算中 391004684
   */
  SETTLED_ING = '391004684',
  /**
   * 正算成功 391004685
   */
  SETTLED_SUCCESS = '391004685',
  /**
   * 收款中 391004686
   */
  CHARGE_ING = '391004686',
  /**
   * 完成 391004687
   */
  FINISHED = '391004687',
  /**
   * 退费中 391004688
   */
  REFUND_SETTLEMENT_ING = '391004688',
  /**
   * 已退费 391004689
   */
  REFUND_SETTLEMENT = '391004689',
  /**
   * 退款中 391004690
   */
  REFUND_PAYMENT_ING = '391004690',
}
export default SETTLEMENT_STATUS_CPT_ID
