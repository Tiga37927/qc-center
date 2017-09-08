<template>
  <div class="com_bill_container" v-if="!show">
    <ul>
      <li v-for="$index in 3">
        <span class="icon">本月账单</span>
        <div class="main">
          <div class="content">
            <div class="total_info">
              <div class="top">
                <dl>
                  <dt class="font14">
                    账单总额：<em class="font20">919.11</em>
                  </dt>
                  <dd>
                    记账周期：2017-02-05至2017-05-05
                  </dd>
                  <dd>
                    出账日期：2017-05-09
                  </dd>
                </dl>
              </div>

              <div class="bottom">
                <p>
                  剩余待还：920.00
                </p>
                <p>
                  最后还款日：2017-05-05
                </p>
                <img src="../../assets/images/paid-off.png" alt="已还清">
              </div>

              <a href="javascript:;" class="font14 view_detail">查看消费明细</a>
              <a class="put font14 hide" href="javascript:;">收起</a>
            </div>

            <!-- 表格 -->
            <lous-bill-tab
            :tab-list="tabList"
            :tab-title="tabTitle"
            ></lous-bill-tab>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
  .com_bill_container {
    li {
      padding-left: 42px;
      position: relative;

      span {
        display: block;
        width: 85px;
        height: 22px;
        background: url(../../assets/images/bill-icon.png) no-repeat center center;
        line-height: 22px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
      }

      .main {
        padding: 0 0 20px 48px;
        border-left: 1px solid #eb7447;
        position: relative;

        &:before {
          display: block;
          content: "";
          width: 4px;
          height: 4px;
          background: #fef5e9;
          position: absolute;
          top: 22px;
          left: -2px;
        }

        &:after {
          display: block;
          content: "";
          width: 4px;
          height: 4px;
          background: #fef5e9;
          position: absolute;
          bottom: 0;
          left: -2px;
        }

        .content {
          width: 100%;
          min-height: 100px;
          background: #fff;

          .total_info {
            padding: 22px 25px 36px 25px;

            .top {
              margin-bottom: 20px;
              padding-left: 20px;
              dt {
                color: #323232;
              }

              dd {
                font-size: 12px;
                color: #a5a5a5;
                line-height: 25px;
              }
            }

            .bottom {
              margin-bottom: 12px;
              padding: 15px 20px;
              border: 1px solid #eb7447;
              position: relative;

              p:last-child {
                margin-top: 10px;
              }

              img {
                display: block;
                width: 132px;
                height: 74px;
                position: absolute;
                right: 106px;
                bottom: -23px;
              }
            }

            a.view_detail {
              color: #DF3735;
              text-decoration: underline;
            }

            a.put {
              color: #929090;
            }
          }
        }
      }
    }
  }
  .com_bill_container li:last-child{
    .main {
      border-left: none;
    }
  }
</style>

<script>
import LousBillTab from '../LousBillTab'
import TestJson from '../TestTab.json'

export default {
  props: {
    show: {
      type: Number
    }
  },

  data () {
    return {
      tabTitle: ['订单名称', '订单编号', '订单时间', '订单金额'],
      tabList: TestJson.detailsInfo
    }
  },

  components: {
    LousBillTab
  }
}
</script>