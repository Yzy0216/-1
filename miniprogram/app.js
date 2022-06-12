// app.js
App({
 
  onLaunch() {
  
    wx.cloud.init({
      env:'yangzy-6gxxc9b7470d6b7c'
    })
       //获取用户openid
       var that = this;
       wx.cloud.callFunction({
         name:'login',
         success(res) {
           // console.log(res)
           that.globalData.openid = res.result.openid
           //查找数据库用户表里面是否有这个用户记录
           wx.cloud.database().collection('user').where({
             _openid: res.result.openid
           }).get({
             success(result) {
               // console.log(result)
               that.globalData.userInfo = result.data[0]
             }
           })
         }
       })
  },
  globalData: {
    userInfo: null
  }
})
