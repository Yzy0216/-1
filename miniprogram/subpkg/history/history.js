Page({
    /**
     * 页面的初始数据
     */
    data: {
      emptyType: false,
      getdata: []
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getData()
    },
  
    getData() {
      wx.showLoading({
        title: '加载中',
      });
      let that = this
      var date = new Date();
      let month = date.getMonth() + 1
      let day = date.getDate()
      wx.request({
        url:"https://v.juhe.cn/todayOnhistory/queryEvent.php?key=0550d5a84a90a81fad7c52b9303dbdd3&date="+month+'/'+day,
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            // console.log(res)
          wx.hideLoading();
          if (res.data.reason == "success") {
            that.setData({
              emptyType: true,
              getdata: res.data.result
            })
           
          } 
          else if(res.data.error_code==10012){
            wx.showToast({
              title: '明天再来哦',
              icon:'error'

            })
          }
          
          else {
            that.setData({
              emptyType: false
            })
          }
        }
      })
      
    },
    // 跳转详情页
    godetails(e) {
      console.log(e.currentTarget.dataset.id)
      wx.navigateTo({
        url: '../../pages/details?id=' + e.currentTarget.dataset.id,
      })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })