const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  login(){
    var that=this;
    wx.getUserProfile({
      desc: '用于信息完善',
      success(res){
          var user=res.userInfo
          //全局信息
          app.globalData.userInfo=user
     
          that.setData({
              userInfo:user
          })
          //检查之前是否已成功授权登录
          wx.cloud.database().collection('user').where({
            _openid:app.globalData.openid
          }).get({
            success(res){
              if(res.data.length==0){
                //添加到数据库
                wx.cloud.database().collection('user').add({
                  data:{
                    num:Date.now(),
                      avatarUrl:user.avatarUrl,
                      nickName:user.nickName
                  },
                  success(res){
                      wx.showToast({
                          title:'登录成功'
                      
                      })
                  }
              })
              }
            }
          })
       
      }
    })
},
loginOut(){
  wx.showModal({
    title: '退出提示',
    content: '确定要退出登录吗？',
    success: res=>{
      if (res.confirm) {
        app.globalData.userInfo=null
        this.setData({
            userInfo:null      
        })
      } else if (res.cancel) {
        console.log('取消')
      }
    }
  })

 
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})