import * as types from '../mutation-types'
import $fetch from '../../api/request'

const state = {
  lousBaseInfo: {},      //  白条基础信息
  outBill: {},             //  未出账单
  comeBill: {}            //  已出账单
}

const getters = {
  //  白条基础信息
  getLousBaseInfo: state => state.lousBaseInfo,

  //  未出账单
  getOutBill: state => state.outBill,

  //  已出账单
  getComeBill: state => state.outBill
}

const actions = {
  //  白条基础信息
  lousBaseInfo ({ commit, state }, opt) {
    $fetch(opt).then((res) => {
      commit(types.LOUS_BASE_INFO, res)
    })
  },

  //  白条未出账单
  outBill ({ commit, state }, opt) {
    $fetch(opt).then((res) => {
      commit(types.OUT_BILL, res)
    })
  },

  //  白条已出账单
  comeBill ({ commit, state }, opt) {
    $fetch(opt).then((res) => {
      commit(types.COME_BILL, res)
    })
  }
}

const mutations = {
  //  白条基础信息
  [types.LOUS_BASE_INFO] (state, data) {
    state.lousBaseInfo = data
  },

  //  白条未出账单
  [types.OUT_BILL] (state, data) {
    state.outBill = data
  },

  //  白条已出账单
  [types.COME_BILL] (state, data) {
    state.COME_BILL = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
