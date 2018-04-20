$(function () {
//	清除输入框
	$(".z-search-del").click(function () {
		$(".z-search-int input").val("").focus();
	})
	//确认取消-弹窗调用
	layui.use('layer', function(){
		var layer = layui.layer;
		//点击
		$('.z-clear-his').click(function(){
			//调用封装的$comfirm弹窗
			$confirm({
				msg: '确定清除历史搜索吗？',
				rightbtn:'确认',
				//点击确定的回调
				ensure: function(){
					$(".z-history-search").hide().find('.z-search-list li').remove();
					layer.msg('已清除历史搜索');
				}
			});
		})
	}); 
})
