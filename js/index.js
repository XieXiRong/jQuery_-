
$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    effect : 'fade',
    loop: true,
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      clickableClass : 'my-pagination-clickable',
    },
  })
  
  
  // let index_now
  // $('.nav_ul_list a').hover(function () {
  //   $('.nav_right_show').show()
  //   $(this).find('img').first().css('opacity','0')
  //   $(this).find('.left_icon').css('display','block')
  //   index_now = $('.nav_ul_list a').index($(this))
  // },function () {
  //   $('.nav_right_show').hide()
  //   $(this).find('img').first().css('opacity','1')
  //   $(this).find('.left_icon').css('display','none')
  // })
  // $('.nav_right_show').hover(function () {
  //   $('.nav_right_show').show()
  //   $('.nav_ul_list a').eq(index_now).find('img').first().css('opacity','0')
  //   $('.nav_ul_list a').eq(index_now).find('.left_icon').css('display','block')
  // },function () {
  //   $('.nav_right_show').hide()
  //   $('.nav_ul_list a').eq(index_now).find('img').first().css('opacity','1')
  //   $('.nav_ul_list a').eq(index_now).find('.left_icon').css('display','none')
  // })

})



