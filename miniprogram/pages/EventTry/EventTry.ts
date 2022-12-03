// pages/EventTry/EventTry.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
      count: 0,
      msg: 'hello，this is my first try,'
  },
  //定义按钮事件处理函数
  btnTapHandler(event: any){
    console.log(event)
  },

 //+1按钮的点击事件处理函数
  CountChange(){
    this.setData({
      count:this.data.count + 1
    })
  },
//input输入框的事件处理函数
  inputHandler(e:any){
    //console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})