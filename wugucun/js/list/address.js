
$(function(){
	//layer
	layui.use('layer', function(){
		var layer = layui.layer;
		
		//设置默认地址
		$('.adderss-tabs .default').click(function() {
			var $this = $(this);
			if ( $this.hasClass('on') ) return false;
			$this.addClass('on').find('.font').text('默认地址');
			$this.parents('li').siblings().find('.default').removeClass('on').find('.font').text('设为默认');
			layer.msg('设置成功')
		});
		//删除收货地址
		$('.adderss-tabs .address-delete').click(function() {
			var $this = $(this),
				$li = $this.parents('li'),
				isDefault = $li.find('.default').hasClass('on');
			$confirm({
				msg:'确定要删除此收货地址吗',
				rightbtn:'确认',
				ensure: function() {
					//确定的回调
					if ( isDefault ) {
						layer.msg('不可删除默认地址');

					} else {
						$li.remove();
						layer.msg('已删除');
					}
				}
			})
		});
	});

	// $('#default .left').click(function(){
	// 	$(this).toggleClass('on');
	// })
});