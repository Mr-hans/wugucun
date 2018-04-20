$(function(){
	
	layui.use('layer', function(){
		var layer = layui.layer;
		//购物车-复选框
		//自定义选中样式，默认'on'
		function selectSingleCheckbox(obj, classname,fn){
			var classname = classname || 'on';
			$(obj).click(function(){ 
				var $this = $(this);
				$this.hasClass(classname) ? $this.removeClass(classname).find('input').removeAttr('checked') :
					$this.addClass(classname).find('input').attr('checked', 'checked');	
				if ($this.hasClass(classname)) {
					$(".submit-btn").addClass("on");
				}else{
					$(".submit-btn").removeClass("on");
				}
			});
		}
		selectSingleCheckbox('.shopcart-check-single');//选中单个
		
		//获取选中的商品函数
		function getSelectNum() {
			var num = 0;
			$('.shopcart-check-single').each(function(e){
				if($(this).hasClass('on')) {
					num++;
				}
			})
			return num;
		}
		
		//结算时要选中商品
		$('#write-order-sub').click(function(){
			if(getSelectNum() == 0) {
				layer.msg('请阅读并同意《五谷村服务协议》');
				return false;//阻止a的默认行为
			}
		});
	
	})
})