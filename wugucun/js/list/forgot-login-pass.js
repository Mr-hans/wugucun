$(function () {
//	关闭按钮
	$(".z_forgot_close").click(function(){
		window.history.go(-1);
	});
	//	忘记密码信息--判断
	$(".z_forgotpd_btn").click(function () {
		var vals=$(".z_veri_int input[type='text']")
		var enptyReg=/^(\S)/;
		var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
		layui.use('layer', function(){
			var layer = layui.layer;
			for (var i=0;i<vals.length;i++) {
				if (!enptyReg.test(vals.eq(i).val())) {
			  		layer.msg(vals.eq(i).attr('placeholder'));
			  		return false;
			  	}
			}
			if ($(".z_set_pass").val()!=$(".z_new_pass").val()) {
				layer.msg('两次密码输入不一致！请重新输入');
			}
		});
	})
	//	获取验证码
	layui.use('layer', function(){
		var layer = layui.layer;
		$(".z_get_vericode input").click(function () {
			isPone(this)
		})
	});
//	获取验证码
	function isPone(_this) { 
		var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
	    if (!phoneReg.test($('.isPone').val())){ 
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
			obj.value = t+'s';
			t--;
		}
		setTimeout(function(){
			code(obj)
		},1000); 
	}
})
