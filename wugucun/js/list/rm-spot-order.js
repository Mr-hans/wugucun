$(function () {
	//切换支付方式	
	$('.z-rm-checkbox').click(function(){
		var $this = $(this);
		$this.addClass('on').attr('checked', 'checked');
		$this.siblings().removeClass('on').find('input').removeAttr('checked');
	});
//	判断信息不为空
	var rmvals=$(".z-rm-spotorder input[type='text']")
	var enptyReg=/^(\S)/;
	var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
	layui.use('layer', function(){
		var layer = layui.layer;
		$(".z-rm-spotorder-pay").click(function () {
			for (var i=0;i<rmvals.length;i++) {
				if (!enptyReg.test(rmvals.eq(i).val())) {
			  		layer.msg(rmvals.eq(i).attr('placeholder'));
			  		return false;
			  	}
			}
			if (!phoneReg.test($('.z_reserve_phone').val())){ 
		    	layer.msg('预定手机号格式不正确');
		    }
			$(this).addClass("on");
		})
		//点击
		$('.z-tour-order-head .z-order-goback').click(function(){
			//调用封装的$comfirm弹窗
			$confirm({
				msg: '订单尚未提交，返回将放弃填写',
				rightbtn:'继续填写',
				//点击取消的回调
				cancel: function(){
					window.history.go(-1);
				},
				//点击继续填写的回调
				ensure: function(){
					layer.close(confirmBox);
				}
			});
		})
	});
	
})
