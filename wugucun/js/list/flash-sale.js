$(function () {
	//	导航横向滚动
	var mySwiper = new Swiper ('.swiper-container', {
	    freeMode : true,
	    slidesPerView : 'auto'
	});
//	横向滚动导航点击事件
	$('.discount-inner').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.discount-inner').find(".z-fstime-box").css("border-right","1px solid #EDEDED");
		$('.discount-inner.on').find(".z-fstime-box").css("border","none");
		$('.discount-inner.on').prev().find(".z-fstime-box").css("border","none");
	})
	$('.discount-inner').find(".z-fstime-box").css("border-right","1px solid #EDEDED");
	$('.discount-inner.on').find(".z-fstime-box").css("border","none");
	$('.discount-inner.on').prev().find(".z-fstime-box").css("border","none");
})
