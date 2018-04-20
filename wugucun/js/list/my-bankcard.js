$(function () {

		// 确认取消-弹窗调用
				layui.use('layer', function(){
					var layer = layui.layer;
					//点击
					$('.unbundling').click(function(){
						//调用封装的$comfirm弹窗
						$confirm({
							msg: '您确定取消绑定该银行卡？',
							rightbtn:'确认',
							//点击确定的回调
							ensure: function(){
								layer.msg('已取消绑定');
							}
						});
					})
				}); 


})
				