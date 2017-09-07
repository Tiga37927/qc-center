<template>
  <div class="pay_container">
    <!-- 还款明细 -->
    <repayment-details></repayment-details>

    <!-- 支付方式 -->
    <pay-methods :pay-methods-list="payMethodsList"></pay-methods>

    <!-- 齐采支付 -->
    <div class="pay_methods_container repayment_details_container pay_border_b clearfix">
      <div class="fl font16 left">
        <b>齐采支付</b>
      </div>
      <div class="fl right">
        <div class="moc-checkbox content">
          <label>
            <input type="checkbox" name="payMethods" />
            <i></i>
            <div class="font16">
              余额支付
            </div>
          </label>
          <span>
            余额为0，
            <a href="javascript:;" class="font16">立即充值</a>
          </span>
        </div>
      </div>
    </div>


    <!-- 立即付款 -->
    <div class="to_pay_btn">
      <button>立即付款</button>
    </div>

  </div>
</template>

<style lang="less">
  .pay_container {
    padding: 58px 0 110px 0;
    width: 1055px;
    margin: 0 auto;

    .pay_methods_container {
      .right {
        height: 65px;
        position: relative;

        .moc-checkbox.content {
          position: absolute;
          top: 11px;
          left: 0;

          div {
            display: inline-block;
            padding: 5px 25px;
            border: 1px solid #e9e9e6;
            margin-left: 15px;
            position: relative;
            top: 3px;
            color: #666;
          }

          span {
            color: #666;
            position: relative;
            top: 8px;
            margin-left: 15px;
            
            a {
              color: #ee7448;
              text-decoration: underline;
            }
          }
        }
      }
    }

    .to_pay_btn {
      padding: 34px 0 0 0;
      text-align: right;

      button {
        width: 146px;
        height: 48px;
        color: #fff;
        background: #d74548;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
</style>

<script>
import {
  RepaymentDetails,
  PayMethods
} from '../components'

export default {
  data () {
    return {
      payMethodsList: [
        {title: '支付宝', name: 'aLiPay'},
        {title: '微信支付', name: 'wxPay'},
        {title: '网银支付', name: 'bankPay'},
        {title: '一键支付', name: 'onekeyPay'}
      ]
    }
  },

  components: {
    RepaymentDetails,
    PayMethods
  }
}
</script>