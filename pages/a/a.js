Page({
data:{
  audioPoster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN.jpg?max_age=2592000',

  audioName: '简单爱',

  audioAuthor: '周杰伦',

  audioSrc: 'http://10.3.200.202/cache/2/05/amobile.music.tc.qq.com/97b4eab2367b6ad22b755c2b58197135/C4000009BCJK1nRaad.m4a?guid=4412704198&vkey=4966C53D94374C4ABE66F99D70C328779113E20B8AAC4BA6B8FF2175BDD9C18FE19FE816721859E1EC7A393B8AAB39C8692EC0A98DA120CA&uin=0&fromtag=66',
},
onTapJump: function (event) {
    wx.navigateBack({
      url: '/pages/e/e',
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