$(function(){
	// 点击弹出性别选择
	$('.close-gender').click(function(){

		$('.gender-box').removeClass('hide');
	})
	// 点击选择性别
	$('.gender-fox').click(function(){
		var $this = $(this),
			label = $this.find('.label'),
			labelTxt = $this.find('.flex1').text(),
			gender = $('.close-gender').find('.pub-right');
		label.addClass('select').parent().siblings('.gender-fox').find('.label').removeClass('select');
		gender.text(labelTxt);
		$('.gender-box').addClass('hide');
	})

})