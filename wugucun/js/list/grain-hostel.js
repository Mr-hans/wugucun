$(function () {
	//轮播
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
    $(".z-collection-btn").click(function () {
    	$(this).hasClass("on")?$(this).removeClass("on"):$(this).addClass("on");
    })
})
