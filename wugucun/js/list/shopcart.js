/* index.js文件
 * ------1.编辑状态
 * ------------1.1未选中商品---->layer.msg提示
 * ------------1.2选中了商品---->layer.msg提示
 * ------2.删除状态
 * ---------->2.1未选中商品---->layer.msg提示
 * ---------->2.2选中了商品---->跳转下单页面
 * */
$(function(){
	
	layui.use('layer', function(){
		var layer = layui.layer;
		
		//购物车-编辑
		$('.head-edit').click(function(){
			var $this = $(this);
			var $a = $('#shopcart-to');
			if ($this.hasClass('cor-red')) {
				//取消编辑
				$this.removeClass('cor-red').text('编辑');
				$('#shopcart-to-sc').hide();
				$('#shopcart-to-js').show();
			} else {
				//编辑商品
				$this.addClass('cor-red').text('完成');
				$('#shopcart-to-sc').show();
				$('#shopcart-to-js').hide();
			}
		});
		//购物车-复选框
		//勾选数量
		function choosenum() {
			var num=0;
			var objs=$(".shopcart-check-single");
			for (var i=0;i<objs.length;i++) {
				if (objs.eq(i).hasClass("on")) {
					num++;
				}
			}
			if (num==0) {
				$(".z-choose-num").text('全选');
				$(".submit-btn").removeClass("on");
			}else{
				$(".z-choose-num").text('已选('+num+')');
				$(".submit-btn").addClass("on");
			}
			if (num<objs.length) {
				$('.shopcart-check-all').find('.public-checkbox').removeClass('on').find('input').removeAttr('checked');
			}
		}
		//自定义选中样式，默认'on'
		function selectSingleCheckbox(obj, classname,fn){
			var classname = classname || 'on';
			$(obj).click(function(){ 
				var $this = $(this);
				$this.hasClass(classname) ? $this.removeClass(classname).find('input').removeAttr('checked') :
					$this.addClass(classname).find('input').attr('checked', 'checked');	
				choosenum();
			});
		}
		selectSingleCheckbox('.shopcart-check-single');//选中单个
		
		//全选
		$('.shopcart-check-all').click(function(){
			var $this = $(this),
				$public=$this.find('.public-checkbox');
			//取消全选
			if ($public.hasClass('on')) {
				//取消自身选中状态
				$public.removeClass('on').find('input').removeAttr('checked')
				//遍历所有的checkbox使之取消选中
				$('.shopcart-check-single').each(function(e){
					$(this).removeClass('on').find('input').removeAttr('checked');
				})
				$(".z-choose-num").text('全选');
				$(".submit-btn").removeClass("on");
			//全选	
			} else {
				//自身添加选中状态
				$public.addClass('on').find('input').attr('checked', 'checked')
				//遍历所有的checkbox使之选中
				$('.shopcart-check-single').each(function(e){
					$(this).addClass('on').find('input').attr('checked', 'checked');
				})
				choosenum();
			}
		});
		
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
		
		//删除选中的商品函数
		function deleteSelectGoods(){
			$('.shopcart-check-single').each(function(e){
				if($(this).hasClass('on')) {
					$(this).parents('li').remove();
				}
			});
			$('.public-checkbox').removeClass('on').find('input').removeAttr('checked');
		}
		//删除
		$('#shopcart-to-sc').click(function(){
			//没选中要删除的商品进行提示
			if(getSelectNum() == 0) {
				layer.msg('请选择商品');
			//删除选中
			} else {
				//调用确认弹窗
				$confirm({
					msg: '要删除所选商品？',
					rightbtn:'确认',
					//点击确定的回调
					ensure: function(){
						deleteSelectGoods();
						$(".z-choose-num").text('全选');
						$(".submit-btn").removeClass("on");
					}
				});
			}
		});
		//结算时要选中商品
		$('#shopcart-to-js').click(function(){
			if(getSelectNum() == 0) {
				layer.msg('请选择商品');
				return false;//阻止a的默认行为
			}
		});
	
	})
})