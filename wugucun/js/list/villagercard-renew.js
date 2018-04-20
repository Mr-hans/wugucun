$(function () {
	//村民证选项卡
   	$('.detail-and-comment .title .flex1').click(function(){
   		var index = $(this).index();
   		$(this).addClass('on').siblings().removeClass('on');
   		$('.detail-and-comment .con-box .item').eq(index).show().siblings().hide();
   		$('.under-line').css({
   			"transform":"translateX("+ index*100 +"%)",
   			"-webkit-transform":"translateX("+ index*100 +"%)",
   			"-moz-transform":"translateX("+ index*100 +"%)"
   		})
   	});
})
