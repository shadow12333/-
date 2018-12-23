Page({
  onTapJumpDay:function(event){
    wx.navigateTo({
      url: '/pages/about/about',
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    });
  },
})