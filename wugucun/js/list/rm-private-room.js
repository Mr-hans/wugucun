$(function () {
	//分式导航
	new Swiper('.z-hostel-detail-banner', {
		autoplay: 5000,//5s自动轮播
		loop: true, //循环轮播
        pagination: '.z-hostel-detail-banner .swiper-pagination',
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
//	收藏变色
	layui.use('layer', function(){
	  	var layer = layui.layer;
	  	$(".head-collection").click(function () {
			if ($(this).hasClass("on")) {
				$(this).removeClass("on").find('p').text('收藏');
				layer.msg('已取消收藏');
			} else{
				$(this).addClass("on").find('p').text('已收藏');
				layer.msg('收藏成功');
			}
		})
	  
	}); 
	//分享弹窗
	$underpup({
		btn: $(".head-share"),
		box:$("#z-share-box")
	});
// 	预定弹窗
	$(".z-reserve-meal-btn").click(function () {
		$("#z-privateroom-mask").addClass("z-table");
	})
	//商品详情-组图点击放大展示
   	$('.z-introduce-imgs').EnlargeImage()
})
