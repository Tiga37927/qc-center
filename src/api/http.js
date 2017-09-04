import axios from 'axios'
import qs from 'qs'
import showLoading from '../components/Loading'
import showTips from '../components/ShowTips'

export default function fetch (opt) {
	var http = null;

	//	配置loading
	if (opt.isNeedLoading) {
		showLoading(true)
	}
	
	if (opt.type.toLocaleLowerCase() === 'get') {
		http = axios({
			method: 'get',
			url: opt.url,
			params: opt.data
		})
	}
	else {
		http = axios({
			method: 'post',
			url: opt.url,
			data: qs.stringify(opt.data)
		})
	}

	return new Promise(function (resolve, reject) {
		http.then(function (res) {
			showLoading(false)
			if (res.data.success) {
				resolve(res.data)
			}
			else {
				reject(res.data)
				showTips(opt.errMsg)
			}
		})
		.catch(function (err) {
			showLoading(false)
			reject(err)
			showTips(opt.errMsg)
		})
	})
}