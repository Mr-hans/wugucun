$(function(){
	// 点击回复弹出
	$('.my-post-cont').click(function(){

		$('.gender-box').removeClass('hide');
	})
	// 点击隐藏
	$('.gender-box').click(function(){
		
		$('.gender-box').addClass('hide');
	})
	//分享弹窗
	$underpup({
		btn: $(".h-share-mask"),
		box:$("#z-share-box")
	});
	//阻止冒泡
	//如果提供了事件对象，则这是一个非IE浏览器
	$(".post-cont-tab .flex1").click(function (e) {
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