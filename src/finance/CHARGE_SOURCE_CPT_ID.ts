/**
 * 收款来源
 */
const enum CHARGE_SOURCE_CPT_ID {
  /**
   * 挂号 399185053
   */
  REGISTER = '399185053',
  /**
   * 收费 399185055
   */
  CHARGE = '399185055',
  /**
   * 储蓄账户充退 399202091
   */
  SAVINGS_ACCOUNT_CHARGE = '399202091',
  /**
   * 信用账户还款 399299114
   */
  CREDIT_ACCOUNT_REPAYMENT = '399299114',
}
export default CHARGE_SOURCE_CPT_ID
