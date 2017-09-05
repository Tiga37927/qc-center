import axios from 'axios'
import showLoading from '../components/Loading'
import showTips from '../components/ShowTips'

export default function (opt) {
  // 配置loading
  if (opt.isLoading) {
    showLoading(true)
  }
  let http = axios({
    method: opt.method.toLocaleLowerCase() || 'get',
    url: opt.url,
    data: opt.data
  }).then(function (response) {
    let result = response.data
    showLoading(false)
    if (result.success && result.success === true) {
      opt.success(result.data)
    } else if (result.success && result.success === true) {
      opt.fail(result.data)
      showTips(result.msg)
    }
  }).catch(function (err) {
    showLoading(false)
    opt.fail(err)
    showTips('请求异常，请联系客服人员处理！', 3000)
  })
  return http
}
