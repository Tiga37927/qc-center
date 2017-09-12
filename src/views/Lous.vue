<template>
  <div class="lous_container">
    <div class="lous_container_top">
      <lous-title @to-pay="toPay" :base-info="getLousBaseInfo"></lous-title>

      <bill-box :base-info="getLousBaseInfo"></bill-box>
    </div>

    <!-- 白条账单 -->
    <div class="lous_bill">
      <!-- 账单title -->
      <lous-bill-title></lous-bill-title>

      <!-- 选项卡 -->
      <tab-bar
      :tab-list="tabList"
      :tab-index="tabIndex"
      :change-tab-index="changeTabIndex"
      ></tab-bar>

      <!-- 已出账单 -->
      <come-bill
      :show="tabIndex"
      :list-obj="getComeBill"
      @view-come-bill-detail="checkComeBillDetail"
      ></come-bill>

      <!-- 未出账单 -->
      <out-bill :show="tabIndex" :out-bill-obj="getOutBill"></out-bill>

      <!-- 还款流水 -->
      <repayment-stream :show="tabIndex" :list-obj="getRepaymentStream.result" v-if="getRepaymentStream.result"></repayment-stream>

      <!-- 退款记录 -->
      <refund-record  :show="tabIndex"></refund-record>

      <!-- 消费明细 -->
      <consumption-details  :show="tabIndex" :list-obj="getConsumptionDetails.result" v-if="getConsumptionDetails.result"></consumption-details>

      <!-- 分页 -->
      <pagination
      :total-page="totalPage"
      :current-page="pageNo"
      :change-callback="changeCallback"
      ></pagination>

      <!-- 查询加载loading -->
      <bill-loading :show="showBillLoading"></bill-loading>
    </div>
  </div>
</template>

<style lang="less">
  .lous_container{
    width: 934px;
    
    .lous_container_top {
      padding: 60px 98px 40px 98px;
    } 

    .lous_bill {
      min-height: 538px;
      padding: 34px 130px 45px 98px;
      background: #fef5e9;
      position: relative;
    }
  }
</style>

<script>
import {
  LousTitle,
  BillBox,
  LousBillTitle,
  TabBar,
  ComeBill,
  OutBill,
  RepaymentStream,
  RefundRecord,
  ConsumptionDetails,
  Pagination,
  BillLoading
} from '../components'

import { mapActions, mapGetters } from 'vuex'
import configUrl from '../api/urls'

