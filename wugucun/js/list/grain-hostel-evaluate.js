$(function () {
	//评价分类
	$(".z-evaluate-class li").click(function () {
		$(this).addClass("on").siblings().removeClass("on");
	})
	//分享弹窗
	$underpup({
		btn: $(".head-share"),
		box:$("#z-share-box")
	});
	//商品评论图片-点击放大展示
   	$('.comment-list .comment-imgs ').EnlargeImage();
})