var app = getApp()
Page({
  data: {
    text: 'This is page data.',
    contents: {},
  },
  onTapJumpWords: function (event) {
    wx.navigateBack({
      url: '/pages/words/words',
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
  onLoad: function (option) {
    var self = this
    wx.request({
      url: 'https://nmsl.cf/tuwei/tuwei.php',
      data: {},
      method: 'GET',
      success: function (res) {
        // success
        self.setData({
          list: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
})