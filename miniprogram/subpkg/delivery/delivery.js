
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      searchInfo: {
        no: '',
      },
      TimeID:-1,
      inputVal: ''
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
  
    },
    getDlevery(){
        wx.request({
          url: 'https://wuliu.market.alicloudapi.com/kdi',
          data:{},
          method:'GET',
          success:res=>{

          }
        })
    },
    // 输入框内容

    inputValue(e){
     
      clearTimeout()
      this.TimeID=setTimeout(()=>{
        this.setData({
            inputVal: e.detail.value
          })
      },1000)
    },
    // 查询 包裹
    getBox() {
      //status 0: 正常查询 201: 快递单号错误 203: 快递公司不存在 204: 快递公司识别失败 
      //205: 没有信息 207: 该单号被限制，错误单号 * /
      wx.showLoading({ title: '加载中' })
      searchBox({"no":this.data.inputVal}).then(data=>{
        wx.hideLoading()
        switch (data.data.status){
          case "0":
            wx.showToast({ title: '查询成功', icon:'success', image: '../../assets/images/success.png', duration: 3000,success:function(){
              wx.navigateTo({ url: '/subpkg/detail/detail' })
            } })
            var app = getApp()
            app.globalData.searchData = data.data;
            break;
          case "201":
            wx.showToast({ title: '快递单号错误', image: '../../assets/images/error.png', duration: 3000, })
            break;
          case "203":
            wx.showToast({ title: '快递公司不存在', image: '../../assets/images/error.png', duration: 3000, })
            break;
          case "204":
            wx.showToast({ title: '快递公司识别失败', image: '../../assets/images/error.png', duration: 3000, })
            break;
          case "205":
            wx.showToast({ title: '没有信息', image: '../../assets/images/error.png', duration: 3000, })
            break;
          case "207":
            wx.showToast({ title: '该单号被限制，错误单号', image: '../../assets/images/error.png', duration: 3000, })
            break;
        }
      })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
  
    }
  })