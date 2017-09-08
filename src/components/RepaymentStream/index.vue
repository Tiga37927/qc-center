<template>
  <div class="repayment_stream_container bg_fff" v-if="show === 2">
    <div class="lous_bill_tab">
      <table>
        <tr>
          <th v-for="$index in 4">{{ '还款流水' + $index }}</th>
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
</style>

<script>
import NoBill from '../NoBill'

export default {
  props: {
    show: {
      type: Number
    }
  },

  data () {
    return {
      noData: '暂无还款记录'
    }
  },

  components: {
    NoBill
  }
}
</script>