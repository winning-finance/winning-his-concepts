/**
 * 支付状态代码
 */
const enum PAYMENT_STATUS_CPT_ID {
  /**
   * 待支付 399202251
   */
  TO_BE_PAID = '399202251',
  /**
   * 已支付 399202252
   */
  PAID = '399202252',
  /**
   * 已关闭 399202096
   */
  CLOSED = '399202096',
}
export default PAYMENT_STATUS_CPT_ID
