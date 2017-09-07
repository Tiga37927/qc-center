import * as types from '../mutation-types'
import $fetch from '../../api/request'

const state = {
  lousBaseInfo: {}      //  白条基础信息
}

const getters = {
  //  白条基础信息
  getLousBaseInfo: state => state.lousBaseInfo
}

const actions = {
  //  白条基础信息
  lousBaseInfo ({ commit, state }, opt) {
    $fetch(opt).then((res) => {
      commit(types.LOUS_BASE_INFO, res)
    })
  }
}

const mutations = {
  //  白条基础信息
  [types.LOUS_BASE_INFO] (state, data) {
    state.lousBaseInfo = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
