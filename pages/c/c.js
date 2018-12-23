Page({

  data: {
    audioPoster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000QZU2L2wfD16.jpg?max_age=2592000',

    audioName: 'Just the way you are',

    audioAuthor: 'Bruno Mars',

    audioSrc: 'http://isure.stream.qqmusic.qq.com/C40000371sag1X3D64.m4a?guid=4412704198&vkey=3A80E457956CAD02F1DDD39BA30A752AFDF1C0BA4E444255C001E914FA7CA1479C3808D29151152B9451AD986EB933ABF207C3ACE22F96E5&uin=0&fromtag=66'
},
onTapJump: function (event) {
    wx.navigateBack({
      url: '/pages/a/a',
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
})