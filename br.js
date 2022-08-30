
$(function(){

  $('.close').click(function(){
    $('.top_banner').fadeOut()
  })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    $('.menu_list>li').click(function(){

        $('.menu_list>li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        console.log(idx)
        $('.list').removeClass('on')
        $('.list').eq(idx).addClass('on')
    })
})
