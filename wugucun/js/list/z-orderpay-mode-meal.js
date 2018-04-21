$(function () {
	//切换支付方式	
	$('.paytype-list .item').click(function(){
		var $this = $(this);
		$this.find('.public-checkbox').addClass('on').attr('checked', 'checked');
		$this.siblings().find('.public-checkbox').removeClass('on').find('input').removeAttr('checked');
	});
//	支付密码弹窗
	$underpup({
		btn: $(".z-pay-sure-btn"),
		box:$("#z-paypass-box")
	});
	$(".z-go-back").click(function () {
		$("#z-paypass-box").removeClass('top');
		 document.body.style.position = 'unset';  //弹窗消失的时候
	})
	$("#payPwd").payPwd({
		max:6,
		type:"password",
		callback:function(arr) {
			alert(arr);
			window.location.href='z-orderpay-success-meal.html';
		}
	})
	
})
