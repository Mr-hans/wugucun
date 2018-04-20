$(function () {
	//分式导航
	new Swiper('.z-goods-banner', {
		autoplay: 5000,//5s自动轮播
		loop: true, //循环轮播
        pagination: '.z-goods-banner .swiper-pagination',
        paginationType: 'fraction',
        autoplayDisableOnInteraction : false//操作之后是否禁止轮播
    });
    //  头部样式
    window.addEventListener('scroll', function(e) {
		if (window.pageYOffset>10) {
			$(".head-title").removeClass("hide");
			$(".pub-head").removeClass("z-goods-detail-head");
		}else{
			$(".head-title").addClass("hide");
			$(".pub-head").addClass("z-goods-detail-head");
		}
	});
})