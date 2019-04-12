// pages/audio/index.js
const innerAudioContext = wx.createInnerAudioContext()
const common = require("../index/common.js")
Page({
  onReady(e)
  {
    //使用wx.createAudioContext获取audio上下文context
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    poster:'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name:'此时此刻',
    author:'许巍',
    src:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    items:[
      {name:'USA',value:'美国'},
      {name: 'CHN',value:'中国',checked:'true'},
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' }
    ]
  },
  checkboxChange(e)
  {
    console.log('checkbox发生change事件，携带value值为:',e.detail.value)
  },
  audioPlay(){
    innerAudioContext.play()
  },
  audioPause(){
    innerAudioContext.pause()
  },
  audio14(){
    innerAudioContext.seek(20)
  },
  audioStart(){
    innerAudioContext.seek(0)
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
  // helloMINA(){
  //   console.log("正执行到sayHello")
  //   common.sayHello('MINA')
  // },
  // goodbyeMINA(){
  //   console.log("正执行到sayGoodbye")
  //   common.sayGoodbye('MINA')
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    innerAudioContext.autoplay = false
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    innerAudioContext.loop = true
    console.log("到当前页面的路径 ： " + this.route)
    common.sayHello1('MINA')
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
  onShareAppMessage: function (res) {
    if(res.from == 'button')
    {
      //来自页面内转发按钮
      console.log(res.target)
    }
    else{
      console.log("来自右上角转发菜单")
    }
    return {
      title:'自定义转发标题',
      path:'/pages/audio/audio?id=123', //？id=123是路径带的参数
      success:(res)=>{
        console.log("转发成功",res);        
      },
      fail:(res)=>{
        console.log("转发失败",res)
      }
    }

  }
})