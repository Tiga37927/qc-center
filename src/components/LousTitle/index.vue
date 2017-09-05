<template>
  <div class="lous_title_container">
    <h3 class="font16">近七日待还</h3>
    <div class="amount_to_pay_money clearfix">
      <div class="left fl font40">
        <b>2325.00</b>
      </div>
      <button class="fr font16">
        立即还款
      </button>
    </div>
    <div class="lous_title_progress">
      <p></p>
    </div>
    <div class="total_to_pay color_393a">
      <em class="font14">全部待还：</em>
      500.00
    </div>
  </div>
</template>

<style lang="less">
  .lous_title_container{

    h3 {
      color: #030000;
      margin-bottom: 26px;
    }

    .amount_to_pay_money {
      width: 376px;
      margin-bottom: 5px;

      .fr {
        width: 88px;
        height: 32px;
        background: #d7181a;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        position: relative;
        top: 10px;
      }

      .fl {
        color: #ee7448;
      }
    }

    .lous_title_progress {
      width: 376px;
      height: 9px;
      background: #b5b5b5;

      p {
        width: 50%;
        height: 100%;
        background: #d71918;
      }
    }

    .total_to_pay{
      font-size: 18px;
      margin-top: 20px;
    }
  }
</style>