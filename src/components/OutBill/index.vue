<template>
  <div class="out_bill_container">
    <div class="top">
      <h3 class="font14">
        09月累计待还：
        <em class="font20">6243.33</em>
      </h3>
      <p>
        记账周期：2017-08-24 至 2017-09-23
      </p>
      <p>
        出账日期：2017-09-24
      </p>
    </div>

    <div class="show_tab lous_bill_tab">
      <table>
        <tr>
          <th v-for="$index in 4">{{ '未出账单' + $index }}</th>
        </tr>

        <tr v-for="$index in 4">
          <td class="td1">
            <div class="overfl-oneline">{{'商品名称'}}</div>
          </td>
          <td>{{31232312321}}</td>
          <td>{{'2017-05-08'}}</td>
          <td>{{645}}</td>
        </tr>
      </table>
    </div>

    <!-- 没有数据显示 -->
    <no-bill class="hide" :no-data="noData"></no-bill>
  </div>
</template>

<style lang="less">
  .out_bill_container {
    background: #fff;

    .top {
      padding: 20px;
      border: 1px solid  #d8dce5;
      line-height: 25px;

      h3 {
        color: #323232;
      }
      p {
        color: #a5a5a5;
      }
    }
  }
</style>

<script>
import NoBill from '../NoBill'

export default {
  data () {
    return {
      noData: '本月暂无账单'
    }
  },
  components: {
    NoBill
  }
}
</script>