// pages/contents/contents.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            {img: 'cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/ad/ad1.jpg'},
          {img: 'cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/ad/ad2.jpg'},
            {img: 'cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/ad/ad3.jpg',}
          ],
          server: [
        
            {
              img: "cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/toolIcon/codePars.png",
              openpath: "../../subpkg/IP/IP",
              text: "手机归属地"
            },
            {
              img: "cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/toolIcon/historyToday.png",
              openpath: "../../subpkg/history/history",
              text: "历史今天"
            },
            {
              img: "cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/toolIcon/rili.png",
              openpath: "../../subpkg/calendar/calendar",
              text: "日历"
            },
            {
              img: "cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/toolIcon/delivery.png",
              openpath: "../../subpkg/delivery/delivery",
              text: "快递查询"
            },
            {
              img: "cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/toolIcon/dangmu.png",
              openpath: "../../subpkg/dangmu/dangmu",
              text: "弹幕"
            },
            {
              img:'cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/toolIcon/figure.png',
              openpath:"../../subpkg/figure/figure",
              text:'计算身材'
            }
          ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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