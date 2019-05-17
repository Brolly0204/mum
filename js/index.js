$(function() {
  // https://www.swiper.com.cn/api/properties/127.html
  // 获取当前slide索引（BUG修复）
  Swiper.prototype.getCurrent = function() {
    // console.log(this)
    var index = this.$el
      .find('.swiper-slide')
      .eq(this.activeIndex)
      .data('swiper-slide-index')
    return index
  }


  let mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换
    loop: true,
    // initialSlide: 3,
    on: {
      transitionEnd() { // this Swiper实例
        // console.log('fixed', this.getCurrent())
        // console.log('bug', this.activeIndex)
        let idx = this.getCurrent() // 0 1 2
        // console.log('当前显示slide索引', idx)
        // this.$el $('.swiper-container')
        // 当前轮播显示的 是哪个元素 就会有这个类名.swiper-slide-active
        let $slide = $(this.$el.find('.swiper-slide-active')[0])
        // 给当前slide添加动画ID名 其他slide兄弟元素 移除动画ID名

        // 如果是第三屏 复用第二屏的样式 page1
        let arr = ['2', '3']
        if (arr.includes((idx))) {
          idx = 1
        }
        $slide.attr('id', `page${idx}`).siblings('.swiper-slide').attr('id', '')
      }
    }
  })

  let $music = $('#music')
  let $bgm = $('#bgm')
  $bgm.on('click', function() {
    if ($music[0].paused) { // paused播放状态  true暂停中 false播放中
      $music[0].play()
      // $bgm.css('animationPlayState', 'running')
      // $bgm.css('webkitAnimationPlayState', 'running')
      $bgm.css({
        'animationPlayState': 'running',
        'webkitAnimationPlayState': 'running',
      })

    } else {
      $music[0].pause()
      // $bgm.css('animationPlayState', 'paused')
      // $bgm.css('webkitAnimationPlayState', 'paused')
      $bgm.css({
        'animationPlayState': 'paused',
        'webkitAnimationPlayState': 'paused',
      })
    }
  })
})
