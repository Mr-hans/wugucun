$(function () {
	//	获取验证码
	layui.use('layer', function(){
		var layer = layui.layer;
		$(".code_btns").click(function () {
			isPone(this)
		})
	});
//	获取验证码
	function isPone(_this) {  
	  	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
	    if (!myreg.test($('.isPone').val())){ 
	    	layer.msg('手机号格式不正确');
	    } else {
	        code(_this);
	    }  
	}		
//	倒计时
	var t = 60;
	function code(obj) {
		//倒计时
		if(t==0){
			obj.removeAttribute("disabled");
			obj.value = '获取验证码';
			t =60;
			return;
		}else{
			obj.setAttribute("disabled",true);
			obj.value = t+'s后再试';
			t--;
		}
		setTimeout(function(){
			code(obj)
		},1000); 
	}
})