/**
 * 支付方式代码
 */
const enum PAYMENT_METHOD_CPT_ID {
  /**
   * 院内账户 399202046
   */
  HOSPITAL_ACCOUNT = '399202046',
  /**
   * 医保 399202042
   */
  MEDICAL_INSURANCE = '399202042',
  /**
   * 现金 399202041
   */
  CASH = '399202041',
  /**
   * 支付宝 399202043
   */
  ALI_PAY = '399202043',
  /**
   * 微信 399202044
   */
  WX_PAY = '399202044',
  /**
   * 银联 399202045
   */
  UNION_PAY = '399202045',
  /**
   * 住院押金 399314769
   */
  HOSPITAL_DEPOSIT = '399314769',
  /**
   * 信用账户 399202284
   */
  CREDIT_ACCOUNT = '399202284',
}

export default PAYMENT_METHOD_CPT_ID
