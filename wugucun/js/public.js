
$(function(){

	$('.next-turn').on('click',function(){
			$(this).parents('.coupon-on').toggleClass('show');

	})



	/*	领券中心js
 * 	领取优惠券
 *  已领取优惠券
 * */

	//加载layer
	layui.use('layer', function(){
		var layer = layui.layer;
		$('.use-go').click(function(){
			var $parent = $(this).parents('li');
			if ($parent.hasClass('off')) {
				layer.msg('该优惠卷已失效');
			} else {
				$parent.addClass('off');
				layer.msg('使用成功')
				$(this).text('已失效')
			}
		})
	})
	
	// 领券中心js
	// 
	

	//详情、评论选项卡
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