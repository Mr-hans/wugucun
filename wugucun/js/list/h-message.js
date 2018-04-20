$(function(){

	var self = this;
	var longClick =0;
  // 确认取消-弹窗调用
  // 长按触发
	layui.use('layer', function(){
		var layer = layui.layer;
		$(".press").on({
	    	touchstart: function(e){
	       		longClick=0;//设置初始为0
	        	timeOutEvent = setTimeout(function(){
	            	//调用封装的$comfirm弹窗
						$confirm({
							msg: '确定删除消息？',
							rightbtn:'确认',
							//点击确定的回调
							ensure: function(){
								layer.msg('已删除该条消息');
								}
							});
						longClick=1;//假如长按，则设置为1
	        	},300);
	    	},
		    touchmove: function(){
		        clearTimeout(timeOutEvent);
		        timeOutEvent = 0;
		        e.preventDefault();
		     },
		    touchend: function(e){
		        clearTimeout(timeOutEvent);
		        if(timeOutEvent!=0 && longClick==0){//点击
		            //此处为点击事件----在此处添加跳转详情页
		            window.location.href='system-message.html'
		        }
		        return false;
		    }
		});

	});
})