$(function(){
	var $this =  $(this),
		num = $('.w-number').text();
	// 点击全部提现
	$('.allwith').click(function(){
		var inputVal = $('.input').find('input'),
			num_ = $(this).siblings().find('.w-number').text();

			inputVal.val(num_);
			texTare();
	})

	// 点击有内容按钮改变颜色
	$('.input input').on('input',function(){
		var thisVal = $('.input input').val();
		if(Number(thisVal) > Number(num)) {
			$('.userTips').text('最大金额不能超过余额');
			$('.pub-btn-danger').addClass('btn-ccc');
		}else{
			$('.userTips').text('');
		}
		texTare();
	})



	// $('.input input').keyup(function(){  
 //             var c=$(this);    
 //             if(/[^\d]/.test(c.val())){//替换非数字字符    
 //              var temp_amount=c.val().replace(/[^\d]/g,'');    
 //              $(this).val(temp_amount);    
 //             }    
 //        })  



	function texTare(){
		var _val = $('.input input').val();
		if (_val!=="") {
			$('.pub-btn-danger').removeClass('btn-ccc');
		}else{
			$('.pub-btn-danger').addClass('btn-ccc');
		}
	}
	

})