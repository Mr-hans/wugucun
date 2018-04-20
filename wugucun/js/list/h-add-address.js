$(function(){

	// 添加地址选择性别
	$('.add-address-name .radio').click(function(){
		var $this = $(this);
			if ( $this.hasClass('on') ) return false;
			$this.addClass('on');
			$this.siblings().removeClass('on');
	})
	//设置为默认地址
	$('#default .left').click(function() {
		var $this = $(this);
		if ( $this.hasClass('on') ) {
			$this.removeClass('on').find('input').removeAttr('checked');
		} else {
			$this.addClass('on').find('input').attr('checked', 'checked');
		}
	});
	//地区选择插件   
	!function () {
		var $target = $('#Address');
	
		$target.on('click', function (event) {
			event.stopPropagation();
			$target.citySelect('open');
		});
	
		$target.on('done.ydui.cityselect', function (ret) {
			$(this).find('input').val(ret.provance + ' ' + ret.city + ' ' + ret.area);
		});
	}();

})