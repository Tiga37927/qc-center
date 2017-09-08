<template>
  <div class="lous_bill_tab">
    <table>
      <tr>
        <th :class="'td' + (index + 1)" v-for="(item, index) in tabTitle">{{ item }}</th>
      </tr>

      <tr v-for="(item, index) in tabList">
        <td class="td1">
          <div class="overfl-oneline">{{item.productName}}</div>
        </td>
        <td>{{item.orderId}}</td>
        <td>{{item.consumerDate}}</td>
        <td>{{item.orderAmount}}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="less">
  .lous_bill_tab {
    table {
      width: 100%;
      border-collapse: collapse;

      th {
        height: 34px;
        background-color: #fbfbfc;
        color: #838a96;
        font-weight: 400;
      }

      td, th {
        width: 25%;
        text-align: center;
      }

      td {
        height: 50px;
        border-bottom: 1px solid #eee;
        color: #a5a5a5;
      }

      tr:last-child td {
        border-bottom: none;
      } 

      .td1 {

        div {
          width: 246px;
          padding: 0 15px;
        }
      }

    }
  }
</style>

<script>
export default {
  props: {
    tabTitle: {
      type: Array,
      default: []
    },

    tabList: {
      type: Array,
      default: []
    }
  }
}
</script>