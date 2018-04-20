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
//	点赞
	$(".z-community-good").click(function () {
		$(this).toggleClass("on");
	})
	//分享弹窗
	$underpup({
		btn: $(".z-community-share"),
		box:$("#z-share-box")
	});
	//商品评论图片-点击放大展示
   	$('.comment-list .comment-imgs ').EnlargeImage();
})