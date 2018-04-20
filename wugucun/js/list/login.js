$(function () {
	//	登录信息--判断
	layui.use('layer', function(){
		var layer = layui.layer;
		$(".z_login_btn").click(function () {
			var vals=$(".z_veri_int input[type='text']")
			var enptyReg=/^(\S)/;
			var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
			for (var i=0;i<vals.length;i++) {
				if (!enptyReg.test(vals.eq(i).val())) {
			  		layer.msg(vals.eq(i).attr('placeholder'));
			  		return false;
			  	}
			}
			if (!phoneReg.test(vals.eq(0).val())){ 
		    	layer.msg('手机号格式不正确');
		    }
		})
	});
	
})
