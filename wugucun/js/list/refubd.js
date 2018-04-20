$(function () {
//				下方弹出-弹窗调用
				$underpup({
					btn: $(".sotg-btn"),
					box:$("#sotg-box")
				});
				// 下方弹出-弹窗调用
				$underpup({
					btn: $(".arr-btn"),
					box:$("#arr-box")
				});


		// 选择退款原因
		$('#arr-box input').on('click',function(){
			$('.err-txt').text(sotg($(this)));

		})	
		// 选择货物状态
		$('#sotg-box input').on('click',function(){
			$('.sotg-txt').text(sotg($(this)));

		})			
		// 选择状态
		function sotg(e){
			var val = e.val();
			return val ;
		}


		// 确认取消-弹窗调用
				layui.use('layer', function(){
					var layer = layui.layer;
					//点击
					$('.del-btn-two').click(function(){
						//调用封装的$comfirm弹窗
						$confirm({
							msg: '确定取消退款申请？',
							rightbtn:'确认',
							//点击确定的回调
							ensure: function(){
								layer.msg('已取消退款申请');
							}
						});
					})
				}); 

			})
				