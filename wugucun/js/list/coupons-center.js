$(function () {
//	优惠券
	$('.next-turn').on('click',function(){
		$(this).parents('.coupon-on').toggleClass('show');
	})
	layui.use('layer', function(){
		var layer = layui.layer;
		$('.use-go').click(function(){
			var $parent = $(this).parents('li');
			if ($parent.hasClass('over')) {
				$("#z-coupons-mask").addClass("z-table");
			}else if ($parent.hasClass('off')) {
				layer.msg('您已领取了');
			} else {
				$parent.addClass('off');
				layer.msg('领取成功')
				$(this).text('已领取')
			}
		})
//		关闭弹窗
		$(".z-close-mask").click(function () {
			$("#z-coupons-mask").removeClass("z-table");
		})
		$(".z-iknow").click(function () {
			$("#z-coupons-mask").removeClass("z-table");
		})
	})
})
