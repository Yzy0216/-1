# # 乘风天气小程序
## 扫码体验
![image](https://user-images.githubusercontent.com/95600921/173215239-4eebb631-39ba-4f34-9116-83ee4d2546ec.png)



- 这是一款开箱即用的天气工具箱小程序，采用了和风天气的天气预测接口，具有以下功能：
##  首页
1. 当前位置的天气报道
2. 当天各项天气数据指数
3. 未来24小时逐时天气
4. 未来七天天气预报
5. 当天空气质量指数
6. 一些生活建议
## 工具
1. 手机归属地查询
2. 历史今天
3. 日历
4. 快递查询
5. 弹幕
6. 计算身材

（后续还会继续有更多功能的更新上线）。在我的界面，采用云开发让用户获取头像和昵称，实现登录和退出，后期还会继续用云开发完善用户的信息，并且统计用户量。


#### 数据接口
1. 获取天气位置ID：https://geoapi.qweather.com/v2/city/lookup?location=beij&key=你的KEY
2. 获取实时天气：https://devapi.qweather.com/v7/weather/now?location=101010100&key=你的KEY
3. 获取天气生活建议：https://devapi.qweather.com/v7/indices/1d?type=1,2&location=101010100&key=你的KEY
4.其他数据可以通过和风天气的官网获取：https://dev.qweather.com/docs/api/

#### 请求数据演示
![image](https://user-images.githubusercontent.com/95600921/173215278-f2ff4b45-5f23-4147-b84c-5a31c006f319.png)

#### 云开发（文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html）

1.  设置云函数
在创建项目是，可以直接选择云开发，但是这样会添加很多额外，我们不需要的东西。所以可以项目的配置文件project.config.json里面添加cloudfunctionRoot，这个项目的配置路径，就是我们的小程序中的云函数所对应的路径。
{
	"miniprogramRoot": "miniprogram/",
	"cloudfunctionRoot": "cloudfunctions/",
	...
}比如说，我们创建一个 cloud 目录来存储云函数，我们就需要配置 cloudfunctionRoot 的值为 cloud.如果你看到小程序开发者工具中你对应的目录中出现了一个云朵的标志，则说明你的云函数目录配置成功了。
![输入图片说明](img/cupbz.png)

2.  初始化云环境
我们需要在小程序的 app.js 中的 onLaunch 生命周期中初始化云开发，具体代码如下
App({
	onLaunch(){
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env: '你的环境ID',
        traceUser: true,
      })
    }
  },
})



