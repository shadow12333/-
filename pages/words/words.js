var app = getApp()
Page({
  data: {
    text: 'This is page data.',
  },
  onTapJumpDay: function (event) {
    wx.navigateTo({
      url: '../d/d',
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onLoad: function (option) {
    var self = this
    wx.request({
      url: 'https://www.apiopen.top/meituApi?page=1',
      data: {
        url:""
      },
      method: 'GET',
      success: function (res) {
        // success
        self.setData({
          images: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})