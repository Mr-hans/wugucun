$(function () {
	
	//	注册信息--判断
	$(".z_register_btn").click(function () {
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
			if (!phoneReg.test($('.z_recom_phone').val())){ 
		    	layer.msg('推荐号码格式不正确');
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
	//地区选择插件   
	!function () {
		var $target = $('#Address');
	
		$target.on('click', function (event) {
			event.stopPropagation();
			$target.citySelect('open');
		});
	
		$target.on('done.ydui.cityselect', function (ret) {
			$(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
		});
	}();
})
