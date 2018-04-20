$(function(){

	//	确认取消-弹窗调用
				layui.use('layer', function(){
					var layer = layui.layer;
					//点击
					$('.head-edit').click(function(){
						//调用封装的$comfirm弹窗
						$confirm({
							msg: '确定清空我的足迹吗？',
							rightbtn:'确认',
							//点击确定的回调
							ensure: function(){
								layer.msg('已清空记录');
							}
						});
					})
				}); 

})