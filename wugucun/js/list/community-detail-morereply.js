$(function () {
	//商品评论图片-点击放大展示
   	$('.comment-list .comment-imgs ').EnlargeImage();
// 	回复评论
	$underpup({
		btn: $(".z-reply-btn,.z-community-foot"),
		box:$("#z-community-reply")
	});
//	举报弹窗
	layui.use('layer', function(){
		var layer = layui.layer;
		$(".z-reply-btn").click(function () {
			$("#z-replyreport-mask").removeClass('z-table');
			toggleBody(0)  //在跳出弹窗的时候
		})
		$(".z-report-btn").click(function () {
			$("#z-replyreport-mask").removeClass('z-table');
			toggleBody(0)  //在跳出弹窗的时候
			layer.msg('<div class="z-report-success"><img src="images/report-success.png" alt="" class="fill-img"></div>'+'举报成功');
		})
	});
	// 	回复举报弹窗
	function toggleBody(isPin){
	    if(isPin){
	        document.body.style.height = '100vh'
	        document.body.style['overflow-y'] = 'hidden'
	    }else{
	        document.body.style.height = 'unset'
	        document.body.style['overflow-y'] = 'auto'
	    }
	}
	$(".my-post-cont").click(function () {
		$("#z-replyreport-mask").addClass("z-table");
		toggleBody(1)  //在跳出弹窗的时候
	})
	//			点击背景阴影框-取消弹窗
	$(".mask-box").click(function(){
		$("#z-replyreport-mask").removeClass('z-table');
		toggleBody(0)  //在跳出弹窗的时候
	})
//			阻止冒泡
	//如果提供了事件对象，则这是一个非IE浏览器
	$(".z-mask-con").click(function (e) {
		if ( e && e.stopPropagation ){
		　　// 因此它支持W3C的stopPropagation()方法
			e.stopPropagation();
		}else{
		　　//否则，我们需要使用IE的方式来取消事件冒泡
		　　
			window.event.cancelBubble = true;
			return false;
		}
	})
	
})