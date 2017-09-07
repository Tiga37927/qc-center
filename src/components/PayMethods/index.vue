<template>
  <div class="pay_methods_container repayment_details_container pay_border_b clearfix">
    <div class="fl font16 left">
      <b>支付平台</b>
    </div>
    <div class="fl right">
      <ul>
        <li class="moc-checkbox" v-for="(item, index) in payMethodsList">
          <label>
            <input type="checkbox" name="payMethods" />
            <i></i>
            <div :class="[item.name]"></div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
  .pay_methods_container {
    .left {
      padding: 20px 5px;
    }

    .right {
      ul {
        font-size: 0;

        li {
          display: inline-block;
          padding-right: 50px;
          font-size: 14px;
          line-height: 65px;
          position: relative;
          
          div {
            display: inline-block;
            width: 102px;
            height: 30px;
            background: url('../../assets/images/lous-pos.png') no-repeat;
            vertical-align: middle;
          }

          .aLiPay {
            background-position: 0 -479px;
          }

          .wxPay {
            background-position: -108px -520px;
            margin-left: 18px;
            margin-right: 10px;
          }

          .bankPay {
            background-position: -108px -479px;
            position: relative;
            top: -2px;
            margin-left: 5px;
          }

          .onekeyPay {
            background-position: 0 -520px;
            position: relative;
            top: 3px;
            left: -2px;
          }
        }
      }
      
    }
  }
</style>

<script>
export default {
  props: {
    payMethodsList: {
      type: Array,
      default: []
    }
  }
}
</script>