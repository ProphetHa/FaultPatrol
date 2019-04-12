// pages/video/index.js
function getRandomColor(){
  const rgb = []
  for(let i=0;i<3;i++){
    let color = Math.floor(Math.random()*256).toString(16)
    color = color.length == 1?'0'+color:color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  onReady(res){
    this.videoContext = wx.createVideoContext('myVideo', this)
  },
  inputValue:'',
  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    danmuList:[
      {
        text:'第1s出现的弹幕',
        color:'#ff0000',
        time:1
      },
      {
        text:'第3s出现的弹幕',
        color:'#ff00ff',
        time:3
      }]
  },
  bindInputBlur(e){
    this.inputValue = e.detail.value
  },
  // 获取视频按钮响应函数
  bindButtonTap(){
    const that = this
    wx.chooseVideo({
      // album 从相册选择视频，camera 使用相机拍摄
      sourceType:['album','camera'],
      // 拍摄视频最长拍摄时间，单位秒，最长60秒
      maxDuration:60,
      camera:['front','back'],
      success(res){
        that.setData({
          // 选定视频的临时文件路径
          src:res.tempFilePath
        })
      }

    })
  },
  // 发送弹幕
  bindSendDanmu(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:getRandomColor()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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