export default {
  data () {
    return {
      tabList: ['已出账单', '未出账单', '还款流水', '退款记录', '消费明细'],    //  选项卡数组
      tabIndex: 0,     //  选项卡记录切换索引
      totalPage: 0,    //  总页数
      pageNo: 1,   //  当前页
      lousBaseInfoUrl: configUrl.lousBaseInfo.dataUrl,     //  白条基础信息URL
      lousOutBillUrl: configUrl.unsettled.dataUrl,           //  白条未出账单URL
      showBillLoading: true,                            //  是否显示加载账单loading
      comeBillUrl: configUrl.comeBill.dataUrl,            // 白条已出账单URL
      comeBillDetailUrl: configUrl.comeBillDetail.dataUrl,    //  白条已出账单明细
      pageSize: 2,                                         //  每页条数
      repaymentStreamUrl: configUrl.repaymentStream.dataUrl,     //  白条还款流水
      consumptionDetailsUrl: configUrl.consumptionDetails.dataUrl   // 消费明细
    }
  },
  components: {
    LousTitle,
    BillBox,
    LousBillTitle,
    TabBar,
    ComeBill,
    OutBill,
    RepaymentStream,
    RefundRecord,
    ConsumptionDetails,
    Pagination,
    BillLoading
  },
  created () {
    //  获取白条基本信息
    this.checkLousBaseInfo()

    //  查询已出账单
    this.checkComeBill()
  },
  methods: {
    //  vuex actions
    ...mapActions(['lousBaseInfo', 'outBill', 'comeBill', 'comeBillDetail', 'repaymentStream', 'consumptionDetails']),

    //  修改选项卡索引
    changeTabIndex (index) {
      //  console.log(index)
      this.tabIndex = index
      this.pageNo = 1
      this.totalPage = 0

      //  根据tabIbdex查询对应账单
      this.checkBillType(index)
    },

    //  根据tabIbdex查询对应账单
    checkBillType (tabIndex) {
      this.showBillLoading = true

      switch (tabIndex) {
        //  查询已出账单
        case 0:
          this.checkComeBill()
          break

        //  查询未出账单
        case 1:
          this.checkOutBill()
          break

        //  还款流水
        case 2:
          this.checkRepaymentStream()
          break

        //  消费明细
        case 4:
          this.checkConsumptionDetails()
          break

        default:
          break
      }
    },

    //  页码点击
    changeCallback (page) {
      console.log('页码：' + page)
      this.pageNo = page
      this.totalPage = 0

      //  根据tabIbdex查询对应账单
      this.checkBillType(this.tabIndex)
    },

    //  跳转详情
    toPay () {
      this.$router.push({
        name: 'pay'
      })
    },

    //  获取白条基本信息
    checkLousBaseInfo () {
      let opt = {
        isLoading: false,
        type: 'post',
        url: this.lousBaseInfoUrl,
        data: {},
        errMsg: '获取白条基础信息失败',
        success: function (res) {
          //  console.log(res)
        },
        fail: function (err) {
          console.log(err)
        }
      }

      this.lousBaseInfo(opt)
    },

    //  查询未出账单
    checkOutBill () {
      let me = this
      let opt = {
        isLoading: false,
        type: 'post',
        url: this.lousOutBillUrl,
        data: {},
        errMsg: '查询未出账单失败',
        success: function (res) {
          console.log(res)
          me.showBillLoading = false
        },
        fail: function (err) {
          console.log(err)
          me.showBillLoading = false
        }
      }

      this.outBill(opt)
    },

    //  查询已出账单
    checkComeBill () {
      //  清空数据
      this.$store.state.lous.comeBill = {}

      let me = this
      let opt = {
        loading: false,
        type: 'post',
        url: this.comeBillUrl,
        data: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        errMsg: '查询已出账单失败',
        success: function (res) {
          console.log(res)
          me.showBillLoading = false
          me.totalPage = res.pages
        },
        fail: function (err) {
          console.log(err)
          me.showBillLoading = false
        }
      }

      this.comeBill(opt)
    },

    //  查询已出账单明细
    checkComeBillDetail (msg) {
      let opt = {
        loading: false,
        type: 'post',
        url: this.comeBillDetailUrl,
        index: msg.index,
        data: {
          pageNo: 1,
          pageSize: 10,
          billId: msg.billId
        },
        errMsg: '查询已出账单失败',
        success: function (res) {
          console.log(res)
        },
        fail: function (err) {
          console.log(err)
        }
      }

      this.comeBillDetail(opt)
    },

    //  还款流水
    checkRepaymentStream () {
      //  清空数据
      this.$store.state.lous.repaymentStream = {}

      let me = this
      let opt = {
        loading: false,
        type: 'post',
        url: this.repaymentStreamUrl,
        data: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        errMsg: '查询还款流水失败',
        success: function (res) {
          console.log(res)
          me.showBillLoading = false
          me.totalPage = res.pages
        },
        fail: function (err) {
          console.log(err)
          me.showBillLoading = false
        }
      }

      this.repaymentStream(opt)
    },

    //  消费明细
    checkConsumptionDetails () {
      //  清空数据
      this.$store.state.lous.consumptionDetails = {}

      let me = this
      let opt = {
        loading: false,
        type: 'post',
        url: this.consumptionDetailsUrl,
        data: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        errMsg: '查询消费明细失败',
        success: function (res) {
          console.log(res)
          me.showBillLoading = false
          me.totalPage = res.pages
        },
        fail: function (err) {
          console.log(err)
          me.showBillLoading = false
        }
      }

      this.consumptionDetails(opt)
    }
  },

  computed: {
    ...mapGetters(['getLousBaseInfo', 'getComeBill', 'getOutBill', 'getRepaymentStream', 'getConsumptionDetails'])
  }
}
</script>