/**
 * 收款状态
 */
const enum CHARGE_STATUS_CPT_ID {
  /**
   * 待收款 399202093
   */
  TO_BE_CHARGE = '399202093',
  /**
   * 部分收款 399202094
   */
  PARTIAL_CHARGE = '399202094',
  /**
   * 收款完成 399202095
   */
  FINISHED_CHARGE = '399202095',
  /**
   * 已关闭 399202096
   */
  CLOSED = '399202096',
}

export default CHARGE_STATUS_CPT_ID
