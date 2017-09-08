/**
 * Created by yx on 2017/9/5.
 */
let proPrefix = ''
let devPrefix = 'http://192.168.16.161:8080/qc-user'
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
  }
}
