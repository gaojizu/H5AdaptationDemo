
export default {
  formatMobile: function (mobile) {
    return mobile.substr(0, 3) + '****' + mobile.substr(7, 11);
  }
}
// 表单序列化
export const serialize = data => {
  let list = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}

// 获取search里指定参数
export const getSearchParams = (params, url = window.location.href) => {
  var res = new RegExp("(?:&|/?)" + params + "=([^&$]+)").exec(url);
  return res ? res[1] : '';
}

// 判断是否为微信环境
export const isWeChatEnv = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  }
}

// 判断是否为ios环境
export const isIosEnv = () => {
  const ua = navigator.userAgent
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

// 倒计时处理
export function getDuration(second) {
  let hours = 24 * Math.floor(second / 86400) + Math.floor((second % 86400) / 3600)
  let minutes = Math.floor(((second % 86400) % 3600) / 60)
  let seconds = Math.floor(((second % 86400) % 3600) % 60)
  return [0, hours, minutes, seconds];
}

// 埋点参数arise_time设置
export function getAriseTime() {
  const nowDate = new Date()
  const h = nowDate.getHours()
  const m = nowDate.getMinutes()
  const s = nowDate.getSeconds()
  const completeDate = (value) => {
    return value < 10 ? '0' + value : value
  }
  const getNowFormatDay = (nowDate) => {
    let char = '-';
    if (nowDate == null) {
      nowDate = new Date()
    }
    let day = nowDate.getDate()
    let month = nowDate.getMonth() + 1 //注意月份需要+1
    let year = nowDate.getFullYear()
    //补全0，并拼接
    return (
      year + char + completeDate(month) + char + completeDate(day)
    )
  } 
  return getNowFormatDay(nowDate) + ' ' + completeDate(h) + ':' + completeDate(m) + ':' + completeDate(s)
}


/* 微信环境 */
export function is_weixin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

//跳转微信授权页面
export const goToOpenWeixinLink = (redirect_uri)=>{
  redirect_uri = encodeURIComponent(redirect_uri)
  let APPID =  process.env.VUE_APP_WECHAT_APPID
  window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1&uin=&key=`)
}