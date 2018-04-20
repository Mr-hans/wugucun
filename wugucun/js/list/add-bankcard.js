$(function(){

	$('.add-card-list input').on('input',function(){
		inputNull();
	})

	// 检查input内容是否为空，不为空给按钮加个类
	function inputNull(){
		var _val = $('.card-mm').val() && $('.card-name').val() && $('.id-card').val() ;
		if (_val!=="") {
			$('.pub-btn-danger').removeClass('btn-ccc');
		}else{
			$('.pub-btn-danger').addClass('btn-ccc');
		}
	}






})