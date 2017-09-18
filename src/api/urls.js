/**
 * Created by yx on 2017/9/5.
 */
let proPrefix = 'http://vip.17cai.com/qc-user/security'
let devPrefix = 'http://192.168.16.161:8080/qc-user/security'
let prefix = process.env.NODE_ENV === 'production' ? proPrefix : devPrefix

export default {
  // 文件异步上传
  upload: {
    dataUrl: prefix + '/iou/creditAccount/upload'
  },
  // 查询白条状态
  getIouStatus: {
    dataUrl: prefix + '/iou/creditAccount/getIouStatus'
  },
  // 提交白条申请
  apply: {
    dataUrl: prefix + '/iou/creditAccount/apply'
  },
  // 获取申请授权信息
  authApply: {
    dataUrl: prefix + '/iou/creditAccount/authApply'
  },
  // 查询用户个人信息
  personInfo: {
    dataUrl: prefix + '/iou/creditAccount/personInfo'
  },
  //  白条基础信息
  lousBaseInfo: {
    dataUrl: prefix + '/iou/creditAccount/baseIouInfo'
  },
  //  白条 未出账单
  unsettled: {
    dataUrl: prefix + '/iou/creditAccount/bill/unsettled'
  },
  //  白条 已出账单
  comeBill: {
    dataUrl: prefix + '/iou/creditAccount/bill/present'
  },
  //  白条 已出账单明细
  comeBillDetail: {
    dataUrl: prefix + '/order/bill/info'
  },
  //  白条 还款流水
  repaymentStream: {
    dataUrl: prefix + '/iou/creditAccount/bill/repayment/record'
  },
  //  白条 消费明细
  consumptionDetails: {
    dataUrl: prefix + '/order/bill/all/info'
  },
  //  白条 退款记录
  refundRecord: {
    dataUrl: prefix + '/order/refund/record'
  },
  //  白条还款明细
  repaymentDetails: {
    dataUrl: prefix + '/iou/creditAccount/bill/repayment/info'
  },
  //  获取支付方式
  getAllPay: {
    dataUrl: prefix + '/pay/get_all_pay'
  },
  //  支付宝支付
  aliPay: {
    dataUrl: prefix + '/pay/ali_pay'
  },
  //  微信支付
  wxPay: {
    dataUrl: prefix + '/pay/wx_pay'
  },
  //  一键支付
  yeePay: {
    dataUrl: prefix + '/pay/yee_pay'
  },
  //  商城余额支付
  mallPay: {
    dataUrl: prefix + '/pay/mall_bal_pay'
  },
  //  查询还款状态
  checkBillStatus: {
    dataUrl: prefix + '/pay/isBillsRepaySuccess'
  }
}
