$(function () {
	//返回弹窗
	layui.use('layer', function(){
		var layer = layui.layer;
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
//	明细弹窗
	$underpup({
		btn: $(".z-order-detailed-btn"),
		box:$("#z-order-detailed")
	});
	$(".z-close-mask").click(function () {
		$("#z-order-detailed").removeClass('top');
		document.body.style.height = 'unset';
	    document.body.style['overflow-y'] = 'auto' ;//弹窗消失的时候
	})
})
