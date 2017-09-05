<template>
  <div class="lous_container">
    <div class="lous_container_top">
      <lous-title></lous-title>

      <bill-box></bill-box>
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
      <come-bill v-if="!tabIndex"></come-bill>

      <!-- 未出账单 -->
      <out-bill v-if="tabIndex === 1"></out-bill>

      <!-- 还款流水 -->
      <repayment-stream v-if="tabIndex === 2"></repayment-stream>

      <!-- 退款记录 -->
      <refund-record  v-if="tabIndex === 3"></refund-record>

      <!-- 消费明细 -->
      <consumption-details  v-if="tabIndex === 4"></consumption-details>

      <!-- 分页 -->
      <pagination
      :total-page="totalPage"
      :current-page="currentPage"
      :change-callback="changeCallback"
      ></pagination>
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
      padding: 34px 130px 45px 98px;
      background: #fef5e9;
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
  Pagination
} from '../components'

export default {
  data () {
    return {
      tabList: ['已出账单', '未出账单', '还款流水', '退款记录', '消费明细'],    //  选项卡数组
      tabIndex: 0,     //  选项卡记录切换索引
      totalPage: 20,    //  总页数
      currentPage: 1   //  当前页
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
    Pagination
  },
  methods: {
    //  修改选项卡索引
    changeTabIndex (index) {
      //  console.log(index)
      this.tabIndex = index
      this.currentPage = 1
    },

    //  页码点击
    changeCallback (page) {
      console.log('页码：' + page)
      this.currentPage = page
    }
  }
}
</script>