Page({

    /**
     * 页面的初始数据
     */
    data: {
      mobile: "",
      show: false,
      getdata: {}
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    },
    /**
     * 获取用户输入 
     */
    mobile(e) {
      this.setData({
        mobile: e.detail.value
      })
    },
    /**
     *用户点击获取数据事件 
     */
    goSearch(e){
      var that = this;
      wx.showLoading({
        title: '加载中',
      });
      var mobile = this.data.mobile;
      var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (reg.test(mobile) === false) {
        wx.showToast({
          title: '输入不合法',
          icon: 'none',
          image: 'cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/error.png',
          duration: 2000
        })
        return false;
      }
      // 请求数据
      wx.request({
        url: "https://apis.juhe.cn/mobile/get?phone=" + mobile + "&key=051ebd964a567debd0b960cb10e1e7d8",
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          wx.hideLoading();
          if (res.data.resultcode == "200") {
            that.setData({
              show: true,
              getdata: res.data.result
            })
          } else {
            wx.showModal({
              title: '提示',
              content: "查询失败",
              success(res) {
                that.setData({
                  show: false
                })
              }
            })
          }
        }
      })
    }
  })