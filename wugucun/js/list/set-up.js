$(function(){

	// 确认取消-弹窗调用
				layui.use('layer', function(){
					var layer = layui.layer;
					//点击
					$('.pub-btn-danger').click(function(){
						//调用封装的$comfirm弹窗
						$confirm({
							msg: '确定退出该账号吗？',
							rightbtn:'确认',
							//
							ensure:function () {
								window.location.href='login.html';
							}
						});
					})
				}); 

})