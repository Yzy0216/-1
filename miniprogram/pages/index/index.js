// pages/index/index.js
Page({
  data: {
    region: [],
    address:[],
    now:{
      tmp:0,
      cond_txt:'未知',
      cond_code:'999',
    }, 
    timeWeather:{},
    airNow:{},
    forecast:{},
    imageUrl:'cloud://cloud1-3goc951d16df6f69.636c-cloud1-3goc951d16df6f69-1311310803/images/cloud.jpg',   
    locationID:[],
    lifeadvice:{}
  },

  //获取和风天气位置ID
  getLocationID:function(){
    var that = this;
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      method:'GET',
      data:{
        location:that.data.region[2],
        key: '88d376785df04e5ea8f883759b191665'
      },
      success:(res)=>{
        that.setData({
          locationID:res.data.location[0].id
        })     
        this.getWeather()
        this.getWeatherInfo()
    this.getLiftIndex()
    this.getAirnow()
    this.gettimeWeather()
      },
    })

    
  },
  //预测未来七天的天气数据
    //通过getLocationID（）得到的城市id，获取和风天气接口信息
    getWeatherInfo: function () {     
      var that = this;
      wx.request({    
        url:'https://devapi.qweather.com/v7/weather/7d?',
      data:{   
      location:that.data.locationID,      
       key: '88d376785df04e5ea8f883759b191665'
     },
        method: 'GET',
        success: function (res) {
        that.setData({
          forecast:res.data.daily
        })
    console.log(res.data)
        }     
      })
    },
    //获取24小时预报
    gettimeWeather: function () {
      var that = this;
      wx.request({
        url: 'https://devapi.qweather.com/v7/weather/24h',    
        data:{
          location:that.data.locationID,
          key: '88d376785df04e5ea8f883759b191665'
        },
        success:function(res){       
          that.setData({
            timeWeather:res.data.hourly        
          })
        }
      })
    },
  /**
   * 获取实况天气数据
   */
  getWeather: function () {
    var that = this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',    
      data:{
        // location:that.data.region[1],
        location:that.data.locationID,
        key: '88d376785df04e5ea8f883759b191665'
      },
      success:function(res){       
        that.setData({now:res.data.now});
      }
    })
  },
  // 获取生活指数数据
  getLiftIndex:function(){
    var that=this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/indices/1d?',
      data:{
        type:'1,2,3,5,6,7,8,9,11,12,13,14,15,16',
        location:that.data.locationID,
        key:'88d376785df04e5ea8f883759b191665'
      },
      method:'GET',
      success:function(res){
        that.setData({
          lifeadvice:res.data.daily
        })
      }
    })
  },
  //获取空气质量的天气数据
  getAirnow(){
    var that=this;
    wx.request({
      url: 'https://devapi.qweather.com/v7/air/now?',
      data:{   
        location:that.data.locationID,
        key:'88d376785df04e5ea8f883759b191665'
      },
      method:'GET',
      success:function(res){
        that.setData({
          airNow:res.data.now
          
        })
      }

    })
  },
  showTxt(e){
    wx.showModal({
      // title:'温馨提示',
      content:e.currentTarget.dataset.name,
      showCancel:false,
      confirmText:'好哟~',
    

    })
   
  },
  // 获取当前位置
  getCityNameOFLocation() {
    var that = this;
    wx.getLocation({
      success(res){ 
        var locationString = res.latitude + "," + res.longitude;  
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1',
          method: 'GET',    
          data:{
            "key":"PLNBZ-6VLEW-564R4-OGADM-V3IAT-YUBQN",
            "location" : locationString
          },     
          success:(res)=>{
            var province=res.data.result.ad_info.province
            var city=res.data.result.ad_info.city
            var district=res.data.result.ad_info.district 
            var street=res.data.result.address_component.street_number
            var regionList=[province,city,district]  
            var addressList=[district,street]
            console.log(res.data.result.address_component)        
            that.setData({
              address:addressList,
              region: regionList        
            })
            that.getLocationID()
          },
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCityNameOFLocation();  
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
   /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function (e) {
      // this.getLocationID()
    },
  onShow: function(e){
    this.setData({
      region:this.data.region,
    })
    this.getLocationID()
  },
  //下拉刷新
  onPullDownRefresh:function(){ 
    this.getCityNameOFLocation() 
    // console.log(this.data.region)
    wx.stopPullDownRefresh()
  },

})